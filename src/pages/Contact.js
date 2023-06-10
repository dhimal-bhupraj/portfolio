import React from 'react'
import { useState } from 'react'

const Contact = () => {
  const [data, setdata] = useState({
    fullname:" ",
    phone:" ",
    email:" ",
    msg : " ",
  });
  const InputEvent = (event) =>{
    const{name,value} = event.target;
    setdata ((preVal) => {
      return {
        ...preVal,
        [name] : value,
      }
    })
  };
  const formSubmit = (e) =>{
    e.preventDefault();
    alert(`${data.fullname} your form has been submitted`)
  }
  return (
    <div>
      <div className="my-3">
        <h1 className="text-center">Contact Me</h1>
      </div>
      <div className="container contact_div">
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <form onSubmit={formSubmit} >
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Enter Your Full Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ram Dhimal" 
                name="fullname"
                value={data.fullname}
                onChange={InputEvent} />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Mobile Number</label>
                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="9800000000"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent} />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                  name="email"
                  value={data.email}
                  onChange={InputEvent} />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Enter your Message'
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type='submit'>Submit Form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
