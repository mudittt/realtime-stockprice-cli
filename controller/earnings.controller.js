
let important = [];
let earnings = {};
let currentQuarter = {};
function processEarningsData(data) {
  for (const i of data.earningsChart.quarterly) {
    let data = { actual: i.actual.fmt, estimate: i.estimate.fmt };
    earnings[i.date] = data;
  }
  important.push({'Quarterly':earnings});
  currentQuarter[
    `${data.earningsChart.currentQuarterEstimateDate}${data.earningsChart.currentQuarterEstimateYear}`
  ] = {'estimate' : data.earningsChart.currentQuarterEstimate.fmt};
  important.push({'Current Quarter' : currentQuarter});
  
  earnings = {};
  for (const i of data.financialsChart.yearly) {
    let data = { revenue: i.revenue.fmt, earnings: i.earnings.fmt };
    earnings[i.date] = data;
  }
  important.push({'Financials (Yearly)': earnings});
  
  earnings = {};
  for (const i of data.financialsChart.quarterly) {
    let data = { revenue: i.revenue.fmt, earnings: i.earnings.fmt };
    earnings[i.date] = data;
  }
  important.push({'Financials (Quarterly)': earnings});
  
  return important

}

module.exports = {
  processEarningsData,
};
