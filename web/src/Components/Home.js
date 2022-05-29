import React from 'react'
import MakeCard from './makeCard'
import data from './data'

export default function Home(){
    var mapOfCards=data.map(items =>(
        <MakeCard {...items} />
      ))
      
      return(
        <>
            <div className="home-head" >
                <h2>Golden Dawn</h2>
                <h5>Welcome to the official site of Golden Dawn, the reporters of the kingdom of Clover</h5>
            </div>
            <div className="cards">
                {mapOfCards}
            </div>
        </>
    )
}