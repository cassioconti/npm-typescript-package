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
var pluralise = require('npm-typescript-package').Plural();
var boys = pluralise.getPlural('Boy');
```
```sh
Output should be 'Boys'
```

### TypeScript
```typescript
import { Plural } from 'npm-typescript-package';
console.log(new Plural().getPlural('Goose'))
```
```sh
Output should be 'Geese'
```

## Test 
```sh
npm run test
```