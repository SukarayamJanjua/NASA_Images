"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

const NASAImage = () => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const date = moment().format('YYYY-MM-DD');
        const response = await axios.get(
            `https://api.nasa.gov/planetary/apod?api_key=jCg3u485LmUpOVx2Z6gTzDroOHWKXcrQaeSq6YWw&date=${date}`
          );
          setImageData(response.data);

        // const response = await fetch(
        //   `https://api.nasa.gov/planetary/apod?api_key=jCg3u485LmUpOVx2Z6gTzDroOHWKXcrQaeSq6YWw&date=${date}`
        // );

        // setImageData(response.data);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, []);

  if (!imageData) {
    return <div className='w-full flex-center p-10 w-500 text-4xl text-white'>Loading...</div>;
  }

  return (
    <div>
      <h1 className='w-full flex-center p-5 w-500 text-4xl '>{imageData.title}</h1>
      <img className='p-4 m-8 border-r-8 border-b-8 border-black bg-white' src={imageData.url} alt={imageData.title} />
      <p className='p-5'>{imageData.explanation}</p>
    </div>
  );
};

export default NASAImage;
