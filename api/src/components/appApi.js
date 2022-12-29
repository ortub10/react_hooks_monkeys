import React, { useEffect, useState } from "react";

function AppApi() {
  let [ar, setAr] = useState([]);
  useEffect(() => {
    doApi();
  }, []);

  const doApi = async () => {
    let url = "http://fs1.co.il/bus/shop.php";
    let resp = await fetch(url);
    let data = await resp.json();
    console.log(data);
    setAr(data);
  };
  return (
    <div>
      <h1>List of pruduct</h1>
      <ul>
        {ar.map((item) => {
          return (
            <li key={item.id}>
              {item.name} = {item.price} NIS
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AppApi;
