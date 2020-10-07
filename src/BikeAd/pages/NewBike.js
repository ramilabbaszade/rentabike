import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { BikeTypes, BikeSize, BikeAccesuares } from "../../data";
import cities from '../../az.json'
import AutoSuggest from "../../shared/components/FormElements/AutoSuggest";

import "./NewBike.css";

// const accessToken = 'getFreeWaysList&guid=979dc109ed404151a50108bf4a61ffd7&lng=az'

const NewBike = () => {
  const [suggestions, setSuggestions] = useState(null)
  const apiUrl = 'http://api.gomap.az/Main.asmx/getRegionsNew'

  // var data = JSON.stringify({
  //   'guid': '979dc109ed404151a50108bf4a61ffd7',
  //   'region': "Baku",
  // });
  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({ region: 'Baku', guid: '979dc109ed404151a50108bf4a61ffd7', lng: 'az' })
    };
    fetch(apiUrl, requestOptions)
      .then(response => { response.json() })
      .then(data => setSuggestions(data))
      .catch(error => console.log(error))
  }, [])

  const { register, handleSubmit, errors, watch } = useForm({
    mode: "onBlur",
  });
  const priceExtraHours = watch("priceExtraHours")
  const onSubmit = (data, e) => {
    const formData = new FormData()
    formData.append("image", data.picture[2])
    console.log(data);

    e.target.reset();
  };

  return (
    <div className='new-bike_form container'>
      <form className='bike-form form-control' onSubmit={handleSubmit(onSubmit)}>
        <Input
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
        <div className="bike-form__selects-div">
          <Input
            element='select'
            name='type'
            register={register({ required: true })}
            label='Type'
            errors={errors.type && "Type is required"}>
            {BikeTypes.map((item, i) => {
              return <option key={i} value={item[0]}> {item[1]} </option>;
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
        </div>

        <div className="checkbox-container">
          {BikeAccesuares.map((item) => {
            return (<div className="checkbox-container_in">
              <img className="accesuares-checkbox-icon-img" src={item.icon} alt={item.value}/>
              <Input
                key={item.id}
                register={register}
                id={item.name}
                type='checkbox'
                name="accesuares"
                label={item.value}
                value={item.value}
              />
            </div>)
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
        
        <AutoSuggest
          takeInputValue={register({ required: true })}
          name="address"
          errors={errors.address && "Address is required"}
          suggestions={['Test1','Test2']}
        />

        <Button type='submit'>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default NewBike;