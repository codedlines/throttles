import AsyncStorage from '@react-native-community/async-storage';

const getData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    if (jsonValue != null) {
      return JSON.parse(jsonValue);
    } else {
      return null;
    }
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const storeData = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const Storage = {
  getData,
  storeData,
};

export default Storage;
