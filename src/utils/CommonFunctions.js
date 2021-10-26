import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

export const setHomeData = async (name, email, phone, callback) => {
  await AsyncStorage.setItem('userName', name);
  await AsyncStorage.setItem('userEmail', email);
  await AsyncStorage.setItem('userPhone', phone.toString());

  callback();
};

const fuency = navigation => {
  logout = async () => {
    const deletedData = await AsyncStorage.clear();
    console.log('data deleted');
    console.log(deletedData);
  };
  navigation.navigate('Signup');
};

// export const setData = async (key, value) => {
//   await AsyncStorage.setItem(key, JSON.stringify(value));
// };

export const UseAlert = navigation => {
  Alert.alert('Hold on', 'Do you want to logout', [
    {
      text: 'Yes',
      onPress: () => fuency(navigation),
    },
    {text: 'No', onPress: () => null},
  ]);
};

// export default {setHomeData};
// export {setHomeData, UseAlert, setData} // it is working
// export default {UseAlert}
