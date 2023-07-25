import Spam from "./Spam";
import React, { Component } from 'react';


const Spamalot = () => {
    let spams = [];
    for (let i=0; i<500; i++){
        spams.push(<Spam />)
    }
    return (spams)
}

export default Spamalot

