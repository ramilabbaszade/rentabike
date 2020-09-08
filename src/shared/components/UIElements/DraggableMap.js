import React, { useRef, useState, forwardRef } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { Controller } from 'react-hook-form'

const DraggableMap = (props,{control}) => {
    const [draggable, setDraggable] = useState(true)
    let refmarker = useRef(<Marker />)

    let toggleDraggable = () => {
        setDraggable(!draggable)
    }

    let updatePosition = () => {
        const marker = refmarker.current
        if (marker != null) {
            props.setMarker(marker.leafletElement.getLatLng())
            console.log(marker.props.position)
        }
    }
    const position = [40.500, 48.500]
    const markerPosition = [props.markers.lat, props.markers.lng]

    return (
        <Controller
            control={control}
            name={props.name}
            defaultValue={[]}
            render={() => {
                return <Map id={props.name} ref={props.register} className="leaflet-draggable" center={position} zoom={7}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker
                        draggable={draggable}
                        onDragend={updatePosition}
                        position={markerPosition}
                        ref={refmarker}>
                        <Popup minWidth={90} >
                            <span onClick={toggleDraggable}>
                                {draggable ? 'DRAG MARKER' : 'MARKER FIXED'}
                            </span>
                        </Popup>
                    </Marker>
                </Map>
            }}
        />

    )
}


export default DraggableMap;