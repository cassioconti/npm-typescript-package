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
var cassio_pack = require('npm-typescript-package')
console.log(new cassio_pack.Plural().getPlural('Boy'));
console.log(new cassio_pack.Greeter().greet('Mary'));
```
```sh
Output should be 'Boys' 'Hello Mary!'
```

### TypeScript
```typescript
import { Plural, Greeter } from 'npm-typescript-package';

const plural: Plural = new Plural();
console.log(plural.getPlural("Goose"));

const greeter: Greeter = new Greeter();
console.log(greeter.greet("Cassio"));
```
```sh
Output should be 'Geese' 'Hello Cassio!'
```

## Test 
```sh
npm run test
```