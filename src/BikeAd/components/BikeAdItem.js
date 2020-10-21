import React, { useState, useEffect } from "react";
import Avatar from "../../shared/components/UIElements/Avatar";
import MapContainer from "../../shared/components/UIElements/MapContainer";
import BikeItem from "../../Bikes/components/BikeItem";

import helmet from "../../assets/icons/bike-parts-icons/helmet.png";
import bell from "../../assets/icons/bike-parts-icons/bell.png";
import basket from "../../assets/icons/bike-parts-icons/basket.png";
import lights from "../../assets/icons/bike-parts-icons/lights.png";
import lock from "../../assets/icons/bike-parts-icons/lock.png";
import reflector from "../../assets/icons/bike-parts-icons/refletor.png";

import { Link } from "react-router-dom";
import Lightbox from "react-image-lightbox";
import { BIKES } from "../../data";

import "./BikeAdItem.css";
import "react-image-lightbox/style.css";

const BikeAdItem = (props) => {
  useEffect(() => {
    document.title = `${props.title} - velorent.az`
  }, [props.title])

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const images = props.images;

  return (
    <>
      <div className='bike-ad__header'>
        <div className='bike-ad__header-image'>
          <img src={props.images[0]} alt={props.title} />
        </div>
        <div
          className='bike-ad__header__gradient'
          onClick={() => setIsOpen(true)}></div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => {
              setIsOpen(false);
            }}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % images.length)
            }
          />
        )}
      </div>

      <div className='bike-ad__grid'>
        <div className='bike-ad__body'>
          <div className='bike-ad__details '>
            <div className='bike-ad__details-in'>
              <div className='bike-ad__details-in__left'>
                <h1>{props.title}</h1>
                <h3>
                  {props.type} - {props.size}"
                </h3>
              </div>
              <Avatar
                redirect={`/user/${props.creator.id}`}
                className='avatar-middle'
                creatorImg={props.creator.avatar}
              />
            </div>
          </div>


          <div className='bike-ad__description'>
            <h3 className="small-text"> <i className="far fa-compass"></i> {props.city} <span aria-hidden="false"> · </span> {props.date} </h3>
            <p> {props.description} </p>
          </div>

          <ul className='bike-ad__body__bike-accessories'>
            {props.accessories.helmet && (
              <li htmlFor='iconTitle'>
                <img src={helmet} alt='icon' />
                Başlıq
              </li>
            )}
            {props.accessories.lock && (
              <li htmlFor='iconTitle'>
                <img src={lock} alt='icon' />
                Kilid
              </li>
            )}
            {props.accessories.basket && (
              <li htmlFor='iconTitle'>
                <img src={basket} alt='icon' />
                Səbət
              </li>
            )}
            {props.accessories.bell && (
              <li htmlFor='iconTitle'>
                <img src={bell} alt='icon' />
                Siqnal
              </li>
            )}
            {props.accessories.lights && (
              <li htmlFor='iconTitle'>
                <img src={lights} alt='icon' />
                Fənər
              </li>
            )}
            {props.accessories.reflector && (
              <li htmlFor='iconTitle'>
                <img src={reflector} alt='icon' />
                Reflektor
              </li>
            )}
          </ul>

          <div className='bike-ad__map'>
            <MapContainer
              singleCoord={props.location}
              title={props.title}
              mapStyle={{ height: "30vh" }}
            />
          </div>
        </div>

        <div className="write-renter">
          <div className='write-renter_price'>
            <div className='bike-ad__details-in__right'>
              <div className='bike-ad__details-price'>
                <b>{props.price.first}</b>azn/1s
                </div>
              {props.price.second > 0 && (
                <div className='bike-ad__details-price'>
                  <b>{props.price.second}</b>azn/2s
                </div>
              )}
              {props.price.third > 0 && (
                <div className='bike-ad__details-price'>
                  <b>{props.price.third}</b>azn/3s
                </div>
              )}
            </div>
          </div>
          <Link to='/' className="write-btn">
            Müraciət et
          </Link>
        </div>
      </div>
      <div className='bike-ad__recommendation_cont'>
        <div className='bike-ad__recommendation'>
          <div className='bike-ad__recommendation__title'>
            <h2> Müəllifin başqa elanları </h2>
            <Link to='/list'>Ətraflı bax</Link>
          </div>
          <hr className="bike-bottom-line" />
          <div className='bike-ad__last-bikes'>
            {props.creator.bikes.slice(0, 2).map((item) => {
              return (
                <BikeItem
                  id={item.id}
                  key={item.id}
                  image={item.images[0]}
                  title={item.title}
                  type={item.type}
                  price={item.price.first}
                  accessories={item.accessories}
                  size={item.size}
                  creator={item.creator}
                  city={item.city}
                  nonLine
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className='bike-ad__recommendation_cont'>
        <div className='bike-ad__recommendation'>
          <div className='bike-ad__recommendation__title'>
            <h2>Ən son elanlar</h2>
            <Link to='/list'>Ətraflı bax</Link>
          </div>
          <hr className="bike-bottom-line" />
          <div className='bike-ad__last-bikes'>
            {BIKES.slice(0, 4).map((item) => {
              return (
                <BikeItem
                  id={item.id}
                  key={item.id}
                  image={item.images[0]}
                  title={item.title}
                  date={item.date}
                  price={item.price.first}
                  type={item.type}
                  size={item.size}
                  accessories={item.accessories}
                  creator={item.creator}
                  city={item.city}
                  nonLine
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default BikeAdItem;
