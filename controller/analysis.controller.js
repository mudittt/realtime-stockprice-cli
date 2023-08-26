
let important = {};
function processAnalysisData(data) {
    important['Current Price'] = data.currentPrice.fmt;
    important['Target High Price'] = data.targetHighPrice.fmt;
    important['Target Low Price'] = data.targetLowPrice.fmt;
    important['Target Mean Price'] = data.targetMeanPrice.fmt;
    important['Target Median Price'] = data.targetMedianPrice.fmt;
    important['Recommendation Mean'] = data.recommendationMean.fmt;
    important['Recommendation'] = data.recommendationKey;
    important['Number of Analysts'] = data.numberOfAnalystOpinions.fmt;
    important['Total Revenue'] = data.totalRevenue.fmt;
    important['Total Cash'] = data.totalCash.fmt;
    important['Debt to Equity Ratio'] = data.debtToEquity.fmt;
    important['Total Debt'] = data.totalDebt.fmt;
    important['Gross Profits'] = data.grossProfits.fmt;
    important['Profit Margins'] = data.profitMargins.fmt;
    return important
}

module.exports = {
    processAnalysisData
}