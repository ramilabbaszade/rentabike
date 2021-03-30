import React, {Component} from "react";
import {Map, TileLayer, Marker} from "react-leaflet";

export default class MapExample extends Component {
    state = {
        center: {
            lat: 42.9923319,
            lng: 44.2252427
        },
        zoom: 6,
        draggable: true,
        markerData: []
    };

    addMarker = event => {
        const {markerData} = this.state;
        const coords = event.latlng;
        this.setState({
            markerData: [coords]
        });
    };

    updateMarker = event => {
        console.log(this.state.markerData);
        this.props.setLocation(this.state.markerData)
        const latLng = event.target.getLatLng(); //get marker LatLng
        const markerIndex = event.target.options.marker_index; //get marker index
        //update
        this.setState(prevState => {
            const markerData = [...prevState.markerData];
            markerData[markerIndex] = latLng;
            return {markerData: markerData};
        });
    };

    render() {
        return (
            <Map
                center={this.state.center}
                zoom={this.state.zoom}
                onClick={this.addMarker}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {this.state.markerData.map((element, index) => (
                    <Marker
                        key={index}
                        marker_index={index}
                        position={element}
                        draggable={this.state.draggable}
                        onDragend={this.updateMarker}
                    />
                ))}
            </Map>
        );
    }
}
