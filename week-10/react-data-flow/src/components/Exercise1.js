import React, {useState} from "react";

export default function Exercise1(){
    const [imgData, setImgData] = useState({
        images: [
          "http://www.agr.gc.ca/resources/prod/img/discover-decouvrez/potatoes300x210.jpg",
          "https://w-dog.ru/wallpapers/5/0/550392101528595/ovoshhnoj-salat-ovoshhi-zelenyj-salat-zelen-salat.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/220px-PerfectStrawberry.jpg"],
        currentImg: 0
      })

      function shiftImageBack (){
        let temp = {...imgData}
        if (imgData.currentImg  === 0){
            temp.currentImg = imgData.images.length - 1
        } else {
            temp.currentImg = imgData.currentImg - 1
        }
        setImgData(temp)
      }

      function shiftImageForward (){
        let temp = {...imgData}
        if (imgData.currentImg  === imgData.images.length - 1){
            temp.currentImg = 0
        } else {
            temp.currentImg = temp.currentImg + 1
        }
        setImgData(temp)
      }

      return (
        <>
            <img className="ex1-img" src={imgData.images[imgData.currentImg]} />
            <div className="ex1-buttons">
                <button className="back" onClick={shiftImageBack}>Previous</button>
                <button className="forward" onClick={shiftImageForward}>Next</button>
            </div>
        </>
      )
}