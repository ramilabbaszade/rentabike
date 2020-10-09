import React from "react";

import "./Input.css";

const Input = (props) => {
  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        ref={props.register}
        name={props.name}
        onChange={props.onChange}
        onBlur={props.onBlur}
        onKeyDown={props.onKeyDown}
        defaultValue={props.defaultValue}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
      />
    ) : props.element === "select" ? (
      <select key={props.key} defaultValue={props.defaultValue} name={props.name} ref={props.register}>
        <option value="">Seçin</option>
        {props.children}
      </select>
    ) :
        props.type === "checkbox" ? (
          <input
            ref={props.register}
            id={props.id}
            type={props.type}
            name={props.name}
            value={props.value}
          />
        ) :
          (
            <textarea
              id={props.id}
              ref={props.register}
              rows={props.rows || 3}
              onChange={props.onChange}
              value={props.value}
              defaultValue={props.defaultValue}
              name={props.name}
              placeholder={props.placeholder}
            />
          );

  return (
    <div
      className={`form-control ${props.errors && "form-control--invalid"
        }`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {props.errors && <p> {props.errors}</p>}
    </div>
  );
};

export default Input;
