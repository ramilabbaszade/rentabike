import React, { useState } from 'react'
import BikesList from '../components/BikesList'
import MapContainer from '../../shared/components/UIElements/MapContainer'
import { BIKES, BikeTypes, BikeSize } from '../../data'
import cities from '../../az.json'

import './Bikes.css'

const Bikes = () => {
    const [filteredDataState, setFilteredDataState] = useState(BIKES)
    const handleTypeFilter = e => {
        console.log(e.target.value)
        let filteredData;
        if (e.target.value === 'All') {
            filteredData = BIKES;
        } else {
            filteredData = BIKES.filter(item => { return (item.type === e.target.value) || (item.size === e.target.value) || (item.city === e.target.value) })
        }
        setFilteredDataState(filteredData)
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
            <BikesList items={filteredDataState} />
        </div>
        <div className="bikes-map">
            <MapContainer style={{ height: '50rem' }} coords={BIKES} mapZoom={9} />
        </div>
    </div>
}

export default Bikes
