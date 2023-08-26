
function processPriceData(data) {
    // let important = [];
    // important.push({ 'Symbol': data.symbol });
    // important.push({ 'Name': data.longName });
    // important.push({ 'Market Price': data.regularMarketPrice.fmt });
    // important.push({ 'Range': data.regularMarketDayRange.fmt });
    const important = {
        Symbol : data.symbol,
        Name : data.longName,
        Price : data.regularMarketPrice.fmt,
        Range: data.regularMarketDayRange.fmt
    }
    return important;
}

module.exports = {
    processPriceData
}