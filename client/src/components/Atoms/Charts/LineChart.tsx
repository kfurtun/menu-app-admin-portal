import React from 'react';
import styled from 'styled-components';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import pxToRem from 'theme/pxToRem';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
  maintainAspectRatio: false,
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [100, 200, 320, 180, 500, 430, 900],
      borderColor: 'red',
      backgroundColor: 'red',
      fill: true,
    },
  ],
};

export function LineChart() {
  return (
    <Container>
      <Line options={options} data={data} />
    </Container>
  );
}

export default LineChart;

const Container = styled.div`
  width: ${pxToRem(350)};
  height: ${pxToRem(350)};
`;
