import React from "react";
import Avatar from "../../shared/components/UIElements/Avatar";
import MapContainer from "../../shared/components/UIElements/MapContainer";
import BikeItem from "../../Bikes/components/BikeItem";

import part1 from "../../assets/icons/bike-parts-icons/bike-helmet.png";
import part2 from "../../assets/icons/bike-parts-icons/bike.png";
import part3 from "../../assets/icons/bike-parts-icons/delivery-bike.png";
import part4 from "../../assets/icons/bike-parts-icons/music-and-multimedia.png";
import part5 from "../../assets/icons/bike-parts-icons/tail-light.png";

import "./BikeAdItem.css";
import { Link } from "react-router-dom";

const BIKES = [
  {
    id: "b1",
    title: "Mohtesem velik",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAvAqrd3nrpG8l378_oLzfrSCJ4vvpHRdUCw&usqp=CAU",
    description: "Bla bla yeah best bike and now you can buy it",
    address: "CWC8+JP Baku, Azerbaijan",
    city: "Sumgayit",
    size: 26,
    price: 10,
    location: {
      lat: 40.6122942,
      lng: 49.6102323,
    },
    creator: {
      id: "u9",
      creatorImg:
        "https://cdn.psychologytoday.com/sites/default/files/styles/image-article_inline_full/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=ji6Xj8tv",
    },
  },
  {
    id: "b2",
    title: "Super velosiped",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRXWtUti7qoUdDWAf9R5jgRdh1roxvJ1AA1tg&usqp=CAU",
    description: "Bla bla yeah best bike and now you can buy it",
    address: "CWC8+JP Baku, Azerbaijan",
    city: "Sumgayit",
    size: 26,
    price: 10,
    location: {
      lat: 40.5175948,
      lng: 48.9136099,
    },
    creator: {
      id: "u9",
      creatorImg:
        "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg",
    },
  },
  {
    id: "b3",
    title: "Super velosiped",
    image:
      "https://cdn.bimbimbikes.com/media/cache/city_overview/uploads/location/bike/image/5ccee9031eb93_20190505_150154.jpg",
    description: "Bla bla yeah best bike and now you can buy it",
    address: "CWC8+JP Baku, Azerbaijan",
    city: "Sumgayit",
    size: 26,
    price: 10,
    location: {
      lat: 40.4216151,
      lng: 49.9146403,
    },
    creator: {
      id: "u9",
      creatorImg:
        "https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg",
    },
  },
];

const BikeAdItem = (props) => {
  return (
    <>
      <div className='bike-ad__header'>
        <div className='bike-ad__header-image'>
          <img src={props.imageUrl} alt='img' />
        </div>
        <div className='bike-ad__header__gradient'></div>
        <div className='bike-ad__header__title'>
          <div className='container'>{props.title}</div>
        </div>
      </div>
      <div className='bike-ad__details '>
        <div className='bike-ad__details-in container'>
          <div className='bike-ad__details-in__left'>
            <h2>Bike - Road - {props.size}^</h2>
          </div>
          <div className='bike-ad__details-in__right'>
            <div className='bike-ad__details-price'>
              {" "}
              <b>{props.price}</b>azn/s{" "}
            </div>
            <div className='bike-ad__details-price'>
              {" "}
              <b>{props.price}</b>azn/s{" "}
            </div>
            <div className='bike-ad__details-price'>
              {" "}
              <b>{props.price}</b>azn/s{" "}
            </div>
          </div>
        </div>
      </div>
      <div className='bike-ad__body container'>
        <div className='bike-ad__body__sellerInfo'>
          <Avatar className='avatar-middle' imageUrl={props.creator.avatar} />
          <h2> {props.creator.name} </h2>
        </div>
        <ul className='bike-ad__body__bike-accesuares'>
          <li htmlFor='iconTitle'>
            <img src={part1} alt='icon' />
            Başlıq
          </li>
          <li htmlFor='iconTitle'>
            <img src={part2} alt='icon' />
            Kilid
          </li>
          <li htmlFor='iconTitle'>
            <img src={part3} alt='icon' />
            Səbət
          </li>
          <li htmlFor='iconTitle'>
            <img src={part4} alt='icon' />
            Siqnal
          </li>
          <li htmlFor='iconTitle'>
            <img src={part5} alt='icon' />
            Fənər
          </li>
        </ul>
      </div>
      <div className='bike-ad__description container'>
        <hr />
        <p> {props.description} </p>
        <h3> {props.city} </h3>
        <label> Addres: <i>{props.address}</i>  </label>
      </div>
      <div className='bike-ad__map'>
        <MapContainer
          singleCoord={props.location}
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
                  image={item.image}
                  title={item.title}
                  price={item.price}
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
