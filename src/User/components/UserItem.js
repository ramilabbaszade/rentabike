import React from "react";
import Avatar from "../../shared/components/UIElements/Avatar";
import BikeItem from "../../Bikes/components/BikeItem";

import "./UserItem.css";

const UserItem = (props) => {
  return (
    <div className='user-item'>
      <div className="user-header">
        <div className="user-header__i">
          <Avatar creatorImg={props.avatar} className="avatar-large" />
          <div className="user-header__info">
            <h2> {props.fullName} </h2>
            <p className="user-header__city"> <i className='fas fa-map-marker-alt'></i> {props.city} </p>
            <p className='user-header__bio'> {props.bio} </p>
          </div>
        </div>
      </div>

      <div className="user-body">
        <h3>Shared Bikes</h3>
        <div className="user-body__shared-bikes">
          {props.bikes.length === 0 ? (
            <h4>Bike not found</h4>
          ) : (
              props.bikes.map(bike => {
                return <BikeItem
                  id={bike.id}
                  key={bike.id}
                  title={bike.title}
                  size={bike.size}
                  city={bike.city}
                  price={bike.price.first}
                  creator={bike.creator}
                  image={bike.images[0]}
                />
              }))}
        </div>
      </div>

    </div>
  );
};

export default UserItem;
