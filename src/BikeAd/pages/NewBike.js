import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { BikeTypes, BikeSize, BikeAccessories } from "../../data";
import cities from '../../az.json'
import FileInput from "../../shared/components/FormElements/FileInput";

import { BikesContext } from "../../shared/context/BikesContext";

import MapExample from "../../pages/Home/MapExample";
import "./NewBike.css";

const NewBike = () => {
  const {addBike} = useContext(BikesContext)
  const [location, setLocation] = useState([])
  useEffect(() => {
    document.title = "Yeni elan yarat - veloorent.com"
  }, [])

  const { register, handleSubmit, errors, watch } = useForm({
    mode: "onBlur",
  });
  const priceExtraHours = watch("priceExtraHours")
  const onSubmit = (data) => {
    data.location = location[0]
    console.log(data);
    addBike(data)
    // e.target.reset();
  };

  return (
    <div className='new-bike_form container'>
      <form className='bike-form form-control' onSubmit={handleSubmit(onSubmit)}>
        <Input
          register={register({ required: true, maxLength: 52 })}
          element='input'
          id='title'
          label='Başlıq'
          name='title'
          type='text'
          placeholder='Velosipedin adı, modeli...'
          errors={errors.title && "Başlıq tələb olunur (max 52 xarakter)"}
        />
        <Input
          register={register({ required: true })}
          id='description'
          label='Qısa açıqlama'
          name='description'
          placeholder='Velosipedin vəziyyəti, əlavə məlumatlar...'
          errors={errors.description && "Açıqlama is required"}
        />
        <div className="bike-form__selects-div">
          <Input
            element='select'
            name='type'
            register={register({ required: true })}
            label='Növ'
            errors={errors.type && "Seçim tələb olunur"}>
            {BikeTypes.map((item, i) => {
              return <option key={i} value={item[0]}> {item[1]} </option>;
            })}
          </Input>
          <Input
            element='select'
            name='size'
            register={register({ required: true })}
            label='Ölçü'
            errors={errors.size && "Seçim tələb olunur"}>
            {BikeSize.map((item, i) => {
              return <option key={i} value={item}> {item} </option>;
            })}
          </Input>
        </div>

        <div className="checkbox-container">
          {BikeAccessories.map((item) => {
            return (<div key={item.id} className="checkbox-container_in">
              <img className="accessories-checkbox-icon-img" src={item.icon} alt={item.value} />
              <Input
                register={register}
                id={item.name}
                type='checkbox'
                name="accessories"
                label={item.value}
                value={item.name}
              />
            </div>)
          })}
        </div>
        <div className="file-inputs-div">
          <FileInput
            name="picture[0]"
            label="Əsas şəkil"
            id="image1"
            register={register({ required: true })}
          />
          <FileInput
            name="picture[1]"
            label="Ikinci şəkil"
            id="picture2"
            register={register}
          />
          <FileInput
            name="picture[2]"
            label="Ucuncu şəkil"
            id="picture3"
            register={register}
          />
        </div>

        <div>
          <Input
            register={register({ required: true, maxLength: 2 })}
            element='input'
            id='price1'
            label='Qiyməti'
            name='price.first'
            type='number'
            placeholder='Hər saat üçün qiymət'
            errors={errors.price && "Qiymət tələb olunur"}
          />
          <div className="extra-price-checkbox">
            <small>Hər saata görə qiymət fərqi təyin et</small>
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
                  placeholder='2-ci saatın qiyməti'
                />
                <Input
                  register={register({ required: true, maxLength: 2 })}
                  element='input'
                  id='price'
                  name='price.third'
                  type='number'
                  placeholder='3-cü və ya sonrakı hər saatın qiyməti'
                />
              </React.Fragment>
            )
          }
        </div>

        <h2>Ərazi</h2>
        <Input
          element='select'
          name='city'
          register={register({ required: true })}
          label='Şəhər'
          errors={errors.city && "Seçim tələb olunur"}>
          {cities.map((item, i) => {
            return <option key={i} value={item.city}> {item.city} </option>;
          })}
        </Input>

        <MapExample setLocation={setLocation}/>

        <div className="small-text">Not: Elanın aktiv müddəti 30 gündür. Elan paylaşıldıqdan sonra profilinizdən elanın müddətinə baxa bilərsiniz.</div>

        <Button type='submit'>
          Paylaş
        </Button>
      </form>
    </div>
  );
};

export default NewBike;