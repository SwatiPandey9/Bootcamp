import React from 'react'
import { View, Text , SafeAreaView, StyleSheet, FlatList, Button, Dimensions} from 'react-native'

const {height, width}  = Dimensions.get('window')

const Index = ({navigation}) => {

    const indexList = ({item , i}) => {
        return(
            <View key={i} style={styles.indexContainer}>
                <Text style={styles.titleText}>{item.id}  {item.title}</Text>
                <Button 
                title={item.name}
                onPress={() => navigation.navigate(`${item.name}`)}
                />

            </View>
        )
    }

    return (
        <SafeAreaView style={styles.conatiner}>
        <View>
            <FlatList 
            data={DATA}
            renderItem={indexList}
            />
        </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    conatiner:{
        flex:1
    },
    indexContainer:{
       width:width,
       flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'center',
       backgroundColor:'#fff',
       padding:9,
       borderBottomWidth:0.2,
       borderBottomColor:'#e6e6e6',
    },
    titleText:{
        fontSize:18,
        fontWeight:'bold'
    }
    
})

const DATA = [
    {
        id:1,
        name:'Mapview',
        title:'MapView Assignment 20-oct'
    },
    {
        id:2,
        name:'Gesture',
        title:'Gesture Assignment 20-oct'
    },
    {
        id:3,
        name:'Animations',
        title:'Animations 20-oct'
    },
    {
        id:4,
        name:'Hooks',
        title:'Hooks Assignment 21-oct'
    },
    
]

export default Index
