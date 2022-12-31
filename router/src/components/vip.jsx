import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { vip_ar } from "../data/data.js";

function Vip(props) {
  const params = useParams();
  const [query] = useSearchParams();
  return (
    <div>
      <h2>VIP {params.id}</h2>
      <h3>{vip_ar[params.id].name}</h3>
      <h4>Money: {vip_ar[params.id].worth}</h4>
      {/* ?page = */}
      <h5>Page : {query.get("page")}</h5>
    </div>
  );
}

export default Vip;
