// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Blurhash } from 'react-blurhash';

// eslint-disable-next-line react/prop-types
const ImageComponent = ({ src, className }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const img = new Image()
    img.onload = () => {
      setImageLoaded(true);
    }
    img.src = src
  }, [src]);
  return (
    <>
      {!imageLoaded && <Blurhash hash="L8C#Set,AH5R}RxU-7$*Rh$LJQbb" width="100%" height="100%" resolutionX={32} resolutionY={32} punch={1} />}
      {imageLoaded && <img src={src} alt="image" className={className}/>}
    </>
  );
};

export default ImageComponent;
