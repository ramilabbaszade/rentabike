import React from "react";
import {Link} from 'react-router-dom'
import userIcon from "../../../assets/icons/7105397_preview.png";
import "./Avatar.css";

const Avatar = (props) => {
  return (
    <Link to={`${props.redirect}`}>
      <img
        className={`${props.className}`}
        src={props.creatorImg || userIcon}
        alt='avatar'
      />
    </Link>
  );
};

export default Avatar;
