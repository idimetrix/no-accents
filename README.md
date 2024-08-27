# no-accents

Convert the accented characters in the string to their corresponding non-accented ASCII characters.

You can install no-accents using npm, yarn, or pnpm:

``` 
npm install no-accents
```

``` 
yarn add no-accents
```

``` 
pnpm add no-accents
```

[![Unit tests](https://github.com/idimetrix/no-accents/actions/workflows/unit-tests.yml/badge.svg)](https://github.com/idimetrix/no-accents/actions/workflows/unit-tests.yml)

## About

An easy to use solution for converting all accented characters to their corresponding non-accented ASCII characters.

## Syntax

``` js
import accents from 'no-accents';

const outputString = accents.normalize(inputString)
```

Alternatively, you could use the CommonJS syntax to import it:

``` js
const accents = require('no-accents');

const outputString = accents.normalize(inputString)
```

#### inputString

The string that you wish to remove accents from.

#### outputString

Normalized string without accents.

## Usage

Call `accents.normalize()` by passing the string you wish to remove accents from, and you will get the non-accented
string as result.

``` js
const input = 'ÀÁÂÃÄÅ';
const output = accents.normalize(input);

console.log(output); // AAAAAA
```

## Methods

#### has

Determine if a string has any accented characters.

``` js
import accents from 'no-accents';

console.log(accents.has('ÀÁÂÃÄÅ')); // true
console.log(accents.has('ABC'));    // false
```

## License

MIT
