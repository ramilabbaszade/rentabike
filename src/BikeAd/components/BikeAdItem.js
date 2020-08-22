import React from 'react'
import Avatar from '../../shared/components/UIElements/Avatar'
import MapContainer from '../../shared/components/UIElements/MapContainer'

const BikeAdItem = (props) => {
    return (
        <>
            <div className="bike-ad__header-image">
                <img src={props.imageUrl} alt="img" />
            </div>
            <div className="bike-ad__details">
                <div className="bike-ad__details-in container">
                    <div className="bike-ad__details-in__left">
                        <h2>Bike - Road - {props.size}^</h2>
                        <p>Çatdırılma varmı? - Xeyr</p>
                    </div>
                    <div className="bike-ad__details-in__right">
                        <h2>{props.price}AZN/1.saat</h2>
                        <h2>6AZN/2.saat</h2>
                        <h2>8AZN/3.saat</h2>
                    </div>
                </div>
            </div>
            <div className="bike-ad__details-more container">
                <div className="bike-ad__details-more__sellerInfo">
                    <Avatar className="avatar-middle" imageUrl={props.creator.creatorImg} />
                    <h2> {props.creator.name} </h2>
                </div>
                <MapContainer singleCoord={props.location}/>
            </div>
        </>
    )
}

export default BikeAdItem
