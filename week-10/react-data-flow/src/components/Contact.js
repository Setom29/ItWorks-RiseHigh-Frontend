import React from 'react';

export default function Contact({contact, parentCallback}){
    return (
        <div onClick={()=>parentCallback(contact)}>{contact}</div>
    )
}