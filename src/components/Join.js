import React , {useState} from 'react'
import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity, Image} from 'react-native'

import CheckBox from '@react-native-community/checkbox';
import { ScrollView } from 'react-native-gesture-handler';

const {height, width} = Dimensions.get('window');

export default function Join() {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [maleCheckBox, setMaleCheckBox] = useState(false)
    const [femaleCheckBox, setFemaleCheckBox] = useState(false)


    return (
        
        <View style={styles.container}>
        <TextInput placeholder="First Name" style={styles.inputText} />
        <TextInput placeholder="Last Name" style={styles.inputText} />
        <TextInput placeholder="Your Email" style={styles.inputText} />

        <View style={styles.passwordContainer}>
        <TextInput placeholder="Password"/>
        <TouchableOpacity><Text>Show</Text></TouchableOpacity>
        </View>
        <View style={styles.numbercontainer}>
            <Image source={require('../assets/flag.png')} style={styles.flag}/>
            <Text>+1</Text>
            <View style={styles.slash}></View>
        <TextInput placeholder="1234567890" style={styles.numberText} />
        </View>
        <View style={styles.genderContainer}>
            <CheckBox 
            disabled={false}
            value={maleCheckBox}
            onValueChange={(newValue) => setMaleCheckBox(newValue)}
            boxType='circle'
            onCheckColor='black'
            onFillColor='#ffcc00'
            onTintColor='#ffcc00'
            /> 
            <Text style={styles.genderText}>Male</Text>
            <CheckBox 
            disabled={false}
            value={femaleCheckBox}
            onValueChange={(newValue) => setFemaleCheckBox(newValue)}
            boxType='circle'
            onCheckColor='black'
            onFillColor='#ffcc00'
            onTintColor='#ffcc00'
            /> 
            <Text style={styles.genderText}>Female</Text>
        </View>
        <View style={styles.checkBoxcontainer}>
        <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={(newValue) => setToggleCheckBox(newValue)}
        boxType='square'
        onCheckColor='black'
        onFillColor='#ffcc00'
        onTintColor='#ffcc00'
        />
        <Text style={styles.checkboxText}>Be the first to know about new arrivals, sales and promos by submitting your email!
        you can opt out at any time. Privacy Policy.
        </Text>
        </View>
        <TouchableOpacity style={styles.joinInButton}>
          <Text style={styles.signButtonText}>Join</Text>
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
        <View style={styles.signContainer}>
        <Text style={styles.signAccountText}>Already Have an account ?</Text>
        <Text style={styles.signText}>Sign In</Text>
        </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputText: {
        borderColor: '#f2f2f2',
        borderWidth: 1,
        height: height / 20,
        width: (width / 2) * 1.8,
        padding: 8,
        margin: 4,
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
      numbercontainer:{
        borderColor:'#f2f2f2',
        borderWidth:1,
        height:height / 20,
        width:(width / 2) * 1.8,
        padding: 8,
        margin: 4,
        flexDirection:'row',
        alignItems:'center',

    },
    flag:{
        height:20,
        width:20,
        marginRight:15
        
    },
    slash:{
        borderRightColor:'#f2f2f2',
        borderRightWidth:1,
        height:20,
        marginHorizontal:15
    },
      genderContainer:{
          width:width,
          flexDirection:'row',
          justifyContent:'flex-start',
          alignItems:'center',
          marginTop:height/90,
          marginBottom:height/70,
          padding:10   
      },
      genderText:{
          marginLeft:10,
          marginRight:width/20,
          fontSize:height/60,
       

          
      },
      checkBoxcontainer:{
        
          flexDirection:'row',
          padding:15,
          
          
      },
      checkboxText:{
          fontSize:height/70,
          marginLeft:5,
          textAlign:'left'
      },
      joinInButton: {
        height: height / 17,
        width: (width / 2) * 1.8,
        backgroundColor: 'black',
        justifyContent: 'center',
        marginTop: height / 50,
        marginBottom: height / 20,
      },
      horizontalLine: {
        borderBottomColor: '#d9d9d9',
        borderBottomWidth: 0.5,
        width: (width/2) * 1.8,
        marginBottom: height / 90,
      },
        googleButton: {
        height: height / 17,
        width: (width / 2) * 1.8,
        backgroundColor: '#fff',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor:'#f2f2f2',
        borderWidth:0.5
      },
      searchImage: {
        height: 20,
        width: 20,
        marginRight: 15,
      },
      signGoogleText: {
        textAlign: 'center',
        color: 'black',
        fontSize:18,
      },
      facebookButton: {
        height: height / 17,
        width: (width / 2) * 1.8,
        backgroundColor: '#007acc',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: height / 50,
      },
      signButtonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize:18
      },
      appleButton: {
        height: height / 17,
        width: (width / 2) * 1.8,
        backgroundColor: 'black',
        justifyContent: 'center',
        marginTop: height / 50,
        flexDirection: 'row',
        alignItems: 'center',
      },
      signContainer: {
        marginTop: height / 30,
        width: width,
        backgroundColor: '#f2f2f2',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: height / 20,
      },
      signAccountText: {
        color: '#737373',
        fontSize: height / 45,
      },
      signText: {
        fontSize: height / 45,
        fontWeight: 'bold',
      },
      

    })
