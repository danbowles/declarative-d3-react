import React from 'react';
import Responsive from './Responsive';
import { XAxis, YAxis, Bars, XGrid, YGrid } from './D3RenderedComponents';
import * as d3 from 'd3';

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
    // const yDomain = d3.extent(data.map(yFn));
    const yMax = d3.max(data, d => yFn(d));
    const yDomain = [0, yMax + ~~(yMax * 0.02)];

    xScale
      .domain(xDomain)
      .range([0, width - left - right])
      .paddingInner(paddingInner)
      .paddingOuter(paddingOuter);

    yScale
      .domain(yDomain)
      .range([height - top - bottom, 0]);

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
    const { width, height, margin, data } = this.props;
    const { xScale, yScale } = this.getScales(this.props);
    const { plotWidth, plotHeight } = this.getPlotDimentions(this.props);

    const metaData = {
      xScale,
      yScale,
      plotWidth,
      plotHeight,
    };

    const plotData = {
      plotData: data.map((d, i) => {
        return {
          id: i,
          data: d,
          x: xScale(this.props.xFn(d)),
          y: yScale(this.props.yFn(d)),
          width: xScale.bandwidth(),
          height: plotHeight - yScale(this.props.yFn(d))
        };
      })
    };

    return (
      <svg width={width} height={height}>
        <g transform={`translate(${margin.left},${margin.top})`}>
          <g className="axisLayer">
            <YGrid {...metaData} />
            <XGrid {...metaData} />
            <XAxis {...metaData} transform={`translate(0,${plotHeight})`} />
            <YAxis {...metaData} />
          </g>
          <g className="plotLayer">
            <Bars {...metaData} {...plotData} />
          </g>
        </g>
      </svg>
    );
  }
}

export default Responsive(BarChart);
