import React, { useState } from 'react'
import Avatar from '../../shared/components/UIElements/Avatar'
import { Link } from 'react-router-dom'
import BikeItem from '../../Bikes/components/BikeItem'
import Backdrop from '../../shared/components/UIElements/Backdrop'

import './ProfileContainer.css'

const ProfileContainer = (props) => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(null);

    const closeDrawer = () => {
        setDrawerIsOpen(null)
    }

    const openDrawer = (b) => {
        setDrawerIsOpen(b);
    }
    return (
        <div className="profile_container">
            <div className="profile-header">
                <div className="profile-header__i">
                    <Avatar redirect="#" creatorImg={props.avatar} className="avatar-large" />
                    <div className="profile-header__confirmed">
                        <div className="profile-header__info_icon-container">
                            <i className="far fa-smile"></i>
                            <span> Yeni üzv </span>
                        </div>
                        <div className="profile-header__info_icon-container">
                            <i className="fas fa-check"></i>
                            <span>Hesab təsdiqləndi</span>
                        </div>
                    </div>

                    <div className="profile-header__editBtn">
                        <Link to='/me/edit'>
                            Edit Profile
                        </Link>
                    </div>
                </div>
            </div>

            <div className="profile-body">
                <section className="profile-body__section1">
                    <h1> {props.name} </h1>
                    <small className="small-text">Qoşuldu: {props.date} </small>
                </section>
                <section className="profile-body__section2">
                    <h1 className="profile-body__section2_title">Haqqında</h1>
                    <p >{props.bio}</p>
                    <div className="icon-container">
                        <i className="fas fa-street-view"></i>
                        <div>{props.city}</div>
                    </div>
                </section>
                <hr className="bike-bottom-line" />
                <div className="profile-body__shared-bikes">
                    <h2 className='profile-body__title'>Aktiv elanlar</h2>
                    {props.bikes.length === 0 ? (
                        <h4>Aktiv elan yoxdur</h4>
                    ) : <ul>
                            {
                                props.bikes.map(bike => {
                                    return (<BikeItem
                                        id={bike.id}
                                        key={bike.id}
                                        title={bike.title}
                                        size={bike.size}
                                        accessories={bike.accessories}
                                        type={bike.type}
                                        city={bike.city}
                                        price={bike.price.first}
                                        creator={bike.creator}
                                        image={bike.images[0]}
                                    >
                                        <div className="bike-item__children_expired-time">
                                            <small>15 gün</small>
                                        </div>
                                        <div onClick={() => openDrawer(bike.id)} className="bike-item__actions_nav">
                                            <i className="fas fa-ellipsis-v"></i>
                                        </div>
                                        {
                                            drawerIsOpen === bike.id &&
                                            <div className={`bike-item__children_actions`}>
                                                <Link to={`/update/${bike.id}`} className="bike-item_actions_icon">
                                                    Düzəliş et
                                                </Link>
                                                <Link to='me' className="bike-item_actions_icon">
                                                    Sil
                                                </Link>
                                                {drawerIsOpen && <Backdrop transparent onClick={closeDrawer} />}
                                            </div>
                                        }
                                    </BikeItem>)
                                })}
                        </ul>}
                </div>
            </div>

        </div>
    )
}

export default ProfileContainer
