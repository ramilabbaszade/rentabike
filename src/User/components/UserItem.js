import React from 'react'
import Avatar from '../../shared/components/UIElements/Avatar'
import { Link } from 'react-router-dom'
import BikeItem from '../../Bikes/components/BikeItem'

import './UserItem.css'

const UserItem = (props) => {
  return (
    <div className="user_container">
      <div className="user-header">
        <div className="user-header__i">
          <Avatar creatorImg={props.avatar} className="avatar-large" />
          <div className="user-header__confirmed">
            <div className="user-header__info_icon-container">
              <i class="far fa-smile"></i>
              <span> Yeni üzv </span>
            </div>
            <div className="user-header__info_icon-container">
              <i class="fas fa-check"></i>
              <span>Hesab təsdiqləndi</span>
            </div>
          </div>

          <div className="user-header__editBtn">
            <Link to='/'>
              Mesaj yaz
            </Link>
          </div>
        </div>
      </div>

      <div className="user-body">
        <section className="user-body__section1">
          <h1> {props.fullName} </h1>
          <small className="small-text">Qoşuldu: 01.08.2020</small>
        </section>
        <section className="user-body__section2">
          <h1 className="user-body__section2_title">Haqqında</h1>
          <p >{props.bio}</p>
          <div className="icon-container">
            <i class="fas fa-street-view"></i>
            <div>{props.city}</div>
          </div>
        </section>
        <hr className="bike-bottom-line" />
        <div className="user-body__shared-bikes">
          <h2 className='user-body__title'>Aktiv elanlar</h2>
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
                  actionicons
                >
                  <div className="bike-item__action-icons">
                    <Link to="/" className="bike-item__action-icon icon-edit">
                      <i class="fas fa-pen"></i>
                    </Link>
                    <Link to='/' className="bike-item__action-icon icon-remove">
                      <i class="fas fa-trash-alt"></i>
                    </Link>
                  </div>
                </BikeItem>
              }))}

        </div>
      </div>

    </div>
  )
}

export default UserItem
