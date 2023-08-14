import React, { useState, useEffect } from "react";
const getDate = ()=>new Date().toUTCString()


export default function Exercise1() {
  const [time, setTime] = useState(getDate());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getDate);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return <div>{time}</div>;
}


