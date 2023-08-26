
let important = [];
let estimates = {};
function processIndexData(data) {
    important.push({'Price to Earning Ratio': data.peRatio.fmt});
    important.push({'Price/Earning to Growth Ratio': data.pegRatio.fmt});
    estimates['Current Quarter'] = data.estimates[0].growth.fmt;
    estimates['Next Quarter'] = data.estimates[1].growth.fmt;
    estimates['Next Year'] = data.estimates[2].growth.fmt;
    estimates['Next Five Years'] = data.estimates[3].growth.fmt;
    estimates['Past Five Years'] = data.estimates[4].growth.fmt;
    
    important.push({'Estimates': estimates})
    return important
}

module.exports = {
    processIndexData
}