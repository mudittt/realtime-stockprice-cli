// TODO: use for loop
let important = {}
function processEsgData(data) {
    important['Total ESG score'] = data.totalEsg.fmt;
    important['Environment score'] = data.environmentScore.fmt;
    important['Social score'] = data.socialScore.fmt;
    important['Governance score'] = data.governanceScore.fmt;
    important['Rating Year'] = data.ratingYear;
    important['Rating Month'] = data.ratingMonth;
    important['Peer Group'] = data.peerGroup;
    important['Related Controversies'] = `${data.relatedControversy[0]}, ${data.relatedControversy[0]}`;
    important['Percentile'] = data.percentile.fmt;
    important['Peer ESG Score Performance'] = `Min ${data.peerEsgScorePerformance.min}, Avg ${data.peerEsgScorePerformance.avg.toFixed(2)}, Max ${data.peerEsgScorePerformance.max}`;
    important['Peer Governance Performance'] = `Min ${data.peerGovernancePerformance.min}, Avg ${data.peerGovernancePerformance.avg.toFixed(2)}, Max ${data.peerGovernancePerformance.max}`;
    important['Peer Social Performance'] = `Min ${data.peerSocialPerformance.min}, Avg ${data.peerSocialPerformance.avg.toFixed(2)}, Max ${data.peerSocialPerformance.max}`;
    important['Peer Environment Performance'] = `Min ${data.peerEnvironmentPerformance.min}, Avg ${data.peerEnvironmentPerformance.avg.toFixed(2)}, Max ${data.peerEnvironmentPerformance.max}`;
    important['Peer Highest Controversy Performance'] = `Min ${data.peerHighestControversyPerformance.min}, Avg ${data.peerHighestControversyPerformance.avg.toFixed(2)}, Max ${data.peerHighestControversyPerformance.max}`;
    important['Highest Controversy'] = data.highestControversy;
    important['Peer Count'] = data.peerCount;
    important['ESG Performance'] = data.esgPerformance;
    important['Adult'] = data.adult;
    important['Alcoholic'] = data.alcoholic;
    important['Animal Testing'] = data.animalTesting;
    important['Catholic'] = data.catholic;
    important['Controversial Weapons'] = data.controversialWeapons;
    important['Small Arms'] = data.smallArms;
    important['Fur/Leather'] = data.furLeather;
    important['Gambling'] = data.gambling;
    important['GMO'] = data.gmo;
    important['Military Contract'] = data.militaryContract;
    important['Nuclear'] = data.nuclear;
    important['Pesticides'] = data.pesticides;
    important['Palm Oil'] = data.palmOil;
    important['Coal'] = data.coal;
    important['Tobacco'] = data.tobacco;
    return important;
}

module.exports ={ 
    processEsgData
}
