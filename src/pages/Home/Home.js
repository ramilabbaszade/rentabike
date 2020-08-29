import React from 'react'
import { Link } from 'react-router-dom'
import illus1 from '../../assets/illustrations/undraw_map_1r69.png'
import illus2 from '../../assets/illustrations/undraw_chat_1wo5.png'
import illus3 from '../../assets/illustrations/undraw_Ride_a_bicycle_2yok.png'
import MapContainer from '../../shared/components/UIElements/MapContainer'
import {BIKES} from '../../data'

import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="home-header">
                <div className="home-header__content">
                    <h1>Rent a bike near of you..</h1>
                    <input className="home-header__search" type="text" placeholder="Search for cities, street.." />
                </div>
            </div>
            <div className="home-body container">
                <div className="home-how_it_works">
                    <div className="title-header_container">
                        <h1 className="title-header">How it works?</h1>
                        <hr className="small-line-hr" />
                    </div>
                    <div className="home-cards-info">
                        <div className="home-cards-info__card">
                            <img src={illus1} alt="" />
                            <h4>Search for the nearest location to you</h4>
                        </div>
                        <div className="home-cards-info__card">
                            <img src={illus2} alt="" />
                            <h4>Search for the nearest location to you</h4>
                        </div>
                        <div className="home-cards-info__card">
                            <img src={illus3} alt="" />
                            <h4>Search for the nearest location to you</h4>
                        </div>
                    </div>
                </div>
                <Link to="/">
                    <div className="btn">
                        Rent a bike
                    </div>
                </Link>
            </div>
            <div className="map-section">
                <div className="title-header_container">
                    <h1 className="title-header">Find bikes on the map</h1>
                    <hr className="small-line-hr" />
                </div>
                <MapContainer coords={BIKES} mapStyle={{height:"50vh"}} />
            </div>
        </div>
    )
}

export default Home
