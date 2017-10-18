<h1 align="left">
  currency-map-symbol
  
  [![Build Status](https://travis-ci.org/ZakZubair/currency-map-symbol.svg?branch=master)](https://travis-ci.org/ZakZubair/currency-map-country)
  ![](https://img.shields.io/badge/licence-MIT-blue.svg?style=flat-square)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
</h1>

A function to lookup the currency symbol for a given currency code.

## Installation

    npm install currency-map-symbol

## Usage

### Get symbol from currency code
```js
// ES5
const getSymbolFromCurrency = require('currency-symbol-map')

// ES6
import getSymbolFromCurrency from 'currency-symbol-map'

getSymbolFromCurrency('GBP') //=> '£'
getSymbolFromCurrency('EUR') //=> '€'
getSymbolFromCurrency('USD') //=> '$'
getSymbolFromCurrency('NOT A VALID CODE') //=> undefined
```

### Exposed map for other processing
```js
// ES5
const getSymbolFromCurrency = require('currency-symbol-map')

// ES6
import getSymbolFromCurrency from 'currency-symbol-map'

/* =>
{
 "USD" : "$",
 "GBP" : "£",
 …
}
*/
```

## Tests
```bash
npm test
```

## Credits

Currency symbols originally sourced from [xe](http://www.xe.com/symbols.php)
