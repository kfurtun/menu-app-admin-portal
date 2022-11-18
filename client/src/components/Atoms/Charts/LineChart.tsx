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
const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  scales: {
    x: {
      display: false,
      grid: {
        display: false,
      },
    },
    y: {
      display: false,
      grid: {
        display: false,
      },
    },
  },
  maintainAspectRatio: false,
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

interface Props {
  borderColor: string;
  backgroundColor: string;
}

export function LineChart(props: Props) {
  const { borderColor, backgroundColor } = props;
  const data = {
    labels,
    datasets: [
      {
        label: '',
        data: [100, 200, 320, 180, 500, 430, 900],
        borderColor: borderColor as string,
        backgroundColor: `${backgroundColor}20` as string,
        fill: true,
        pointRadius: 0,
      },
    ],
  };
  return (
    <ChartContainer>
      <Line options={options} data={data} />
    </ChartContainer>
  );
}

export default LineChart;

interface ChartContainer {
  backgroundColor: string;
}

const ChartContainer = styled.div`
  width: 100%;
  height: ${pxToRem(60)};
  position: relative;

  canvas {
    height: 62px !important;
    width: calc(100% + 2px) !important;
  }
`;
