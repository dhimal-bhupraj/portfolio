import React from 'react'
import Typewriter from 'typewriter-effect';
// import imgcomp from "../image/computer.jpg"
// import file from "../CV/BhuprajCV"
import { NavLink } from 'react-router-dom'
const Common = (props) => {
  return (
    <div>
      <section className='' id='header'>
        <div className="container-fluid nav_bg my-3">
         <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
              <h1>{props.name}</h1>
              <h2 className='my-3 '>
                Hello,
                <Typewriter
                  options={{
                    strings: ['I am Bhupraj Dhimal', 'I am a Web Developer'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h2>
              <div className="mt-3">
                <NavLink type='button' to={props.link}  className='btn btn-outline-primary'>{props.btnName}</NavLink>
                </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={props.imgsrc} alt="Common img" className='imgactive'   />
                </div>
              </div>
            </div>
          </div>
         </div>

      </section>
    </div>
  )
}

export default Common

