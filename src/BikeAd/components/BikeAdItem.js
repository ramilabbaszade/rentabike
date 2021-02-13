import React, { useState } from "react";
import { Link } from "react-router-dom";

import Avatar from "../../shared/components/UIElements/Avatar";
import MapContainer from "../../shared/components/UIElements/MapContainer";
import BikeItem from "../../Bikes/components/BikeItem";

import manat from "../../assets/icons/mini-icons/manat.png";

import Lightbox from "react-image-lightbox";

import "./BikeAdItem.css";
import "react-image-lightbox/style.css";

const BikeAdItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  return (
    <>
      <div className="bike-ad__header">
        <div className="bike-ad__header-image">
          {props.image && (
            <img src={props.image[0]?.image_path} alt={props.title} />
          )}
        </div>
        <div
          className='bike-ad__header__gradient'
          onClick={() => setIsOpen(true)}></div>
        {isOpen && (
          <Lightbox
            mainSrc={props.image[photoIndex].image_path}
            nextSrc={props.image[(photoIndex + 1) % props.image.length]?.image_path}
            prevSrc={props.image[(photoIndex + props.image.length - 1) % props.image.length]?.image_path}
            onCloseRequest={() => {
              setIsOpen(false);
            }}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + props.image.length - 1) % props.image.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % props.image.length)
            }
          />
        )}
      </div>

      <div className="bike-ad__grid">
        <div className="bike-ad__body">
          <div className="bike-ad__details ">
            <div className="bike-ad__details-in">
              <div className="bike-ad__details-in__left">
                <h1>{props.title}</h1>
                <h3>
                  {props.type && props.type?.name_az} - {props.size}"
                </h3>
              </div>
              {props.creator && (
                <Avatar
                  redirect={`/user/${props.creator.username}`}
                  className="avatar-middle"
                  creatorImg={props.creator.avatar}
                />
              )}
            </div>
          </div>

          <div className="bike-ad__description">
            <div className="small-text">
              {" "}
              <i className="far fa-compass"></i> {props.city?.name_az}{" "}
              <span aria-hidden="false"> · </span> {props.views} baxış{" "}
              <span aria-hidden="false"> · </span>
              {props.date}{" "}
            </div>
            <p> {props.description} </p>
          </div>

          <ul className="bike-ad__body__bike-accessories">
            {props.accessories && props.accessories.map(acc => {
              return <li key={acc.id} htmlFor='iconTitle'>
                <img src={acc.png_url} alt={acc.name_en} />
                {acc.name_az}
              </li>
            })}
          </ul>

          <div className="bike-ad__map">
            <MapContainer
              singleCoord={props.location}
              title={props.title}
              id={props.id}
              images={props.image}
              size={props.size}
              price={props.price}
              mapStyle={{ height: "30vh" }}
            />
          </div>
        </div>

        <div className="write-renter">
          <div className="write-renter_price">
            { props.price &&
              <div className="bike-ad__details-in__right">
                <div className="bike-ad__details-price">
                  <b>{props.price.first}</b>
                  <img className="azn-manat" src={manat} alt="azn" />
                  /1s
                </div>
                {props.price.second > 0 && (
                  <div className="bike-ad__details-price">
                    <b>{props.price.second}</b>
                    <img className="azn-manat" src={manat} alt="azn" />
                    /2s
                  </div>
                )}
                {props.price.third > 0 && (
                  <div className="bike-ad__details-price">
                    <b>{props.price.third}</b>
                    <img className="azn-manat" src={manat} alt="azn" />
                    /3s
                  </div>
                )}
              </div>
            }
          </div>
          <Link to="/" className="write-btn">
            Müraciət et
          </Link>
        </div>
      </div>
      {
        props.creator?.creator_bikes.length !== 0 && (
          <div className='bike-ad__recommendation_cont'>
            <div className='bike-ad__recommendation'>
              <div className='bike-ad__recommendation__title'>
                <h2> Müəllifin başqa elanları </h2>
                <Link to='/list'>Ətraflı bax</Link>
              </div>
              <hr className="bike-bottom-line" />
              <div className='bike-ad__last-bikes'>
                {props.creator && props.creator?.creator_bikes.slice(0, 2).map((item) => {
                  return (
                    <BikeItem
                      id={item.id}
                      key={item.id}
                      image={item.bike_images[0]}
                      title={item.title}
                      type={item.bike_type}
                      price={item.price.first}
                      views={item.view_count}
                      accessories={item.accessories}
                      size={item.size}
                      city={item.city}
                      nonLine
                    />
                  );
                })}
              </div>
            </div>
          </div>
        )
      }

      <div className='bike-ad__recommendation_cont'>
        <div className='bike-ad__recommendation'>
          <div className='bike-ad__recommendation__title'>
            <h2>Ən son elanlar</h2>
            <Link to='/list'>Ətraflı bax</Link>
          </div>
          <hr className="bike-bottom-line" />
          <div className='bike-ad__last-bikes'>
            {props.latest_bikes && props.latest_bikes.slice(0, 4).map((item) => {
              return (
                <BikeItem
                  id={item.id}
                  key={item.id}
                  image={item.bike_images[0]}
                  title={item.title}
                  date={item.date}
                  price={item.price.first}
                  type={item.bike_type}
                  size={item.size}
                  views={item.view_count}
                  accessories={item.accessories}
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
