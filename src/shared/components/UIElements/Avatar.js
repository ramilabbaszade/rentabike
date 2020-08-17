import React from 'react'

import './Avatar.css'

const Avatar = (props) => {
    return <img className={`${props.className}`} src={props.imageUrl} alt="avatar"/>
}

export default Avatar
