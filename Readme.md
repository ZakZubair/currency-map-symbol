<h1 align="left">
  currency-map-symbol
  
  [![Build Status](https://travis-ci.org/ZakZubair/currency-map-symbol.svg?branch=master)](https://travis-ci.org/ZakZubair/currency-map-symbol)
  ![](https://img.shields.io/badge/licence-MIT-blue.svg?style=flat-square)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
  [![Known Vulnerabilities](https://snyk.io/test/github/zakzubair/currency-map-symbol/badge.svg)](https://snyk.io/test/github/zakzubair/currency-map-symbol)
</h1>

A function to lookup the currency symbol for a given currency code.

## Installation

    npm install currency-map-symbol

## Test

#### Simple test

    npm run test
    
#### Test with watch  
  
    npm run test:watch 
    
#### Test coverage    
    npm run test:coverage  
         
 
## Usage

### Get symbol from currency code
```js
// ES5
const getSymbolFromCurrency = require('currency-map-symbol')

// ES6
import getSymbolFromCurrency from 'currency-map-symbol'

getSymbolFromCurrency('GBP') //=> '£'
getSymbolFromCurrency('EUR') //=> '€'
getSymbolFromCurrency('USD') //=> '$'
getSymbolFromCurrency('NOT A VALID CODE') //=> undefined
```

### Exposed map for other processing
```js
// ES5
const getSymbolFromCurrency = require('currency-map-symbol')

// ES6
import getSymbolFromCurrency from 'currency-map-symbol'

/* =>
{
 "USD" : "$",
 "GBP" : "£",
 …
}
*/
```

## Credits

Currency symbols originally sourced from [xe](http://www.xe.com/symbols.php)
