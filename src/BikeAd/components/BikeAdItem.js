import React, { useState } from "react";
import Avatar from "../../shared/components/UIElements/Avatar";
import MapContainer from "../../shared/components/UIElements/MapContainer";
import BikeItem from "../../Bikes/components/BikeItem";

import part1 from "../../assets/icons/bike-parts-icons/bike-helmet.png";
import part2 from "../../assets/icons/bike-parts-icons/bike.png";
import part3 from "../../assets/icons/bike-parts-icons/delivery-bike.png";
import part4 from "../../assets/icons/bike-parts-icons/music-and-multimedia.png";
import part5 from "../../assets/icons/bike-parts-icons/tail-light.png";
import part6 from "../../assets/icons/bike-parts-icons/refletor.png";

import { Link } from "react-router-dom";
import Lightbox from "react-image-lightbox";
import {BIKES} from '../../data'

import "./BikeAdItem.css";
import "react-image-lightbox/style.css";


const BikeAdItem = (props) => {
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
        <div className='bike-ad__header__title'>
          <div className='container'>{props.title}</div>
        </div>
      </div>
      <div className='bike-ad__details '>
        <div className='bike-ad__details-in container'>
          <div className='bike-ad__details-in__left'>
            <h2>{props.type} - {props.size}"</h2>
          </div>
          <div className='bike-ad__details-in__right'>
            <div className='bike-ad__details-price'>
              <b>{props.price.first}</b>azn/1s
            </div>
            {props.price.second>0 && (
              <div className='bike-ad__details-price'>
                <b>{props.price.second}</b>azn/2s
              </div>
            )}
            {props.price.third>0 && (
              <div className='bike-ad__details-price'>
                <b>{props.price.third}</b>azn/3s
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='bike-ad__body container'>
        <div className='bike-ad__body__sellerInfo'>
          <Avatar className='avatar-middle' imageUrl={props.creator.avatar} />
          <h2> {props.creator.name} </h2>
        </div>
        <ul className='bike-ad__body__bike-accesuares'>
          {props.accesuares.helmet && <li htmlFor='iconTitle'>
            <img src={part1} alt='icon' />
            Başlıq
          </li>}
          {props.accesuares.lock && <li htmlFor='iconTitle'>
            <img src={part2} alt='icon' />
            Kilid
          </li>}
          {props.accesuares.basket && <li htmlFor='iconTitle'>
            <img src={part3} alt='icon' />
            Səbət
          </li>}
          {props.accesuares.bell && <li htmlFor='iconTitle'>
            <img src={part4} alt='icon' />
            Siqnal
          </li>}
          {props.accesuares.lights && <li htmlFor='iconTitle'>
            <img src={part5} alt='icon' />
            Fənər
          </li>}
          {props.accesuares.reflector && <li htmlFor='iconTitle'>
            <img src={part6} alt='icon' />
            Reflektor
          </li>}
        </ul>
      </div>
      <div className='bike-ad__description container'>
        <hr />
        <p> {props.description} </p>
        <h3> {props.city} </h3>
        <label>
          {" "}
          Addres: <i>{props.address}</i>{" "}
        </label>
      </div>
      <div className='bike-ad__map'>
        <MapContainer
          singleCoord={props.location}
          title={props.title}
          mapStyle={{ height: "30vh" }}
        />
      </div>

      <div className='bike-ad__recommendation_cont container'>
        <div className='bike-ad__recommendation'>
          <div className='bike-ad__recommendation__title'>
            <h2>Latest bikes</h2>
            <Link to='/list'>View more</Link>
          </div>
          <div className='bike-ad__last-bikes'>
            {BIKES.slice(0, 3).map((item) => {
              return (
                <BikeItem
                  id={item.id}
                  key={item.id}
                  image={item.images[0]}
                  title={item.title}
                  price={item.price[0]}
                  size={item.size}
                  creator={item.creator}
                  city={item.city}
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
