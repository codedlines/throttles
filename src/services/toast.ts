import { RNToasty } from 'react-native-toasty';

export function showToastShortCenter(title: string) {
  RNToasty.Show({ title, duration: 0, position: 'center' });
}

export function showToastLongCenter(title: string) {
  RNToasty.Show({ title, duration: 1, position: 'center' });
}

export default {
  showToastLongCenter,
  showToastShortCenter,
};
