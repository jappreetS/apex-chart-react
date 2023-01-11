import { useEffect, useState } from "react";

import { Box } from "@mui/material";
import SignalCellularAltRoundedIcon from "@mui/icons-material/SignalCellularAltRounded";
import PieChartRoundedIcon from "@mui/icons-material/PieChartRounded";

import data from "./data.json";
import { getDateRange, getPerformanceDataForSelectedDateRange } from "./utils";

import DateRangePicker from "./components/DateRangePicker";
import PerformanceCard from "./components/PerformanceCard";
import LineChart from "./components/LineChart";

import "./App.scss";

const App = () => {
  const [dateRange, setDateRange] = useState();
  const [selectedDateRange, setSelectedDateRange] = useState();
  const [selectedPerformaceData, setSelectedPerformanceData] = useState();

  useEffect(() => {
    setDateRange(getDateRange(data));
  }, []);

  useEffect(() => {
    if (
      selectedDateRange?.length &&
      selectedDateRange[0] &&
      selectedDateRange[1]
    ) {
      const performanceData = getPerformanceDataForSelectedDateRange(
        data,
        selectedDateRange
      );
      setSelectedPerformanceData(performanceData);
    }
  }, [selectedDateRange]);

  const handleDateRangeChange = (newDateRange) => {
    setSelectedDateRange(newDateRange);
  };

  return (
    <div className="App">
      <Box sx={{ mb: 5 }}>
        <DateRangePicker
          minDate={dateRange?.minDate}
          maxDate={dateRange?.maxDate}
          onChange={handleDateRangeChange}
        />
      </Box>
      <Box sx={{ display: "flex", mb: 8 }}>
        <PerformanceCard
          sx={{ mr: 2 }}
          icon={<SignalCellularAltRoundedIcon style={{ color: "#fff" }} />}
          type="Clicks"
          data={selectedPerformaceData?.totalClicks || 0}
        />
        <PerformanceCard
          icon={<PieChartRoundedIcon style={{ color: "#fff" }} />}
          type="Impressions"
          data={selectedPerformaceData?.totalImpressions || 0}
        />
      </Box>
      <LineChart
        seriesData={selectedPerformaceData?.graphData?.series}
        categoriesData={selectedPerformaceData?.graphData?.categories}
      />
    </div>
  );
};

export default App;
