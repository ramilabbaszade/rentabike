import React, { useState } from "react";

import "./NewBike.css";

const NewBike = () => {
  const [state, setState] = useState({
    title: "",
    description: "",
  });

  const handleChange = (event) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(state);
    setState({
      title: "",
      description: "",
      version:""
    });
  };

  return (
    <div className='container'>
      <form className="bike-form" onSubmit={submitHandler}>
        <label htmlFor='1'>
          Title
          <input
            id='title'
            type='text'
            required
            name='title'
            value={state.title}
            onChange={handleChange}
          />
        </label>
        <label htmlFor='1'>
          Title
          <textarea
            id='title'
            name='description'
            value={state.description}
            cols='40'
            onChange={handleChange}
          />
        </label>
        <label>
          Favorite version
        <select name="version" onChange={handleChange} value={state.version}>
            <option value="16.8">v16.8.0</option>
            <option value="16.7">v16.7.0</option>
            <option value="16.6">v16.6.0</option>
            <option value="16.5">v16.5.0</option>
          </select>
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default NewBike;

// import React, { useCallback, useReducer } from "react";
// import {
//   VALIDATOR_REQUIRE,
//   VALIDATOR_MINLENGTH,
//   VALIDATOR_MAXLENGTH,
// } from "../../shared/util/validators";
// import cities from '../../az.json'

// import Input from "../../shared/components/FormElements/Input";
// import Button from '../../shared/components/FormElements/Button'



// const formReducer = (state, action) => {
//   switch (action.type) {
//     case 'INPUT_CHANGE':
//       let formIsValid = true;
//       for (const inputId in state.inputs) {
//         if (inputId === action.inputId) {
//           formIsValid = formIsValid && action.isValid;
//         } else {
//           formIsValid = formIsValid && state.inputs[inputId].isValid;
//         }
//       }
//       return {
//         ...state,
//         inputs: {
//           ...state.inputs,
//           [action.inputId]: { value: action.value, isValid: action.isValid }
//         },
//         isValid: formIsValid
//       };
//     default:
//       return state;
//   }
// };

// const NewBike = () => {
//   const [formState, dispatch] = useReducer(formReducer, {
//     inputs: {
//       title: {
//         value: "",
//         isValid: false,
//       },
//       description: {
//         value: "",
//         isValid: false,
//       },
//       price: {
//         value: "",
//         isValid: false,
//       },
//       city: {
//         value: "",
//         isValid: false,
//       },
//     },
//     isValid: false,
//   });

//   const inputHandler = useCallback((id, value, isValid) => {
//     dispatch({
//       type: "INPUT_CHANGE",
//       value: value,
//       isValid: isValid,
//       inputId: id,
//     });
//   }, []);

//   const bikeSubmitHandler = event => {
//     event.preventDefault();
//     console.log(formState.inputs) // send to the backend
//   }
//   const citiesOption = cities.map(item => {
//     return <option key={item.lat}> {item.city} </option>
//   })
//   const bikeTypesOption = bikeTypes.map(item => {
//     return <option key={item}> {item} </option>
//   })

// return (
//   <div className='container'>
//     <form className='bike-form' onSubmit={bikeSubmitHandler}>
//       <Input
//         id='title'
//         element='input'
//         type='text'
//         label='Title'
//         validators={[VALIDATOR_REQUIRE()]}
//         errorText='Please enter a valid title'
//         onInput={inputHandler}
//       />
//       <Input
//         id='description'
//         element='textarea'
//         label='Description'
//         validators={[VALIDATOR_MINLENGTH(5)]}
//         errorText='Please enter a valid description at least 5 characters'
//         onInput={inputHandler}
//       />
//       <Input
//         id='price'
//         element='input'
//         type='number'
//         label='Price'
//         validators={[VALIDATOR_MAXLENGTH(2)]}
//         errorText='Please enter a valid number at most 2 charachters'
//         onInput={inputHandler}
//       />
//       <Input
//         id='city'
//         element='select'
//         label='City'
//         options= {citiesOption} 
//         validators={[VALIDATOR_REQUIRE()]}
//         errorText='Please select a city'
//         onInput={inputHandler}
//       />
//       <Input
//         id='type'
//         element='select'
//         label='Bike Type'
//         options = {bikeTypesOption}
//         validators={[VALIDATOR_REQUIRE()]}
//         errorText='Please select a type of bike'
//         onInput={inputHandler}
//       />
//       <Input
//         id='accesuares'
//         element='input'
//         type='checkbox'
//         label='Accesuares'
//         validators={[]}
//         errorText='Please enter a valid number at most 2 charachters'
//         onInput={inputHandler}
//       />
//       <Button type="submit" disabled={!formState.isValid}>Submit</Button>
//     </form>
//   </div>
// );
// };

// export default NewBike;
