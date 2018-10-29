import * as d3 from 'd3';

const randomInt = (n) => ~~(Math.random() * n);

export const lineData = () => {
  // todo
  return [];
};

export const barData = () => {
  return d3.range(2000, 2005 + randomInt(10))
    .map((dataItem, index) => ({
      id: index,
      year: dataItem,
      value: 300 + randomInt(600) + 1
    }));
}