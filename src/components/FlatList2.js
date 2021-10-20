import React from 'react';
import {View, FlatList, StyleSheet, Text, Dimensions, Image, TouchableOpacity} from 'react-native';
const {height, width} = Dimensions.get('window')

const DATA = [
    {
        id:1,
        title:'Country',
        image: require('../assets/country.png'),
        flag:require('../assets/united-states.png'),
        info:'USD'
    },
    {
        id:2,
        title:'Language',
        image: require('../assets/language.png'),
        info:'ENG'
    },
    {
        id:3,
        title:'About us',
        image: require('../assets/aboutus.png'),
    },
    {
        id:4,
        title:'FAQ',
        image: require('../assets/faq.png'),
    },
    {
        id:5,
        title:'Shipping & Returns',
        image: require('../assets/shipping.png'),
    },
    {
        id:6,
        title:'Chat with us',
        image: require('../assets/chat.png'),
    },
    {
        id:7,
        title:'Rate Application',
        image: require('../assets/rate.png'),
    },
    {
        id:8,
        title:'Share Application',
        image: require('../assets/share.png'),
    },
    {
        id:9,
        title:'Privacy Policy',
        image: require('../assets/privacy.png'),
    },
    {
        id:10,
        title:'Terms & Conditions',
        image: require('../assets/term.png'),
    },
    {
        id:11,
        title:'Send Us An Email',
        image: require('../assets/email.png'),
    },
    

]

const aboutData = ({item, i}) => {
    return(
        <View key={i} style={styles.dataContainer}>
            <View style={styles.detail}>
            <Image source={item.image} style={styles.image}/>
            <Text>{item.title}</Text>
            </View>
            <TouchableOpacity style={styles.sideContainer}>
                <Image source={item.flag} style={styles.flag}/>
                <Text>{item.info}</Text>
                <Image source={require('../assets/next.png')}
                style={styles.nextImage}
                />  
            </TouchableOpacity> 
        </View>
    )

}

const FlatList2 = () => {
    return(
        <View style={styles.container}>
            <FlatList 
            data={DATA}
            renderItem={aboutData}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:10
       },
       dataContainer:{
           width:width,
           backgroundColor:'#fff',
           padding:10,
           borderBottomWidth:0.2,
           borderBottomColor:'#e6e6e6',
           flexDirection:'row',
           justifyContent:'space-between'
       },
        detail:{
           flexDirection:'row'
        },
       image:{
        height:25,
        width:25,
        marginRight:20
    },
    sideContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    nextImage:{
        height:20,
        width:20,
        marginLeft:4 
    },
    flag:{
        height:20,
        width:20,
        marginRight:8
    }
})

export default FlatList2