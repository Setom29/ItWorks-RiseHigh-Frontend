import React from "react";

function Landing(props){
    const item = props.userData.store.filter(el => el.hottest === true)[0]
    return (
        <>
            <p>{`Welcome, ${props.userData.user}. The hottest item is ${item.item} for ${item.price}`}</p>
            <hr></hr>
        </>
    )
}

export default Landing