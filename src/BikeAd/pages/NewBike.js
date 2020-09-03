import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../shared/components/FormElements/Input";
import { BikeTypes, BikeSize, BikeAccesuares } from "../../data";

import "./NewBike.css";
import Button from "../../shared/components/FormElements/Button";

const NewBike = () => {
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data, e) => {
    const formData = new FormData()
    formData.append("image",data.picture[2])
    console.log(data);

    // e.target.reset();
  };

  return (
    <div className='new-bike_form container'>
      <form className='bike-form' onSubmit={handleSubmit(onSubmit)}>
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
        <Input
          element='select'
          name='type'
          register={register({ required: true })}
          label='Type'
          errors={errors.type && "Type is required"}>
          {BikeTypes.map((item) => {
            return <option key={item} value={item}> {item} </option>;
          })}
        </Input>
        <Input
          element='select'
          name='size'
          register={register({ required: true })}
          label='Size'
          errors={errors.size && "Size is required"}>
          {BikeSize.map((item) => {
            return <option value={item}> {item} </option>;
          })}
        </Input>
        <div className="checkbox-container">
          {BikeAccesuares.map(item => {
            return <Input
              register={register}
              id='accesuares'
              type='checkbox'
              name="accesuares"
              label={item}
              value={item}
            />
          })}
        </div>
        <input ref={register} type="file" name="picture" />
        <Button type='submit'>
          Login
        </Button>
      </form>
    </div>
  );
};

export default NewBike;