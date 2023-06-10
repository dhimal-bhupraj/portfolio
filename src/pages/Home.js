import React from 'react'
import Common from './Common'
import imgcomp from "../image/computer.jpg"
// import file from "../CV/BhuprajCV"
const Home = () => {
  return (
    <div>
      <Common name="Welcome to My Page"
      btnName="Get started"
      link="/skills"
      imgsrc={imgcomp}
      ></Common>
    </div>
  )
}

export default Home
