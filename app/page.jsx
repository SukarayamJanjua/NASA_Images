import React from 'react'
import NASAImage from '@components/NASAImage'


const Home = () => {
  return (
    <div>
       
       <h1 className="head_text text-center">
        NASA Imagine
        <br className="max-md:hidden" />
        <span className="blue_gradient text-center">The wonderful experience to see NASA Image of the day</span>
      </h1>
      <NASAImage />
    </div>
  )
}

export default Home
