import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image,
} from 'react-native';

const {height, width} = Dimensions.get('window');

const signInModal = () => {
  return (
     <View>
      <View style={styles.loginConatiner}>
        <TextInput placeholder="Your Email Address" style={styles.inputText} />

        <View style={styles.passwordContainer}>
        <TextInput placeholder="Password"/>
        <TouchableOpacity><Text>Show</Text></TouchableOpacity>
        </View>
        <Text style={styles.forgotText}>Forgot Password ?</Text>
        
        
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signButtonText}>Sign In</Text>
        </TouchableOpacity>
        <View style={styles.horizontalLine}></View>
        <TouchableOpacity style={styles.googleButton}>
          <Image
            source={require('../assets/search.png')}
            style={styles.searchImage}
            resizeMode="contain"
          />
          <Text style={styles.signGoogleText}>Sign in with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.facebookButton}>
          <Image
            source={require('../assets/facebook.png')}
            style={styles.searchImage}
            resizeMode="contain"
          />
          <Text style={styles.signButtonText}>Sign in with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.appleButton}>
          <Image
            source={require('../assets/apple-logo.png')}
            style={styles.searchImage}
            resizeMode="contain"
          />
          <Text style={styles.signButtonText}>Sign in with Apple</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.joinContainer}>
        <Text style={styles.joinAccountText}>Don't have an account ?</Text>
        <Text style={styles.joinText}>Join</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  loginConatiner: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    borderColor: '#f2f2f2',
    borderWidth: 1,
    height: height / 17,
    width: (width / 2) * 1.8,
    padding: 10,
    margin: 5,
  },
  passwordContainer:{
    borderColor: '#f2f2f2',
    borderWidth: 1,
    height: height / 17,
    width: (width / 2) * 1.8,
    padding: 10,
    margin: 5,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center' 
  },
  forgotText: {
    marginTop: height / 90,
  },
  signInButton: {
    height: height / 17,
    width: (width / 2) * 1.8,
    backgroundColor: 'black',
    justifyContent: 'center',
    marginTop: height / 30,
    marginBottom: height / 20,
  },
  signButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize:18
  },
  horizontalLine: {
    borderBottomColor: '#d9d9d9',
    borderBottomWidth: 1,
    width: width,
    marginBottom: height / 20,
  },
  googleButton: {
    height: height / 17,
    width: (width / 2) * 1.8,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchImage: {
    height: 20,
    width: 20,
    marginRight: 15,
  },
  signGoogleText: {
    textAlign: 'center',
    color: 'black',
    fontSize:18
  },
  facebookButton: {
    height: height / 17,
    width: (width / 2) * 1.8,
    backgroundColor: '#007acc',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height / 30,
  },
  appleButton: {
    height: height / 17,
    width: (width / 2) * 1.8,
    backgroundColor: 'black',
    justifyContent: 'center',
    marginTop: height / 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  joinContainer: {
    marginTop: height / 30,
    width: width,
    backgroundColor: '#f2f2f2',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: height / 20,
  },
  joinAccountText: {
    color: '#737373',
    fontSize: height / 45,
  },
  joinText: {
    fontSize: height / 45,
    fontWeight: 'bold',
  },
});

export default signInModal;
