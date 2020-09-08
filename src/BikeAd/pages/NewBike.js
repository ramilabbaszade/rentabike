import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { BikeTypes, BikeSize, BikeAccesuares } from "../../data";
import cities from '../../az.json'
import DraggableMap from "../../shared/components/UIElements/DraggableMap";

import "./NewBike.css";
import Search from "../../shared/components/FormElements/Search";
import { control } from "leaflet";
const NewBike = () => {
  const [data, setData] = useState({});
  const setValues = (values) => {
    setData(prevData => ({
      ...prevData,
      ...values
    }))
  }
  const { register, control, handleSubmit, errors, watch } = useForm({
    defaultValues:{
      marker:data.markers
    },
    mode: "onBlur",
  });
  const priceExtraHours = watch("priceExtraHours")
  const onSubmit = (data, e) => {
    const formData = new FormData()
    // formData.append("image", data.picture[2])
    formData.append("markers", markers)
    console.log(data);

    // e.target.reset();
  };

  const [markers, setMarkers] = useState({
    lat: 40.500,
    lng: 49.800
  })

  const showMeFunction = () => {
    console.log("test: " + markers)
  }

  return (
    <div className='new-bike_form container'>
      {showMeFunction()}
      <form className='bike-form' onSubmit={handleSubmit(onSubmit)}>
        {/* <Input
          register={register({ required: true, maxLength: 52 })}
          element='input'
          id='title'
          label='Title'
          name='title'
          type='text'
          placeholder='Name of bike or model'
          errors={errors.title && "Title is required (max 52 character)"}
        />
        <Input
          register={register({ required: true })}
          id='description'
          label='Description'
          name='description'
          placeholder='Description of the bike'
          errors={errors.description && "Description is required"}
        />
        <Input
          element='select'
          name='type'
          register={register({ required: true })}
          label='Type'
          errors={errors.type && "Type is required"}>
          {BikeTypes.map((item, i) => {
            return <option key={i} value={item}> {item} </option>;
          })}
        </Input>
        <Input
          element='select'
          name='size'
          register={register({ required: true })}
          label='Size'
          errors={errors.size && "Size is required"}>
          {BikeSize.map((item, i) => {
            return <option key={i} value={item}> {item} </option>;
          })}
        </Input>
        <div className="checkbox-container">
          {BikeAccesuares.map((item, i) => {
            return (<Input
              key={i}
              register={register}
              id={item}
              type='checkbox'
              name="accesuares"
              label={item}
              value={item}
            />)
          })}
        </div>
        <input ref={register} type="file" name="picture" />
        <div>
          <Input
            register={register({ required: true, maxLength: 2 })}
            element='input'
            id='price1'
            label='Price'
            name='price.first'
            type='number'
            placeholder='Price of bike per hour'
            errors={errors.price && "Title is required (max 52 character)"}
          />
          <div className="extra-price-checkbox">
            <small>Extra Price Choiches</small>
            <input
              ref={register}
              id="priceExtraHours"
              type='checkbox'
              name="priceExtraHours"
            />
          </div>
          {
            priceExtraHours && (
              <React.Fragment>
                <Input
                  register={register({ required: true, maxLength: 2 })}
                  element='input'
                  id='price'
                  name='price.second'
                  type='number'
                  placeholder='Price of bike per hour'
                />
                <Input
                  register={register({ required: true, maxLength: 2 })}
                  element='input'
                  id='price'
                  name='price.third'
                  type='number'
                  placeholder='Price of bike per hour'
                />
              </React.Fragment>
            )
          }
        </div>
        <br />
        <hr />
        <br />
        <h2>Location</h2>
        <Input
          element='select'
          name='city'
          register={register({ required: true })}
          label='City'
          errors={errors.city && "City is required"}>
          {cities.map((item, i) => {
            return <option key={i} value={item.city}> {item.city} </option>;
          })}
        </Input>
        <Input
          register={register({ required: true, maxLength: 2 })}
          element='input'
          id='address'
          label='Address:'
          name='address'
          type='text'
          placeholder='Price of bike per hour'
          errors={errors.address && "Title is required (max 52 character)"}
        /> */}
        <DraggableMap
          register={register}
          markers={markers}
          name="markers"
          setMarkers={setMarkers}
          control={control}
        />

        {/* <Search items={cities.map(item=>{return item.city})} register={register()} name="marker" /> */}

        <Button type='submit'>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default NewBike;