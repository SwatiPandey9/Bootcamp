import React, {useState} from 'react';

import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

const Profile = ({navigation}) => {
  const [copiedText, setCopiedText] = useState('');

  const onChangeText = text => {
    setCopiedText(text);
    console.log(text);
  };
  return (
    <View style={styles.container}>
      <Text>Paste copied text below</Text>

      <TextInput
        style={styles.text}
        value={copiedText}
        onChangeText={onChangeText}
        placeholder={'Full Name'}
      />

      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    width: '80%',
    height: 40,
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 1,
    marginBottom: 100,
  },
});

export default Profile;
