import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const LineChart = ({ seriesData, categoriesData }) => {
  const [state, setState] = useState({
    series: [],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Product Trends by Month",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [],
      },
    },
  });

  useEffect(() => {
    if (seriesData && categoriesData) {
      setState({
        ...state,
        series: seriesData,
        options: {
          ...state.options,
          xaxis: {
            categories: categoriesData,
          },
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seriesData, categoriesData]);

  return (
    <div id="chart">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default LineChart;
