import './App.css';
import Hudini from "./components/Hudini"
import Home from "./components/Home"
import Landing from "./components/Landing"
import React, { useState } from 'react';

function App() {
  const [userData, setUserData] = useState({
    user: "Robyn",
    store: [
      { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
      { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
      { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true }
    ],
    shouldDiscount: false,
    currentPage: "Landing"
  })

  const changePage = function(page){
    const data = {...userData}
    data.currentPage = page
    setUserData(data)
  }

  return (
    <>
      <Hudini />
      {userData.currentPage === "Landing" ? <Landing userData={userData} /> : <Home userData={userData} />}
      <button onClick={() => { changePage("Landing") }}>Landing</button>
      <button onClick={() => { changePage("Home") }}>Home</button>
    </>
  );
}

export default App;
