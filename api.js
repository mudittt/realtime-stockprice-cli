// const fs = require("fs");
const axios = require("axios");
require('dotenv').config()


const options = {
  method: "GET",
  url: "https://yahoo-finance127.p.rapidapi.com",
  // url: 'https://yahoo-finance127.p.rapidapi.com/price/eth-usd',
  // url: 'https://yahoo-finance127.p.rapidapi.com/price/tsla',
  // url: 'https://yahoo-finance127.p.rapidapi.com/search/adani-ports',
  // url: 'https://yahoo-finance127.p.rapidapi.com/search/mahindra',
  // url: "https://yahoo-finance127.p.rapidapi.com/historic/tsla/1d/15d",
  // url: "https://yahoo-finance127.p.rapidapi.com/balance-sheet/tsla",
  // url: "https://yahoo-finance127.p.rapidapi.com/index-trend/tsla",
  // url: "https://yahoo-finance127.p.rapidapi.com/earnings/tsla",
  // url: "https://yahoo-finance127.p.rapidapi.com/esg-score/tsla",
  // url: "https://yahoo-finance127.p.rapidapi.com/finance-analytics/reliance.ns",
  // url: "https://yahoo-finance127.p.rapidapi.com/news/meta",
  // url: "https://yahoo-finance127.p.rapidapi.com/earnings-trend/brk-b",
  // url: "https://yahoo-finance127.p.rapidapi.com/earnings-trend/nvda",
  // url: "https://yahoo-finance127.p.rapidapi.com/key-statistics/aapl",
  // url: "https://yahoo-finance127.p.rapidapi.com/multi-quote/aapl,tsla,brk-b",
  headers: {
    "X-RapidAPI-Key": process.env.KEY,
    "X-RapidAPI-Host": "yahoo-finance127.p.rapidapi.com",
  },
};

async function start(options) {
  try {
    const response = await axios.request(options);
    // console.log(response.data);

    // console.log(response.data.indicators.quote);
    const data = response.data;

    // const dataJ = JSON.stringify(data, null, 2);
    // fs.writeFileSync("data.json", dataJ, "utf-8");
    // console.log("data saved");
    
    return data;
  } catch (error) {
    console.error(error);
  }
}

// start(options);

module.exports = {
  options,
  start,
};
