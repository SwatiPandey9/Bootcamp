import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';

const Home = () => {
  const [loader, setLoader] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{uri: 'https://www.google.com/'}}
        style={styles.web}
        onLoadStart={() => setLoader(true)}
        onLoadEnd={() => setLoader(false)}
      />
      {loader ? (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          style={styles.indicator}
        />
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
  },
  web: {
    flex: 1,
  },
  indicator: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default Home;
