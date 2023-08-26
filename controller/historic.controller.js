const asciichart = require('asciichart')

function processHistoricData(data) {
  const adjustedClosingPrices = data.indicators.adjclose[0].adjclose;

  const adjustedPriceChart = asciichart.plot([adjustedClosingPrices], {
    height: 10,
    colors: [asciichart.blue],
    offset: 2,
  });

  let volume = data.indicators.quote[0].volume.map((value) => value / 1000000);
  const volumeChart = asciichart.plot([volume], {
    height: 10,
    colors: [asciichart.lightmagenta],
    offset: 2,
  });

  console.log("Volume Chart (in millions)");
  console.log(volumeChart);
  console.log();
  console.log("Adjusted Price Chart");
  console.log(adjustedPriceChart);
}

module.exports = {
    processHistoricData
}