import React, { useEffect, useState } from "react";
import CanvasJSReact from "../graph_lib/canvasjs.react";
import axios from "axios";
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function TestGraph() {
  const [ar, setAr] = useState([]);
  useEffect(() => {
    doApi();
  }, []);

  const doApi = async () => {
    let url = "https://restcountries.com/v2/all";
    const reas = await axios.get(url);
    const countries_ar = [
      "United States of America",
      "Spain",
      "Brazil",
      "United Kingdom of Great Britain and Northern Ireland",
      "France",
    ];
    const temp_ar = reas.data.filter((item) =>
      countries_ar.includes(item.name)
    );

    const graph_ar = temp_ar.map((item) => {
      if (item.name === "United States of America") {
        item.name = "USA";
      } else if (
        item.name === "United Kingdom of Great Britain and Northern Ireland"
      ) {
        item.name = "UK";
      }
      return {
        label: item.name,
        y: item.population,
      };
    });

    setAr(graph_ar);
  };

  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2", //"light1", "dark1", "dark2"
    title: {
      text: "Graph of population in cities",
    },
    axisY: {
      includeZero: false,
      title: "populatin",
    },

    axisX: {
      title: "Countries",
    },
    data: [
      {
        type: "column", //change type to bar, line, area, pie, etc
        //indexLabel: "{y}", //Shows y value on all Data Points
        indexLabelFontColor: "#5A5757",
        indexLabelPlacement: "outside",
        dataPoints: ar,
      },
    ],
  };

  return (
    <div className="container">
      <h2>Graph of something</h2>
      <CanvasJSChart
        options={options}
        /* onRef={ref => this.chart = ref} */
      />
    </div>
  );
}

export default TestGraph;
