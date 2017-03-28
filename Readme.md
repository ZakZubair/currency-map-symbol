# currency-map-symbol

A function to lookup the currency symbol for a given currency code and vice versa.

## Installation

    npm install currency-map-symbol

## Usage

### Get symbol from currency code
```js
var getSymbolFromCurrency = require('currency-map-symbol').getSymbolFromCurrency;
getSymbolFromCurrency('GBP'); //=> '£'
getSymbolFromCurrency('EUR'); //=> '€'
getSymbolFromCurrency('USD'); //=> '$'
getSymbolFromCurrency('NOT A VALID CODE'); //=> undefined
```

### Get currency code from symbol
```js
var getCurrencyFromSymbol = require('currency-map-symbol').getCurrencyFromSymbol;
getCurrencyFromSymbol('£'); //=> 'GBP'
getCurrencyFromSymbol('€'); //=> 'EUR'
getCurrencyFromSymbol('$'); //=> 'USD'
getCurrencyFromSymbol('NOT A VALID CODE'); //=> undefined
```

### Exposed maps for other processing
```js
var symbolCurrencyMap = require('currency-map-symbol').symbolCurrencyMap;
/*
{
  "$": "USD",
  "£": "GBP",
  ...
}
*/

var currencySymbolMap = require('currency-map-symbol').currencySymbolMap;
/*
{
  "USD": "$",
  "GBP": "£",
  ...
}
*/
```

## Shorthand usage

```js
var getSymbol = require('currency-map-symbol')
getSymbol('GBP') //=> '£'
getSymbol('EUR') //=> '€'
getSymbol('USD') //=> '$'
getSymbol('NOT A VALID CODE') //=> '?'
```

## Tests
```bash
npm test
```

## Credits

Currency symbols originally sourced from [xe](http://www.xe.com/symbols.php
