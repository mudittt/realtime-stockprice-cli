function formatKey(key) {
  const words = key.replace(/([A-Z])/g, " $1").split(" ");
  const formattedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return formattedWords.join(" ");
}

function processBalanceSheetData(data) {
  let important = [];
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key) && key !== "maxAge") {
      const { fmt, longFmt } = data[key];
      important.push({ key: formatKey(key), fmt, longFmt });
    }
  }
  return important
}

module.exports = {
    processBalanceSheetData
}
