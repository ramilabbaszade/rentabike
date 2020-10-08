import React from "react";
import { Link } from 'react-router-dom'
import illus1 from "../../assets/img/road-2562568_1920.jpg";
import illus2 from "../../assets/img/metal-sculpture-bicycle-flower-beds-seaside-park-boulevard-baku-azerbaijan-132426699.jpg";
import illus3 from "../../assets/img/cruiser-bikes-at-university-bicycles.jpg";
import rentImage from "../../assets/img/main.jpg";
import Button from '../../shared/components/FormElements/Button'
import { BIKES, HomeCityHighlights } from "../../data";

import BikeItem from "../../Bikes/components/BikeItem";
import Slider from "react-slick";
import "./Home.css";

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    draggable: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          draggable: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const settings1 = {
    dots: false,
    slidesToShow: 4,
    rows: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          draggable: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <div>
      <div className='home-header'>
        <div className='home-header__content container'>
          <h1 className="home-header__content__header">Ən yaxın velosipedi tap</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, ipsam.
          </p>
          <Button to='/list' style={{ borderRadius: '20px' }} white >
            Axtar
          </Button>
        </div>
      </div>

      <section className='home-how_it_works container'>
        <div className='home-cards-info'>
          <Link to="/list" className='home-cards-info__card'>
            <img src={illus1} alt='' />
            <div className="home-cards-info__card_text">
              <h4>Search for the nearest location to you</h4>
            </div>
          </Link>
          <Link to="/list" className='home-cards-info__card'>
            <img src={illus2} alt='' />
            <div className="home-cards-info__card_text">
              <h4>Search for the nearest location to you</h4>
            </div>
          </Link>
          <Link to="/list" className='home-cards-info__card'>
            <img src={illus3} alt='' />
            <div className="home-cards-info__card_text">
              <h4>Search for the nearest location to you</h4>
            </div>
          </Link>
        </div>
      </section>

      <section className="home-bikes">
        <div className="home-bikes_in container">
          <div className="home-bikes_header">
            <h1>Ən yeni elanlar</h1>
            <hr className="section-hr" />
          </div>
          <Slider className="home-bikes__body" {...settings}>
            {BIKES.map((bike) => (
              <BikeItem
                key={bike.id}
                id={bike.id}
                image={bike.images[0]}
                title={bike.title}
                city={bike.city}
                size={bike.size}
                price={bike.price.first}
                creator={bike.creator}
                vertical
                nonLine
                marginR
                maxLength={22}
              />
            ))}
          </Slider>
        </div>
      </section>

      <section className="rent-your-bike">
        <div className="rent-your-bike_in container">
          <div className="rent-your-bike_in__text">
            <h1>Velosipedinizi icarəyə verin</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, quis!
            </p>
            <Button to="/register" style={{ borderRadius: '20px' }} white >
              Elan yerləşdir
          </Button>
          </div>
          <div className="rent-your-bike_in__image">
            <img src={rentImage} alt="" />
          </div>
        </div>
      </section>


      <section className="home-cities-cards">
        <div className="home-cities-cards_header container">
          <h2>Önə çıxan şəhərlər</h2>
          <hr className="bike-item-title__bottom-line"/>
        </div>
        <div className="container">
          <Slider className="home-cities-cards_in" {...settings1}>
            {
              HomeCityHighlights.map(item => {
                return <Link to="/" key={item.id} className="home-city-card">
                  <h3>{item.city}</h3>
                </Link>
              })
            }
          </Slider>
        </div>
      </section>


    </div>
  );
};

export default Home;
