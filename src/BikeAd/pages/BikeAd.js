import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BikeAdItem from "../components/BikeAdItem";

const BikeAd = () => {
  const [bikes, setBikes] = useState({});
  const { bikeId } = useParams();

  useEffect(() => {
    fetch(`http://velorent-api.herokuapp.com/api/v1/bike/${bikeId}`)
      .then((res) => res.json())
      .then((data) => {
        setBikes(data);
      })
      .catch((err) => console.log(err));
  }, [bikeId]);

  return (
    <div className="bike-ad container">
      {!bikes ? (
        <h1>Loading...</h1>
      ) : (
        <BikeAdItem
          key={bikes.id}
          id={bikes.id}
          title={bikes.title}
          description={bikes.description}
          image={bikes.images}
          price={bikes.price}
          views={bikes.view_count}
          type={bikes.bike_type}
          size={bikes.size}
          date={bikes.created_date}
          city={bikes.city}
          accessories={bikes.accessories}
          address={bikes.address}
          location={bikes.location}
          creator={bikes.created_by}
          latest_bikes={bikes.latest_bikes}
        />
      )}
    </div>
  );
};

export default BikeAd;
