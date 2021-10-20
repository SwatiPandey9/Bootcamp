import React from 'react';
import {View, FlatList, StyleSheet, Text, Dimensions, Image, TouchableOpacity} from 'react-native';
const {height, width} = Dimensions.get('window')

const DATA = [
    {
        id:1,
        title:'Track Order',
        image: require('../assets/location.png'),
    },
    {
        id:2,
        title:'Size chart',
        image: require('../assets/size-chart.png'),
    },
    {
        id:3,
        title:'Notifications',
        image: require('../assets/notification.png'),
    },
    {
        id:4,
        title:'Store Locator',
        image: require('../assets/store-locator.png'),
    },
]

const aboutData = ({item, i}) => {
    return(
        <View key={i} style={styles.dataContainer}>
            <View style={styles.detail}>
            <Image source={item.image} style={styles.image}/>
            <Text>{item.title}</Text>
            </View>
            <TouchableOpacity>
                <Image source={require('../assets/next.png')}
                style={styles.nextImage}
                />  
            </TouchableOpacity> 
        </View>
    )

}

const FlatList1 = () => {
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
        padding:9,
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
    nextImage:{
        height:20,
        width:20, 
    }
})
export default FlatList1