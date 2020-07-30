# throttles

React native services and components library

## Installation

```sh
npm install throttles
```
or
```sh
yarn add throttles
```

### Dependencies
Install these libraries to your local project

library|version tested
----|----
[react-native-toasty](https://github.com/prscX/react-native-toasty)| 1.0.1

## Usage
### Toast
```js
import {Toast} from "@coded-lines/throttles";

// ...

Toast.showToastShortCenter('message');
Toast.showToastLongCenter('message');
```

### Terms and conditions
```js
import { TermsAndConditions } from '@coded-lines/throttles';

// ...

function TnC() {
  return (
    <TermsAndConditions
      text={TERMS_AND_CONDITIONS}
      onAccept={() => console.log('ok')}
    />
  );
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
