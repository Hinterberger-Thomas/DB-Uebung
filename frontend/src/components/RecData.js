import React, { useState, useEffect } from "react";
import axios from 'axios'
import Tablo from './Tablo'
function RecData() {
  const [data, setData] = useState({});

    

  const getData = () => {
    axios
    .get("http://localhost:8000")
    .then(response => {
        setData(response.data);
    })
    .catch(function(error) {
        alert(error)
    });
  };

  return (
    <div>
      <button onClick={getData}>Save</button>
      <p>{data.fname}</p>
      <Tablo json = {data} />
    </div>
  );
}

export default RecData;
