import React, {useContext, useEffect} from "react";
import { Link } from 'react-router-dom'
import illus1 from "../../assets/img/road-2562568_1920.jpg";
import illus2 from "../../assets/img/metal-sculpture-bicycle-flower-beds-seaside-park-boulevard-baku-azerbaijan-132426699.jpg";
import illus3 from "../../assets/img/cruiser-bikes-at-university-bicycles.jpg";
import rentImage from "../../assets/img/main.jpg";
import headerpic from "../../assets/img/headerpic.jpg";
import Button from '../../shared/components/FormElements/Button'
import { HomeCityHighlights } from "../../data";

import BikeItem from "../../Bikes/components/BikeItem";
import Slider from "react-slick";
import "./Home.css";
import { BikesContext } from "../../shared/context/BikesContext";

const Home = () => {
  const {bikes} = useContext(BikesContext) 
  useEffect(() => {
    document.title = "Əsas səhifə - velorent.az"
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    draggable: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
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
          slidesToScroll: 1,
          arrows:false
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
          slidesToScroll: 1,
          arrows:false
        }
      }
    ]
  }
  return (
    <div>
      <div className='home-header'>
        <img src={headerpic} alt="home-header" />
        <div className='home-header__content container'>
          <h1 className="home-header__content__header">Ən yaxın iki təkərlini tap</h1>
          <p>
            Sizə ən yaxın, rahat velosipedi burdan tapın, dostlarınızla birgə əylənin.
          </p>
          <Button to='/list' style={{ borderRadius: '20px' }} white >
            Axtar
          </Button>
        </div>
      </div>

      <section className='home-how_it_works container'>
        <div className='home-cards-info'>
          <Link to="/list" className='home-cards-info__card'>
            <img src={illus3} alt='info' />
            <div className="home-cards-info__card_text">
              <h4>İstədiyin növ velosipedi seç</h4>
            </div>
          </Link>
          <Link to="/list" className='home-cards-info__card'>
            <img src={illus2} alt='info' />
            <div className="home-cards-info__card_text">
              <h4>Ən yaxın iki təkərlini tap</h4>
            </div>
          </Link>
          <Link to="/list" className='home-cards-info__card'>
            <img src={illus1} alt='info' />
            <div className="home-cards-info__card_text">
              <h4>Və keyfini çıxar</h4>
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
            {bikes.map((bike) => (
              <BikeItem
                id={bike.id}
                key={bike.id}
                image={bike.images[0]}
                title={bike.title}
                city={bike.city}
                views={bike.views}
                type={bike.type}
                size={bike.size}
                accessories={bike.accessories}
                price={bike.price.first}
                creator={bike.creator}
                vertical
                nonLine
                marginR
                maxLength={18}
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
          <hr className="bike-item-title__bottom-line" />
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
