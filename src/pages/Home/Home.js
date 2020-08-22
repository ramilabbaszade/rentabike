import React from 'react'
import { Link } from 'react-router-dom'
import illus1 from '../../assets/illustrations/undraw_map_1r69.png'
import illus2 from '../../assets/illustrations/undraw_chat_1wo5.png'
import illus3 from '../../assets/illustrations/undraw_Ride_a_bicycle_2yok.png'
import MapContainer from '../../shared/components/UIElements/MapContainer'

import './Home.css'

const BIKES = [
    {
        id: "b1",
        title: "Mohtesem velik",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAvAqrd3nrpG8l378_oLzfrSCJ4vvpHRdUCw&usqp=CAU",
        description: "Bla bla yeah best bike and now you can buy it",
        address: "CWC8+JP Baku, Azerbaijan",
        city: "Sumgayit",
        size: 26,
        price: 10,
        location: {
            lat: 40.6122942,
            lng: 49.6102323
        },
        creator: {
            id:'u9',
            creatorImg:'https://cdn.psychologytoday.com/sites/default/files/styles/image-article_inline_full/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=ji6Xj8tv'
        }
    },
    {
        id: "b2",
        title: "Super velosiped",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRXWtUti7qoUdDWAf9R5jgRdh1roxvJ1AA1tg&usqp=CAU",
        description: "Bla bla yeah best bike and now you can buy it",
        address: "CWC8+JP Baku, Azerbaijan",
        city: "Sumgayit",
        size: 26,
        price: 10,
        location: {
            lat: 40.5175948,
            lng: 48.9136099
        },
        creator: {
            id:'u9',
            creatorImg:'https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg'
        }
    },
    {
        id: "b3",
        title: "Super velosiped",
        image: "https://cdn.bimbimbikes.com/media/cache/city_overview/uploads/location/bike/image/5ccee9031eb93_20190505_150154.jpg",
        description: "Bla bla yeah best bike and now you can buy it",
        address: "CWC8+JP Baku, Azerbaijan",
        city: "Sumgayit",
        size: 26,
        price: 10,
        location: {
            lat: 40.4216151,
            lng: 49.9146403
        },
        creator: {
            id:'u9',
            creatorImg:'https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg'
        }
    },
    {
        id: "b4",
        title: "Super velosiped",
        image: "https://images.squarespace-cdn.com/content/v1/5a57931bcf81e0dc327d5801/1515780274818-DIUFL1KDP4LTUP28YUCR/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/skiperaj159.JPG?format=2500w",
        description: "Bla bla yeah best bike and now you can buy it",
        address: "CWC8+JP Baku, Azerbaijan",
        city: "Sumgayit",
        size: 26,
        price: 10,
        location: {
            lat: 40.4216151,
            lng: 49.9146403
        },
        creator: {
            id:'u9',
            creatorImg:'https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg'
        }
    },
    {
        id: "b5",
        title: "Super velosiped",
        image: "https://cdn.bimbimbikes.com/media/cache/city_overview/uploads/location/bike/image/5d63dd8aef146_IMG_3814.JPG",
        description: "Bla bla yeah best bike and now you can buy it",
        address: "CWC8+JP Baku, Azerbaijan",
        city: "Sumgayit",
        size: 26,
        price: 10,
        location: {
            lat: 40.4216151,
            lng: 49.9146403
        },
        creator: {
            id:'u9',
            creatorImg:'https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg'
        }
    },
    {
        id: "b6",
        title: "Super velosiped",
        image: "https://images.squarespace-cdn.com/content/v1/5a57931bcf81e0dc327d5801/1515780274818-DIUFL1KDP4LTUP28YUCR/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/skiperaj159.JPG?format=2500w",
        description: "Bla bla yeah best bike and now you can buy it",
        address: "CWC8+JP Baku, Azerbaijan",
        city: "Sumgayit",
        size: 26,
        price: 10,
        location: {
            lat: 40.4216151,
            lng: 49.9146403
        },
        creator: {
            id:'u9',
            creatorImg:'https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg'
        }
    }, {
        id: "b7",
        title: "Super velosiped",
        image: "http://nextjuggernaut.com/wp-content/uploads/2016/02/spokefly-e1455605866974.jpg",
        description: "Bla bla yeah best bike and now you can buy it",
        address: "CWC8+JP Baku, Azerbaijan",
        city: "Sumgayit",
        size: 26,
        price: 10,
        location: {
            lat: 40.4216151,
            lng: 49.9146403
        },
        creator: {
            id:'u9',
            creatorImg:'https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg'
        }
    }, {
        id: "b8",
        title: "Super velosiped",
        image: "https://images.squarespace-cdn.com/content/v1/5a57931bcf81e0dc327d5801/1515780274818-DIUFL1KDP4LTUP28YUCR/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/skiperaj159.JPG?format=2500w",
        description: "Bla bla yeah best bike and now you can buy it",
        address: "CWC8+JP Baku, Azerbaijan",
        city: "Sumgayit",
        size: 26,
        price: 10,
        location: {
            lat: 40.4216151,
            lng: 49.9146403
        },
        creator: {
            id:'u9',
            creatorImg:'https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg'
        }
    }, {
        id: "b9",
        title: "Super velosiped",
        image: "https://images.squarespace-cdn.com/content/v1/5a57931bcf81e0dc327d5801/1515780274818-DIUFL1KDP4LTUP28YUCR/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/skiperaj159.JPG?format=2500w",
        description: "Bla bla yeah best bike and now you can buy it",
        address: "CWC8+JP Baku, Azerbaijan",
        city: "Sumgayit",
        size: 26,
        price: 10,
        location: {
            lat: 40.4216151,
            lng: 49.9146403
        },
        creator: {
            id:'u9',
            creatorImg:'https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg'
        }
    }, {
        id: "b10",
        title: "Super velosiped",
        image: "https://images.squarespace-cdn.com/content/v1/5a57931bcf81e0dc327d5801/1515780274818-DIUFL1KDP4LTUP28YUCR/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/skiperaj159.JPG?format=2500w",
        description: "Bla bla yeah best bike and now you can buy it",
        address: "CWC8+JP Baku, Azerbaijan",
        city: "Sumgayit",
        size: 26,
        price: 10,
        location: {
            lat: 40.4216151,
            lng: 49.9146403
        },
        creator: {
            id:'u9',
            creatorImg:'https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg'
        }
    }
]

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
                <MapContainer coords={BIKES}/>
            </div>
        </div>
    )
}

export default Home
