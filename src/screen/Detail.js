import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Detail = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{route.params.company}</Text>
      </View>
      <Button title="Go back to Homepage" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:20
  },
  textContainer: {
    flex: 0.4,
    marginTop: 100,
    alignItems: 'center',
  },
  text: {
    fontSize: 35,
    backgroundColor: '#E8E8E6',
  },
});

export default Detail;
