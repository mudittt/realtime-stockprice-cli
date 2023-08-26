
const important = {};
function processStatsData(data) {
  // Company Information
  important["Name"] = data.longName;

  // Market Data
  important["Regular Market Price"] = data.regularMarketPrice.fmt;
  important["Market Cap"] = data.marketCap.fmt;
  important["52-Week Range"] = data.fiftyTwoWeekRange.fmt;

  // Dividends
  important["Dividend Yield"] = data.dividendYield.fmt;
  important["Dividend Rate"] = data.dividendRate.fmt;
  important["Dividend Date"] = data.dividendDate.fmt;

  // Earnings
  important["EPS Trailing Twelve Months"] = data.epsTrailingTwelveMonths.fmt;
  important["EPS Forward"] = data.epsForward.fmt;
  important["Earnings Timestamp"] = data.earningsTimestamp.fmt;

  // Pre-Market
  important["Pre-Market Price"] = data.preMarketPrice.fmt;
  important["Pre-Market Change Percent"] = data.preMarketChangePercent.fmt;

  // Shares and Exchange
  important["Shares Outstanding"] = data.sharesOutstanding.fmt;
  important["Exchange Timezone"] = data.exchangeTimezoneName;

  // Performance Metrics
  important["200-Day Average Change Percent"] = data.twoHundredDayAverageChangePercent.fmt;
  important["52-Week High Change Percent"] = data.fiftyTwoWeekHighChangePercent.fmt;
  important["52-Week Low Change Percent"] = data.fiftyTwoWeekLowChangePercent.fmt;
  important["50-Day Average Change Percent"] = data.fiftyDayAverageChangePercent.fmt;
  important["52-Week Change Percent"] = data.fiftyTwoWeekChangePercent.fmt;

  // Average Volumes
  important["Average Volume (3-month)"] = data.averageDailyVolume3Month.fmt;
  important["Average Volume (10-day)"] = data.averageDailyVolume10Day.fmt;

  // Price-to-Book Ratio
  important["Price-to-Book Ratio"] = data.priceToBook.fmt;

  return important
}

module.exports= {
    processStatsData
}
