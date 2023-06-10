import React from 'react'
import { NavLink } from 'react-router-dom'


const Card = (props) => {
    return (
        <div>
            <div class="card" >
                <img src={props.imgsrc} class="card-img-top" alt="images" />
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.desc}</p>
                    <NavLink  >GO Somewhere</NavLink >
            </div>
            </div>
            </div>
            )
}

            export default Card
