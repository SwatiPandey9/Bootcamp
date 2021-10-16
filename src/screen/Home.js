import React from 'react';

import {View, Text, Button, StyleSheet} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.alertText}>For Question 1 Click on use Alert</Text>

      <Button
        title={'Go to Use Alert'}
        onPress={() => navigation.navigate('usingAlert')}
      />

      <Text style={styles.DetailText}>For Question 1 Click on Details</Text>

      <Button
        title={'Go to Detail'}
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  alertText: {
    marginBottom: 30,
    fontWeight: 'bold',
  },
  DetailText: {
    marginTop: 30,
    marginBottom: 30,
    fontWeight: 'bold',
  },
});

export default Home;
