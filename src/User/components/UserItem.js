import React from "react";
import Avatar from "../../shared/components/UIElements/Avatar";
import BikeItem from "../../Bikes/components/BikeItem";

import "./UserItem.css";

const UserItem = (props) => {
  return (
    <div className='user-item'>
      <div className='user-item__header'>
        <Avatar redirect={"#"} creatorImg={props.avatar} className='avatar-large' />
        <div className='user-item__header_main'>
          <h1>{props.fullName}</h1>
          {props.city && (
            <div className='user-item__header__city'>
              <i className='fas fa-map-marker-alt'></i>
              {props.city}
            </div>
          )}
          <p>{props.bio}</p>
        </div>
      </div>
      <div className='user-item__body'>
        <h3>Shared Bikes</h3>
        <div className='user-item__body__bike-list'>
          {props.bikes.length === 0 ? (
            <h4>Bike not found</h4>
          ) : (
            props.bikes.map((bike) => {
              return (
                <BikeItem
                  id={bike.id}
                  key={bike.id}
                  creator={bike.creator}
                  title={bike.title}
                  size={bike.size}
                  price={bike.price.first}
                  image={bike.images[0]}
                  city={bike.city}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default UserItem;
