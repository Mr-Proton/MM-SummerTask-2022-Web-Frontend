import {useState} from 'react'

export default function SignUp(){
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    // const [repassword,setRePassword] = useState("")

    const postData= () =>{
        fetch("api/userAPI/sign-up",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:name,
                password:password
            })
        }).then(res=>res.json())
        .then(data=>console.log(data))
    }
    
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
                        <input className="username" value={name} type="text" required onChange={(e)=>setName(e.target.value)}/>
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className="user-input">
                        <input className="password" value={password} type="password" required onChange={(e)=>setPassword(e.target.value)}/>
                        <label htmlFor="password">Password</label>
                    </div>
                    {/* <div className="user-input">
                        <input className="re-password" value={repassword} type="password" required onChange={(e)=>setRePassword(e.target.value)}/>
                        <label htmlFor="re-password">Re-Enter Password</label>
                    </div> */}
                    <div className="submit-button">
                        <button className="submit" onClick={()=>postData}>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}