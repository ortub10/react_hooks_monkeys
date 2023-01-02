import React, { useEffect, useState } from "react";
import CanvasJSReact from "../graph_lib/canvasjs.react";
import axios from "axios";
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function LineGraph() {
  const [ar, setAr] = useState([]);
  useEffect(() => {
    doApi();
  }, []);

  const doApi = async () => {
    let url = "http://fs1.co.il/bus/tsla_stock.php";
    const resp = await axios.get(url);
    const temp_ar = resp.data.results.map((item) => {
      return {
        x: new Date(item.t),
        y: item.c,
      };
    });

    setAr(temp_ar);
  };
  const options = {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "Stock Price of TSLA - April 20 to May 22 (2022)",
    },
    axisX: {
      valueFormatString: "DD MMM",
      crosshair: {
        enabled: true,
        snapToDataPoint: true,
      },
    },
    axisY: {
      title: "Closing Price (in DOLAR)",
      valueFormatString: "$##0.00",
      crosshair: {
        enabled: true,
        snapToDataPoint: true,
        labelFormatter: function (e) {
          return "$" + CanvasJS.formatNumber(e.value, "##0.00");
        },
      },
    },
    data: [
      {
        type: "area",
        xValueFormatString: "DD MMM",
        yValueFormatString: "$##0.00",
        dataPoints: ar,
      },
    ],
  };
  return (
    <div className="container">
      <h2>April TSLA stock value</h2>
      <CanvasJSChart
        options={options}
        /* onRef={ref => this.chart = ref} */
      />
    </div>
  );
}

export default LineGraph;
