import { RNToasty } from 'react-native-toasty';

function showToastShortCenter(title: string) {
  RNToasty.Show({ title, duration: 0, position: 'center' });
}

function showToastLongCenter(title: string) {
  RNToasty.Show({ title, duration: 1, position: 'center' });
}

export default {
  showToastLongCenter,
  showToastShortCenter,
};
