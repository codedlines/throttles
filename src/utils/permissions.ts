import { check, PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import { Platform } from 'react-native';

async function checkLocation() {
  if (Platform.OS === 'ios') {
    const result = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    switch (result) {
      case RESULTS.UNAVAILABLE:
        console.log(
          'This feature is not available (on this device / in this context)'
        );
        break;
      case RESULTS.DENIED:
        const permissionStatus = await request(
          PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        );
        console.log(
          'The permission has not been requested / is denied but requestable'
        );
        return permissionStatus;
      case RESULTS.GRANTED:
        console.log('The permission is granted');
        break;
      case RESULTS.BLOCKED:
        console.log('The permission is denied and not requestable anymore');
        break;
    }

    return result;
  } else if (Platform.OS === 'android') {
    const result = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    switch (result) {
      case RESULTS.UNAVAILABLE:
        console.log(
          'This feature is not available (on this device / in this context)'
        );
        break;
      case RESULTS.DENIED:
        const permissionStatus = await request(
          PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
        );
        console.log(permissionStatus);
        console.log(
          'The permission has not been requested / is denied but requestable'
        );
        return permissionStatus;
      case RESULTS.GRANTED:
        console.log('The permission is granted');
        break;
      case RESULTS.BLOCKED:
        console.log('The permission is denied and not requestable anymore');
        break;
    }
    return result;
  } else {
    throw new Error();
  }
}

export default { checkLocation };
