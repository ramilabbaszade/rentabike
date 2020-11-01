import React, { useState, useEffect, useContext } from 'react'
import BikesList from '../components/BikesList'
import MapContainer from '../../shared/components/UIElements/MapContainer'
import { BikeTypes, BikeSize } from '../../data'
import cities from '../../az.json'

import { BikesContext } from '../../shared/context/BikesContext'
import './Bikes.css'

const Bikes = () => {
    const {bikes} = useContext(BikesContext)
    useEffect(() => {
        document.title = "Velorent - sizə ən yaxın iki təkər :)"
    }, [])

    const [filteredDataState, setFilteredDataState] = useState(bikes)
    const [isHovered, setIsHovered] = useState(null)
    const handleTypeFilter = e => {
        console.log(e.target.value)
        let filteredData;
        if (e.target.value === 'All') {
            filteredData = bikes;
        } else {
            filteredData = bikes.filter(item => { return (item.type === e.target.value) || (item.size === e.target.value) || (item.city === e.target.value) })
        }
        setFilteredDataState(filteredData)
    }
    const handleHoverMarker = (id) => {
        setIsHovered(id)
    }

    return <div className="bikes-page">
        <div>
            <div className="bike-filter">
                <select name="" id="">
                    <option value="s">Sıralama..</option>
                    <option value="Hey">Ən çox baxılan</option>
                    <option value="Hey">Ən son paylaşılan</option>
                </select>
                <select name="" id="">
                    <option onClick={handleTypeFilter} value="All">Tipi seç...</option>
                    {
                        BikeTypes.map((item, i) => {
                            return <option key={i} onClick={handleTypeFilter} value={item[0]}> {item[1]} </option>
                        })
                    }
                </select>
                <select name="" id="">
                    <option onClick={handleTypeFilter} value="All">Şəhər</option>
                    {
                        cities.map((item, i) => {
                            return <option key={i} onClick={handleTypeFilter} value={item.city}> {item.city} </option>
                        }).sort()
                    }
                </select>
                <select name="" id="">
                    <option onClick={handleTypeFilter} value="All">Ölçü</option>
                    {
                        BikeSize.map((item, i) => {
                            return <option key={i} onClick={handleTypeFilter} value={item}>{item}</option>
                        })
                    }
                </select>
            </div>
            <hr className="bike-bottom-line" />
            <BikesList handleHoverMarker={handleHoverMarker} items={filteredDataState} />
        </div>
        <div className="bikes-map">
            <MapContainer isHovered={isHovered} style={{ height: '50rem' }} coords={bikes} mapZoom={9} />
        </div>
    </div>
}

export default Bikes
