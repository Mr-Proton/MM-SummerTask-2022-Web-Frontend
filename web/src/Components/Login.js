import { Link } from "react-router-dom"

export default function Login(){
    return(
        <>
        <div className="heading-2">
            <h2>Log In</h2>
        </div>
        <div className="signing-center">
            <div className="signing">
                <h1>Login</h1>
                <form action="">
                    <div className="user-input">
                        <input className="username" type="text" required/>
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className="user-input">
                        <input className="password" type="password" required/>
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="submit-button">
                        <Link to="/admin-panel"><button className="submit">Login</button></Link>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}