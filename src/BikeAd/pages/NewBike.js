import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { BikeTypes, BikeSize, BikeAccessories } from "../../data";
import cities from '../../az.json'
import AutoSuggest from "../../shared/components/FormElements/AutoSuggest";


import "./NewBike.css";
import FileInput from "../../shared/components/FormElements/FileInput";

// const accessToken = 'getFreeWaysList&guid=979dc109ed404151a50108bf4a61ffd7&lng=az'

const NewBike = () => {
  useEffect(() => {
    document.title = "Yeni elan yarat - velorent.az"
  }, [])

  const [suggestions, setSuggestions] = useState([])
  const apiUrl = 'http://api.gomap.az/Main.asmx/getRegionsNew?region=Baku&lng=az&guid=979dc109ed404151a50108bf4a61ffd7'

  // var data = JSON.stringify({
  //   'guid': '979dc109ed404151a50108bf4a61ffd7',
  //   'region': "Baku",
  // });
  // useEffect(() => {
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //     },
  //     body: JSON.stringify({ region: 'Baku', guid: '979dc109ed404151a50108bf4a61ffd7', lng: 'az' })
  //   };
  //   fetch(apiUrl, requestOptions)
  //     .then(response => { response.json() })
  //     .then(data => setSuggestions(data))
  //     .catch(error => console.log(error))
  // }, [])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then((datas)=>{
      setSuggestions(datas)
      console.log(datas)
    })
    .catch(err=>console.log(err))
  },[])


  const { register, handleSubmit, errors, watch } = useForm({
    mode: "onBlur",
  });
  const priceExtraHours = watch("priceExtraHours")
  const onSubmit = (data, e) => {
    console.log(data);

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

        {/* <AutoSuggest
          takeInputValue={register({ required: true })}
          name="address"
          errors={errors.address && "Adres tələb olunur"}
          suggestions={suggestions}
        /> */}
        {
          suggestions.map(s=>{
            return <div key={s.id}> {s.title} </div>
          })
        }

        <div className="small-text">Not: Elanın aktiv müddəti 30 gündür. Elan paylaşıldıqdan sonra profilinizdən elanın müddətinə baxa bilərsiniz.</div>

        <Button type='submit'>
          Paylaş
        </Button>
      </form>
    </div>
  );
};

export default NewBike;