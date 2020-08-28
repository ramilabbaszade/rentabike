import React from 'react'
import userIcon from '../../../assets/icons/7105397_preview.png'
import './Avatar.css'

const Avatar = (props) => {
    return <img className={`${props.className}`} src={props.creatorImg || userIcon} alt=""/>
}

export default Avatar
