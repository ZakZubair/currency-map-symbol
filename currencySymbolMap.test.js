const getSymbolFromCurrency = require('./');
const currencySymbolMap = require('./map');

test('Should return $ when USD is provided', () => {
    let result = getSymbolFromCurrency('USD');
    expect(result).toBe('$');
});

test('Should return £ when GBP is provided', () => {
    let result = getSymbolFromCurrency('GBP');
    expect(result).toBe('£');
});

test('Should return € when EUR is provided', () => {
    let result = getSymbolFromCurrency('EUR');
    expect(result).toBe('€');
});

test('Should return € when eur is provided', () => {
    let result = getSymbolFromCurrency('eur');
    expect(result).toBe('€');
});

test('Should return undefined when code is non-existent', () => {
    let result = getSymbolFromCurrency('NON-EXISTENT-CODE');
    expect(result).toBe.undefined;
});

test('Should return undefined when param is not a string', () => {
    let result = getSymbolFromCurrency(1);
    expect(result).toBe.undefined;
});

test('Should return undefined when param is false', () => {
    let result = getSymbolFromCurrency(false);
    expect(result).toBe.undefined;
});

test('Should return undefined when param is undefined', () => {
    let result = getSymbolFromCurrency(false);
    expect(result).toBe.undefined;
});

test('Sanity check every value in map', () => {
    const currencies = Object.keys(currencySymbolMap);
    const hasFalseyValues = currencies.some(item => {
        return currencySymbolMap[item] !== getSymbolFromCurrency(item);
    });
    expect(hasFalseyValues).toEqual(false);
});