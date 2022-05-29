export default function SignUp(){
    return(
        <>
        <div className="heading-2">
            <h2>Sign Up</h2>
        </div>
        <div className="signing-center">
            <div className="signing">
                <h1>Sign Up</h1>
                <form action="">
                    <div className="user-input">
                        <input className="username" type="text" required/>
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className="user-input">
                        <input className="password" type="password" required/>
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="user-input">
                        <input className="re-password" type="password" required/>
                        <label htmlFor="re-password">Re-Enter Password</label>
                    </div>
                    <div className="submit-button">
                        <button className="submit">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}