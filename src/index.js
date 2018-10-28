import React from "react";
import ReactDOM from "react-dom";
import SvgTest from "./components/SvgTest";
import BarChart from "./components/BarChart";
import data from "../public/data.json";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Responsive Charts</h1>
      <BarChart
        data={data}
        xFn={d => d.year}
        yFn={d => d.amount}
        margin={{ top: 60, left: 40, bottom: 20, right: 20 }}
        paddingInner={0.1}
        paddingOuter={0.1}
      />
      <div style={{ background: "gray" }}>
        <SvgTest />
      </div>
      <div style={{ background: "gray" }}>
        <SvgTest />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
