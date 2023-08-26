
function processNewsData(data) {
    let important = [];
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            const article = data[key];
            const title = article.title;
            // const link = article.link;
            important.push({title})
        }
    }
    if (important.length > 4) {
      important = important.slice(0,3);
    }
    return important
    
}

module.exports = {
    processNewsData
}

