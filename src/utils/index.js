import moment from "moment";

const getDateRange = (data) => {
  const maxDate = new Date(
    Math.max(
      ...data.map((element) => {
        return new Date(element.date);
      })
    )
  );
  const minDate = new Date(
    Math.min(
      ...data.map((element) => {
        return new Date(element.date);
      })
    )
  );
  return { minDate, maxDate };
};

const getSortedData = (data) => {
  return data.sort(function (a, b) {
    return new Date(a.date) - new Date(b.date);
  });
};

const getFormattedGraphData = (data) => {
  const impressionsArray = data.map((item) => item.impressions);
  const clicksArray = data.map((item) => item.clicks);
  const categories = data.map((item) => item.date);
  return {
    series: [
      {
        name: "Impressions",
        data: impressionsArray,
      },
      {
        name: "Clicks",
        data: clicksArray,
      },
    ],
    categories,
  };
};

const getPerformanceDataForSelectedDateRange = (data, dateRange) => {
  const sortedData = getSortedData(data);
  const [startDate, endDate] = [
    moment(new Date(dateRange[0])).format("L"),
    moment(new Date(dateRange[1])).format("L"),
  ];

  const selectedDateRangeData = sortedData.filter((item) => {
    return (
      new Date(item.date) > new Date(startDate) &&
      new Date(item.date) < new Date(endDate)
    );
  });

  const totalImpressions = selectedDateRangeData.reduce(
    (total, { impressions }) => total + parseInt(impressions),
    0
  );
  const totalClicks = selectedDateRangeData.reduce(
    (total, { clicks }) => total + parseInt(clicks),
    0
  );
  const graphData = getFormattedGraphData(selectedDateRangeData);
  return { totalImpressions, totalClicks, graphData };
};

export { getDateRange, getPerformanceDataForSelectedDateRange };
