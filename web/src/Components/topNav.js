import { Link } from "react-router-dom"

export default function nav(){
    return(
        <div className="top-nav">
            <div>
                <Link to="/"><h1>Golden Dawn</h1></Link>
                <h3 className="sub-head">Official news site of Clover Kingdom</h3>
            </div>
            <input className="search" type="text" placeholder="Search for articles"/>
            <ul className="nav-menu">
                <li><Link to="/"> Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/trending">Trending</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/sign-up">Sign up</Link></li>
            </ul>
        </div>
    )
}