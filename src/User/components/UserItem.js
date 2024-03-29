import React, {useEffect} from 'react'
import Avatar from '../../shared/components/UIElements/Avatar'
import { Link } from 'react-router-dom'
import BikeItem from '../../Bikes/components/BikeItem'

import './UserItem.css'

const UserItem = (props) => {
  useEffect(()=>{
    document.title = `${props.fullName} - veloorent.com`

  },[props.fullName])


  return (
    <div className="user_container">
      <div>
      <div className="user-header">
        <div className="user-header__i">
          <Avatar redirect="#" creatorImg={props.avatar} className="avatar-large" />
          <div className="user-header__confirmed">
            <div className="user-header__info_icon-container">
              <i className="far fa-smile"></i>
              <span> Yeni üzv </span>
            </div>
            <div className="user-header__info_icon-container">
              <i className="fas fa-check"></i>
              <span>Hesab təsdiqləndi</span>
            </div>
          </div>

          <div className="user-header__editBtn">
              Əlaqə saxla
          </div>
        </div>
      </div>
      <div className="user-header user-header__social">
        { props.users_accounts ?
            <>
              <div><Link to={`${props.users_accounts?.instagram_url}`}><i className="fab fa-instagram"></i></Link></div>
              <div><Link to={`${props.users_accounts?.fb_url}`}><i className="fab fa-facebook-square"></i></Link> </div>
              <div><a href={`tel:${props.users_accounts?.mobile_num}`}><i className="fas fa-phone"></i></a> </div>
            </>
          :
            `Əlaqə vasitəsi tapılmadı`
        }
      </div>
      </div>
      <div className="user-body">
        <section className="user-body__section1">
          <h1> {props.fullName} </h1>
          <small className="small-text">Qoşuldu: {props.date} </small>
        </section>
        <section className="user-body__section2">
          <h1 className="user-body__section2_title">Haqqında</h1>
          <p >{props.bio}</p>
          <div className="icon-container">
            <i className="fas fa-street-view"></i>
            <div>{props.city}</div>
          </div>
        </section>
        <hr className="bike-bottom-line" />
        <div className="user-body__shared-bikes">
          <h2 className='user-body__title'>Aktiv elanlar ({props.bikes && props.bikes.length})</h2>
          {!props.bikes ? (
            <h4>Elan tapılmadı</h4>
          ) : (
              props.bikes.map(bike => {
                return <BikeItem
                  id={bike.id}
                  key={bike.id}
                  title={bike.title}
                  type={bike.bike_type}
                  views={bike.view_count}
                  size={bike.size}
                  accessories={bike.accessories}
                  city={bike.city}
                  price={bike.price.first}
                  image={bike.images[0]}
                  actionicons
                />
              }))} 

        </div>
      </div>

    </div>
  )
}

export default UserItem
