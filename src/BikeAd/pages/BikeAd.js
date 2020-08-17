import React from 'react'
import { useParams } from 'react-router-dom'
import bikeImg from '../../assets/img/Ofo_Springwise_1280x750.jpg'

import Avatar from '../../shared/components/UIElements/Avatar'
import BikeAdList from '../components/BikeAdList'

import './BikeAd.css'


const DUMMY_AD = [
    {
        id: 'b1',
        title: 'Best bike everr1',
        description: "Bla bla yeah best bike and now you can buy it",
        address: "CWC8+JP Baku, Azerbaijan",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAvAqrd3nrpG8l378_oLzfrSCJ4vvpHRdUCw&usqp=CAU",
        city: "Sumgayit",
        size: 24,
        price: 3,
        location: {
            lat: 40.4216151,
            lng: 49.9146403
        },
        creator: "u1"
    },
    {
        id: 'b2',
        title: 'Best bike ever',
        description: "Bla bla yeah best bike and now you can buy it",
        address: "CWC8+JP Baku, Azerbaijan",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAvAqrd3nrpG8l378_oLzfrSCJ4vvpHRdUCw&usqp=CAU",
        city: "Sumgayit",
        size: 26,
        price: 10,
        location: {
            lat: 40.4216151,
            lng: 49.9146403
        },
        creator: "u2"
    }
]

const User = () => {
    const bikeId = useParams().bikeId;
    const loadedBikes = DUMMY_AD.filter(bike => bike.id === bikeId)
    return ( <BikeAdList items={loadedBikes}/>
    )
}

export default User
