import React, {useState} from 'react';

import {
  View,
  Button,
  StyleSheet,
  TextInput,
} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

const Detail = ({navigation}) => {
  const [inputText, setInputText] = useState('');

  const onChangeText = text => {
    setInputText(text);
    console.log(text);
  };

  const copyToClipboard = () => {
    Clipboard.setString(inputText);
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getString();

    alert(text);
  };

  return (
    <View style={styles.container}>
      <Button
        onPress={copyToClipboard}
        title={'Click here to copy to Clipboard'}
      />

      <Button onPress={fetchCopiedText} title={'Show copied text'} />

      <TextInput
        style={styles.text}
        value={inputText}
        onChangeText={onChangeText}
        placeholder={'Full Name'}
      />

      <Button
        title={'Go to Profile'}
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  copiedText: {
    marginTop: 10,
    color: 'red',
  },

  text: {
    width: '80%',
    height: 40,
    borderColor: 'black',
    backgroundColor: '#fff',
    borderWidth: 1,
    marginBottom: 100,
  },
});
export default Detail;
