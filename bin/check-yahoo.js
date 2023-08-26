const { program } = require("commander");
const yahoo = require("../commands/yahoo");

program
  .command("price")
  .description("check real-time price of a stock/currency/crypto")
  .option(
    "-n, --name <ticker name>", 
    "ticker name of the stock/currency", 
    "tsla"
  )
  .action((opt) => yahoo.price(opt));

program
  .command("news")
  .description("check latest news")
  .option(
    "-n, --name <ticker name>", 
    "ticker name of the stock/currency", 
    "meta"
  )
  .action((opt) => yahoo.news(opt));

program
  .command("balance-sheet")
  .description("check balance sheet of a company")
  .option(
    "-n, --name <ticker name>", 
    "ticker name of the stock/currency", 
    "nvda"
  )
  .action((opt) => yahoo.balanceSheet(opt));

program
  .command("trend")
  .description("check earning trends and future behaviour of a company/currency")
  .option(
    "-n, --name <ticker name>", 
    "ticker name of the stock/currency", 
    "aapl"
  )
  .action((opt) => yahoo.trend(opt));

program
  .command("earnings")
  .description("check after tax earnings of a company")
  .option(
    "-n, --name <ticker name>", 
    "ticker name of the stock/currency", 
    "aapl"
  )
  .action((opt) => yahoo.earnings(opt));

program
  .command("esg")
  .description("check company's exposure to long term risks")
  .option(
    "-n, --name <ticker name>", 
    "ticker name of the stock/currency", 
    "aapl"
  )
  .action((opt) => yahoo.esg(opt));

program
  .command("analysis")
  .description("check company's financial analysis report")
  .option(
    "-n, --name <ticker name>", 
    "ticker name of the stock/currency", 
    "aapl"
  )
  .action((opt) => yahoo.analysis(opt));

program
  .command("historic")
  .description("check historic data of a company/currency")
  .option(
    "-n, --name <ticker name>", 
    "ticker name of the stock/currency", 
    "aapl"
  )
  .action((opt) => yahoo.historic(opt));

program
  .command("index")
  .description("check straightforward quantitative demand forecasting for future requirements")
  .option(
    "-n, --name <ticker name>", 
    "ticker name of the stock/currency", 
    "aapl"
  )
  .action((opt) => yahoo.index(opt));

program
  .command("stats")
  .description("check summary of key financial statistics for a company")
  .option(
    "-n, --name <ticker name>", 
    "ticker name of the stock/currency", 
    "aapl"
  )
  .action((opt) => yahoo.stats(opt));


program.parse(process.argv);
