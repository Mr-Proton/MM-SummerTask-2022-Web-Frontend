import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'


export default function Home(){

    const [data,setData] = useState([])

    useEffect(() =>{
        fetch('api/article/all').then(res=>res.json).then(result=>console.log(result))
    },[])

    console.log(data)

      
      return(
        <>
            <div className="home-head" >
                <h2>Golden Dawn</h2>
                <h5>Welcome to the official site of Golden Dawn, the reporters of the kingdom of Clover</h5>
            </div>
            <div className="cards">{
                data.map(item=>{
                    <div className="card-body">
                    <Link to={"localhost:3000/api/article/" + item._id}>
                        <img className='card-image' src={item.image} alt="" />
                        <div className="card-texts">
                            <h3>{item.title}</h3>
                            <h6>{item.desc}</h6>
                        </div>
                    </Link>
                </div>})}
            </div>
        </>
    )
}