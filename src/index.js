import React from 'react';
import ReactDOM from 'react-dom';
import SvgTest from './components/SvgTest';
import BarChart from './components/BarChart';
import { barData } from './services/chartData';

import './styles.css';

function App() {
  console.log(barData());
  return (
    <div className="App">
      <h1>Responsive Charts</h1>
      <BarChart
        data={barData()}
        xFn={({ year }) => year}
        yFn={({ value }) => value}
        margin={{ top: 60, left: 40, bottom: 20, right: 20 }}
        paddingInner={0.1}
        paddingOuter={0.1}
      />
      <div style={{ background: 'gray' }}>
        <SvgTest />
      </div>
      <div style={{ background: 'gray' }}>
        <SvgTest />
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
