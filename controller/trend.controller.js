// let important = [];
let important = {};
let metrics = {};

function processTrendData(data) {
  for (const key in data) {
    if (
      Object.hasOwnProperty.call(data, key) &&
      key !== "maxAge" &&
      key !== "period"
    ) {
      if (key === "endDate") {
        // important.push({ Date: data[key] });
        important['Date'] = data[key];
      }
      else if (key === "growth") {
        // important.push({ Growth: data[key].fmt });
        important['Growth'] = data[key].fmt;
      } else {
        // important.push({Metric : key})
        metrics[key] = {};
        for (const innerKey in data[key]) {
          if (Object.hasOwnProperty.call(data[key], innerKey)) {
            // console.log(data[key][innerKey].fmt);
            metrics[key][innerKey] = data[key][innerKey].fmt;
          }
        }
      }
    }
  }
  // important.push(metrics)
  important['Metrics'] = metrics
  // console.log(metrics);
  return (important);
}

module.exports = {
  processTrendData
}
