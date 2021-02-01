import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

// const ImageList = (props) => {
//     const images = props.images.map((image) => {
//         return <img key={image.id} alt={image.description} src={image.urls.regular} />
//     });

//Refactored
const ImageList = (props) => {
    const images = props.images.map(({ id, description, urls }) => {
        return <img key={id} alt={description} src={urls.regular} />
    });

    return <div className="image-list">{images}</div>;
}

export default ImageList;