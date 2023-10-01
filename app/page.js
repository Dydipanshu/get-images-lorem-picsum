"use client"
import React, { useState } from 'react'
import axios from 'axios'

const page = () => {
  const [Images, setImages] = useState([]) 
  const getImages = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list")
      const data = response.data 
      setImages(data)
    } catch (error) {
      console.log("No images fetched")
    }

  }
  return (
    <>
    <button onClick={getImages} className='bg-green-500 px-5 py-2 mx-20 my-5'>Get Images</button>
    <div className='p-10'>
       {Images.map((elem,i)=>{
          return <img 
          key={i}
          src={elem.download_url}
          width={300}
          height={300}
          className='m-10 rounded inline-block'
          />
       })}
    </div>
    </>
  )
}

export default page