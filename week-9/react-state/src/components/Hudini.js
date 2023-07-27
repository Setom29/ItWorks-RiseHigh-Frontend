import React, { useState } from "react"
function Hudini(){
    const [show, setShow] = useState(false) 

    return (
        <div className="ex-1">
        <div>{show ? "Now you see me": "Now you don't"}</div>
        <button onClick={()=>{setShow(!show)}}>Click</button>
        </div>

    )
}

export default Hudini