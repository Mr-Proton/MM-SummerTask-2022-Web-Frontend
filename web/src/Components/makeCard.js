import React from 'react'

export default function makeCard(props){
    return(
        
        <div className="card-body">
            <a href={props.url}>
                <img className='card-image' src={props.image} alt="" />
                <div className="card-texts">
                    <h3>{props.title}</h3>
                    <h6>{props.desc}</h6>
                </div>
            </a>
        </div>
        
    )
}