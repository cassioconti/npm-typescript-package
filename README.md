# npm-typescript-package
A Node.js module that returns the plural form of any noun

## Installation 
```sh
npm install npm-typescript-package --save
yarn add npm-typescript-package
bower install npm-typescript-package --save
```

## Usage

### Javascript

```javascript
var pluralise = require('npm-typescript-package');
var boys = pluralise.getPlural('Boy');
```
```sh
Output should be 'Boys'
```

### TypeScript
```typescript
import { getPlural } from 'npm-typescript-package';
console.log(getPlural('Goose'))
```
```sh
Output should be 'Geese'
```

### AMD
```javascript
define(function(require,exports,module){
  var pluralise = require('npm-typescript-package');
});
```

## Test 
```sh
npm run test
```