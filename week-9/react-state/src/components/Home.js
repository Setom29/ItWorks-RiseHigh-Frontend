import React from "react"
import Item from "./Item"

function Home({userData}){
    
    return (
        userData.store.map(item => <Item item={item} discount={userData.shouldDiscount}/>)
    )
}

export default Home