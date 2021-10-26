import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { Component } from 'react'
import { Text, View , SafeAreaView, StyleSheet, Dimensions, ScrollView} from 'react-native'

const {height, width} = Dimensions.get('window');
import {Header} from '../components';



export default class Home extends Component {
    state={
        userName: '',
        userEmail: '',
        userPhone: '',
    }

    getData = async () => {
        const currentUserName = await AsyncStorage.getItem('userName');
        const currentUserEmail = await AsyncStorage.getItem('userEmail');
        const currentUserPhone = await AsyncStorage.getItem('userPhone');
    
        this.setState({
          userName: currentUserName,
          userEmail: currentUserEmail,
          userPhone: currentUserPhone,
        });
    
      };
    
      componentDidMount(){
          this.getData()
      }

    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                <View style={styles.innerContainer}>
                <Header 
                    title="Welcome to Q Allure"
                    subTitle="User Profile"
                />
                <Text>{this.state.userName}</Text>
                <Text>{this.state.userEmail}</Text>
                <Text>{this.state.userPhone}</Text>
                </View>
                </ScrollView>
            </SafeAreaView>
            
        )
    }
};

const styles = StyleSheet.create({
    innerContainer: {
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#fff',
        marginHorizontal: 15,
        height:height/2.3 * 2


      },
})

