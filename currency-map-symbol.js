let currencySymbolMap = require('./map');

module.exports = function getSymbolFromCurrency (currencyCode) {
  if (typeof currencyCode !== 'string') return undefined;
  let code = currencyCode.toUpperCase();
  if (!currencySymbolMap.hasOwnProperty(code)) return undefined;
  return currencySymbolMap[code]
};

module.exports.currencySymbolMap = currencySymbolMap;
