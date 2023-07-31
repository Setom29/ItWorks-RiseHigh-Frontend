import React from "react";


export default function Conversation({messages, name, parentCallback}){
    return (
        <>
            {messages.map((el) => <div>{`${el.sender==="self" ? name : "Me" }: ${el.text}`}</div>)}
            <button className="back" onClick={() => parentCallback(null)}>Back</button>
        </>
    )
}