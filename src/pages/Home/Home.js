import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import illus1 from "../../assets/illustrations/undraw_map_1r69.png";
import illus2 from "../../assets/illustrations/undraw_chat_1wo5.png";
import illus3 from "../../assets/illustrations/undraw_Ride_a_bicycle_2yok.png";
import MapContainer from "../../shared/components/UIElements/MapContainer";
import { BIKES } from "../../data";

import "./Home.css";

const Home = () => {
  const [info, setInfo] = useState([]);
  // useEffect(() => {
  //     const url = "http://api.gomap.az/Main.asmx/getFreeWaysList";
  //     const xhr = new XMLHttpRequest();
  //     xhr.open("POST", url)
  //     xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  //     xhr.onreadystatechange = () => {
  //         if (xhr.readyState === 4) {
  //             const numbers = xhr.responseText
  //             console.log(typeof(numbers))
  //             // const numbers1 = JSON.parse(numbers)
  //             const nums = numbers.split(' ')
  //             console.log(nums)
  //             console.log(typeof(nums))

  //             JSON.stringify(nums)

  //             // let myData = JSON.parse(text)
  //             // const cData = myData.rows[1].districts;
  //             // console.log(myData.rows[1].districts)
  //             setInfo(nums)
  //         }
  //     }
  //     let data = "getFreeWaysList&guid=979dc109ed404151a50108bf4a61ffd7&lng=az";
  //     xhr.send(data)

  // }, [])
  // useEffect(() => {
  //   let payload = {
  //     "region": "Baku",
  //     "guid": "979dc109ed404151a50108bf4a61ffd7",
  //     "lng": "az",
  //   };
  //   fetch("http://api.gomap.az/Main.asmx/getRegionsNew", {
  //     method: "POST",
  //     mode: 'no-cors',
  //     headers: {
  //       "Content-type": "multipart/form-data",
  //       "Accept": "application/json",
  //       "type": "formData"
  //     },
  //     body: JSON.stringify(payload),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setInfo(data);
  //       console.log("Data: ", data);
  //     }).catch(err=>{
  //         console.log("Error:"+err)
  //     });
  // }, []);

  return (
    <div>
      <div className='home-header'>
        <div className='home-header__content'>
          <h1>Rent a bike near of you..</h1>
          <input
            className='home-header__search'
            type='text'
            placeholder='Search for cities, street..'
          />
        </div>
      </div>
      <div className='home-body container'>

        <div>{info.map((item,i)=>{
          return <div key={i}> {item.data} </div>
        })}</div>

        <div className='home-how_it_works'>
          <div className='title-header_container'>
            <h1 className='title-header'>How it works?</h1>
            <hr className='small-line-hr' />
          </div>
          <div className='home-cards-info'>
            <div className='home-cards-info__card'>
              <img src={illus1} alt='' />
              <h4>Search for the nearest location to you</h4>
            </div>
            <div className='home-cards-info__card'>
              <img src={illus2} alt='' />
              <h4>Search for the nearest location to you</h4>
            </div>
            <div className='home-cards-info__card'>
              <img src={illus3} alt='' />
              <h4>Search for the nearest location to you</h4>
            </div>
          </div>
        </div>
        <Link to='/'>
          <div className='btn'>Rent a bike</div>
        </Link>
      </div>
      <div className='map-section'>
        <div className='title-header_container'>
          <h1 className='title-header'>Find bikes on the map</h1>
          <hr className='small-line-hr' />
        </div>
        <MapContainer coords={BIKES} mapStyle={{ height: "50vh" }} />
      </div>
    </div>
  );
};

export default Home;
