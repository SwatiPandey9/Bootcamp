import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
} from 'react-native';



const {height, width} = Dimensions.get('window');
import FlatList1 from '../components/FlatList1';
import FlatList2 from '../components/FlatList2';

import SignInModal from '../components/SignInModal';
import Join from '../components/Join';

const Profile = () => {
  const [modal, setModal] = useState(false);
  const [signIn, setSignIn] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View>
            <Text style={styles.welcomeText}>Welcome!</Text>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => setModal(true)}>
              <Text>SIGN IN</Text>
              <View style={styles.verticleLine} />
              <Text>JOIN</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={require('../assets/profilePic.jpeg')}
            style={styles.profilePic}
          />
        </View>

        <FlatList1 />
        <FlatList2 />
        <View style={styles.version}>
          <Text style={styles.versionText}>App Version4.0.6(1)</Text>
        </View>
      </ScrollView>

      {/* SignIn and Join Modal---------------------------------------------- */}

      <Modal visible={modal} deviceHeight>
        
        <SafeAreaView>
          
          <View>
            <TouchableOpacity
              onPress={() => setModal(false)}
              style={styles.closeImage}>
              <Image
                source={require('../assets/close.png')}
                style={styles.closeImage}
              />
            </TouchableOpacity>
            <View style={styles.headerConatiner}>
              <TouchableOpacity
                style={styles.signBox}
                onPress={() => {
                  setSignIn(false);
                }}
                style={[
                  styles.signBox,
                  signIn
                    ? {borderBottomColor: '#fff'}
                    : {borderBottomColor: '#ffcc00'},
                ]}>
                <Text
                  style={[
                    styles.signText,
                    signIn ? {color: 'grey'} 
                    : {color: 'black'},
                  ]}>
                  Sign in
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setSignIn(true);
                }}
                style={[
                  styles.signBox,
                  signIn
                    ? {borderBottomColor: '#ffcc00'}
                    : {borderBottomColor: '#fff'},
                ]}>
                <Text
                  style={[
                    styles.signText,
                    signIn
                      ? { color: 'black'}
                      : {color: 'grey'},
                  ]}>
                  Join
                </Text>
              </TouchableOpacity>
            </View>
            {signIn ? <Join /> : <SignInModal />}
          </View>
          
        </SafeAreaView>
      </Modal>
      
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  closeImage: {
    height: 20,
    width: 20,
    alignSelf: 'flex-end',
  },
  header: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 25,
  },
  signIn: {
    flexDirection: 'row',
    marginLeft: 15,
    backgroundColor: '#fff5cc',
    margin: 12,
    padding: 5,
    borderRadius: 5,
  },
  verticleLine: {
    height: 15,
    width: 1,
    backgroundColor: '#909090',
    alignSelf: 'center',
    marginHorizontal: 8,
  },
  profilePic: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },
  version: {
    width: width,
    backgroundColor: '#f2f2f2',
    padding: 20,
    alignItems: 'center',
  },
  headerConatiner: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    marginBottom: height / 40,
  },
  signBox: {
    borderBottomWidth: 4,
    paddingBottom: 25,
  },
  signText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Profile;
