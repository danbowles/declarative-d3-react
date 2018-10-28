import React from "react";
import Responsive from "./Responsive";
import * as d3 from "d3";

class BarChart extends React.Component {
  getScales(props) {
    const {
      data,
      xFn,
      yFn,
      width,
      height,
      paddingInner,
      paddingOuter,
      margin: { left, right, top, bottom }
    } = props;

    const xScale = d3.scaleBand();
    const yScale = d3.scaleLinear().nice();

    const xDomain = data.map(xFn);
    const yDomain = [0, d3.max(data, d => yFn(d))];

    xScale
      .domain(xDomain)
      .range([0, width - left - right])
      .paddingInner(paddingInner)
      .paddingOuter(paddingOuter);

    yScale.domain(yDomain).range([height - top - bottom, 0]);

    return { xScale, yScale };
  }

  getPlotDimentions(props) {
    const {
      width,
      height,
      margin: { left, right, top, bottom }
    } = props;
    const plotWidth = width - left - right;
    const plotHeight = height - top - bottom;

    return { plotWidth, plotHeight };
  }

  render() {
    const { width, height, margin } = this.props;
    const { plotWidth, plotHeight } = this.getPlotDimentions(this.props);

    return (
      <svg width={width} height={height}>
        <g transform={`translate(${margin.left},${margin.top})`} />
      </svg>
    );
  }
}

export default Responsive(BarChart);
