const { options, start } = require("../api");
const { processPriceData } = require("../controller/price.controller");
const { processNewsData } = require("../controller/news.controller");
const { processTrendData } = require("../controller/trend.controller");
const { processBalanceSheetData } = require("../controller/bsheet.controller");
const { processStatsData } = require("../controller/stats.controller");
const { processEsgData } = require("../controller/esg.controller");
const { processAnalysisData } = require("../controller/analysis.controller");
const { processIndexData } = require('../controller/index.controller')
const { processHistoricData } = require('../controller/historic.controller')
const { processEarningsData } = require('../controller/earnings.controller')

let baseURL = options.url;

async function process(link, processingFuntion) {
  options.url = link;
  let data = await start(options);
  let processedData = processingFuntion(data);
  return processedData;
}

const yahoo = {
  async price(opt) {
    url = `${baseURL}/price/${opt.name}`;
    console.table(await process(url, processPriceData));
  },
  async news(opt) {
    url = `${baseURL}/news/${opt.name}`;
    console.table(await process(url, processNewsData));
  },
  async balanceSheet(opt) {
    url = `${baseURL}/balance-sheet/${opt.name}`;
    console.table(await process(url, processBalanceSheetData));;
  },
  async trend(opt) {
    url = `${baseURL}/earnings-trend/${opt.name}`;
    console.log(await process(url, processTrendData));
  },
  async stats(opt) {
    url = `${baseURL}/key-statistics/${opt.name}`;
    console.table(await process(url, processStatsData));
  },
  async esg(opt) {
    url = `${baseURL}/esg-score/${opt.name}`;
    console.table(await process(url, processEsgData));
  },
  async analysis(opt) {
    url = `${baseURL}/finance-analytics/${opt.name}`;
    console.table(await process(url, processAnalysisData));
  },
  async index(opt) {
    url = `${baseURL}/index-trend/${opt.name}`;
    console.log(await process(url, processIndexData));
  },
  async historic(opt) {
    url = `${baseURL}/historic/${opt.name}/1mo/5y`;
    options.url = url;
    let data = await start(options);
    processHistoricData(data);
  },
  async earnings(opt) {
    url = `${baseURL}/earnings/${opt.name}`;
    console.log(await process(url, processEarningsData));
  },
};
module.exports = yahoo;
