import React, { useState } from 'react'
import defaultIcon from '../../../assets/icons/upload-icon.png'

import './FileInput.css'

const FileInput = (props) => {
    const [previewImage, setPreviewImage] = useState(defaultIcon)
    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setPreviewImage(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    };

    return (
        <div className="image-uploader_container">
            <div className="image-uploader">
                <img src={props.previewImage || previewImage} alt="" />
            </div>
            <div className="image-uploader_before">
                <i className="far fa-file-image"></i>
                <label htmlFor={props.id}> {props.label} </label>
            </div>
            <input onChange={imageHandler} className="image-upload" id={props.id} ref={props.register} type="file" name={props.name}  />
        </div>
    )
}

export default FileInput
