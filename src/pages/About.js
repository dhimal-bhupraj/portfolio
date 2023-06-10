import React from 'react'
import imgcomp from "../image/computer.jpg"
import Common from './Common'

const About = () => {
  return (
    <div>
      <Common 
        name="Welcome to About Page"
       btnName="Contact Me"
       link="/contact"
       imgsrc={imgcomp}
      />
    </div>
  )
}

export default About
