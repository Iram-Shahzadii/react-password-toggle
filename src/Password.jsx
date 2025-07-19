import React ,{ useState } from "react";

function PasswordToggle(){
    const[password,setpassword]=useState("");
    const[showpassword,setshowpassword]=useState(false);
    const handleToggle = () =>{
        setshowpassword(!showpassword);
    };
    return(
        <div style={{margin:"20px"}}>
            <h2>Show Password</h2>
            <input type={showpassword ? "text":"password"}
            value={password}onChange={(e)=>setpassword(e.target.value)}
            placeholder="Enter your password"
            style={{padding:"10px",fontSize:"16px",width:"250px"}}/>
            <button onClick={handleToggle}style={{marginLeft:"10px",padding:"10px"}}>{showpassword ? "Hide":"Show"}</button>

        </div>
    )

}
export default PasswordToggle;