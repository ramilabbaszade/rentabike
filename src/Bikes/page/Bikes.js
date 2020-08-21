import React from 'react'
import BikesList from '../components/BikesList'

import './Bikes.css'

const Bikes = () => {
    const BIKES = [
        {
            id: "b1",
            title: "Super velosiped",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAvAqrd3nrpG8l378_oLzfrSCJ4vvpHRdUCw&usqp=CAU",
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
                lat: 40.4216151,
                lng: 49.9146403
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
    // return <BikesList items={BIKES}/>
    return <div className="bikes-page">
        <BikesList items={BIKES} />
        <div className="bikes-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d6077.017865924469!2d49.80943812852878!3d40.39757501746932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x40308778b9b607a1%3A0xc595257d375223b2!2sTbilisi%20avenue%2C%20Baku%2C%20Azerbaijan!3m2!1d40.3975751!2d49.8138155!5e0!3m2!1sen!2s!4v1597427682151!5m2!1sen!2s" title="map" frameborder="0" allowfullscreen="" aria-hidden="false" tabIndex="0" />
        </div>
    </div>
}

export default Bikes
