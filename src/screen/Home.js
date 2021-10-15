import React from 'react';
import {View, StyleSheet,TouchableOpacity, Text, Image, ScrollView, SafeAreaView} from 'react-native';

import ItemImages from '../components/ItemImages';

const Home = () => {
    const button = ['Polo Shirts','Dress Shirts','Shorts','T-Shirts & V']
    return (
      <SafeAreaView>
      <ScrollView>
      <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View>
                    <TouchableOpacity style={styles.items}>
                        <Text style={styles.itemsText}>195 items</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.customizeContainer}>
                    <View style={styles.sortContainer}>
                        <TouchableOpacity style = {styles.sortOpacity}>
                        <Image
                        source={require('../assets/sort.png')}
                        style={styles.sortImage}
                        />
                        <Text style={styles.sortText}>SORT</Text>
                        </TouchableOpacity>
                        <View style={styles.verticleLine}></View>
                        <TouchableOpacity style = {styles.filterOpacity}>
                        <Image
                        source={require('../assets/filter.png')}
                        style = {styles.filterImage}
                        />
                        <Text style={styles.filterText}>FILTER</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <ScrollView horizontal = {true}>
            <View style={styles.buttonContainer}>
                {button.map((item) => 
                <TouchableOpacity style = {styles.button}>
                    <Text style = {styles.buttonText}>{item}</Text>
                </TouchableOpacity>
                )}
            </View>
            </ScrollView>
            <ItemImages />
        </View>
        </ScrollView>
        </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
     container:{
         flex:1,
     } ,
     innerContainer:{
         height:60,
         backgroundColor:'#fff', 
         flexDirection:'row',
         borderTopWidth:0.4,
         borderBottomWidth:0.3
     },
     items:{
        margin:19,
        height:20,
     },
     itemsText:{
         
         textAlign:'left',
         fontSize:18
     },
     customizeContainer:{
        marginLeft:50,  
     },
     sortContainer:{
         flexDirection:'row',
     },
     sortOpacity:{
        flexDirection:'row',
        padding:17,
     },
     filterOpacity:{
        flexDirection:'row',
        padding:15
     },
     sortImage:{
        height:20,
        width:20,  
     },
     sortText:{
         marginLeft:5,
         fontSize:18,     
     },
     verticleLine:{
        marginTop:10,
        height: '50%',
        width: 1,
        backgroundColor: '#909090',
        marginHorizontal:10,
     },
     filterImage:{
         height:18,
         width:18,
         marginTop:3
     },
     filterText:{
        marginLeft:5,
         fontSize:18, 
     },
     buttonContainer:{
         height:70,
         width:'100%',
         backgroundColor:'#fff',
         flexDirection:'row'
     },
     button:{
         height:45,
         width:100,
         backgroundColor:'#f2f2f2',
         margin:5,
         marginTop:13,
         borderRadius:10,
         padding:10
     },
     buttonText:{
         marginTop:5,
         textAlign:'center'
     }

  })

  export default Home
  