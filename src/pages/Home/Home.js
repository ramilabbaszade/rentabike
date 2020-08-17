import React from 'react'
import { Link } from 'react-router-dom'
import illus1 from '../../assets/illustrations/undraw_map_1r69.png'
import illus2 from '../../assets/illustrations/undraw_chat_1wo5.png'
import illus3 from '../../assets/illustrations/undraw_Ride_a_bicycle_2yok.png'

import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="home-header">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#393f4d" fill-opacity="1" d="M0,192L120,208C240,224,480,256,720,234.7C960,213,1200,139,1320,101.3L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
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
                <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d6077.017865924469!2d49.80943812852878!3d40.39757501746932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x40308778b9b607a1%3A0xc595257d375223b2!2sTbilisi%20avenue%2C%20Baku%2C%20Azerbaijan!3m2!1d40.3975751!2d49.8138155!5e0!3m2!1sen!2s!4v1597427682151!5m2!1sen!2s" title="map" frameborder="0" allowfullscreen="" aria-hidden="false" tabIndex="0" />
            </div>
        </div>
    )
}

export default Home
