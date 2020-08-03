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

### Peer dependencies
Install these libraries to your local project

library|version tested
----|----
[react-native-toasty](https://github.com/prscX/react-native-toasty)| 1.0.1
[@react-native-community/geolocation](https://github.com/react-native-community/react-native-geolocation)| 2.0.2
[@react-native-mapbox-gl/maps](https://github.com/react-native-mapbox-gl/maps)| 8.1.0-rc.2
[react-native-elements](https://github.com/react-native-elements/react-native-elements)| 2.0.4
[react-native-permissions](https://github.com/react-native-community/react-native-permissions)| 2.1.5

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

### Map with directions
Add this in `App.tsx` to initialize mapbox
```js

import { MapBoxClient } from '@coded-lines/throttles';

MapBoxClient.initMapbox(MAPBOX_GL_ACCESS_TOKEN);
```

Component usage example
```js
import { MapDirections } from '@coded-lines/throttles';

function MwD() {
  return <MapDirections storeLocation={STORE_LOCATION} />;
}
```
### Ways of contact
```js
function Cnt() {
  const onLocationClick = ...

  return (
    <Contact
      onLocationClick={onLocationClick}
      phoneNumber={PHONE_NUMBER}
      locationText={LOCATION_TEXT}
    />
  );
}
```


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
