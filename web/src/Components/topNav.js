
export default function nav(){
    return(
        <div className="top-nav">
            <div>
                <h1>Golden Dawn</h1>
                <h3 className="sub-head">Official news site of Clover Kingdom</h3>
            </div>
            <input className="search" type="text" placeholder="Search for articles"/>
            <ul className="nav-menu">
                <li>Home</li>
                <li>About</li>
                <li>Trending articles</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}