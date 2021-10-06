import React from "react";
import { View, StyleSheet, Text, ScrollView, Button } from "react-native";

const Home = () => {
    return(
        <>
        <ScrollView>
        <View style = {styles.container}>

            <View style = {styles.headingContainer}>
                <Text style = {styles.heading}>
                    Product Details
                </Text>
            </View>
            <View style = {styles.img}/>
            <View style = {styles.imgText}>
                <Text style = {styles.text}>
                    How To Train YourDragon The Hidden World
                </Text>
            </View>
            <View style = {styles.part}>
                <Text>
                    PartIII
                </Text>
            </View>
            <View style = {styles.button}>
                <Text style = {styles.buttonText}>Adventure</Text>
                <Text style = {styles.buttonText}>Family </Text>
                <Text style = {styles.buttonText}>Fantasy </Text>
            </View>
            <View/>
            <View style = {styles.content}>
                <View style = {styles.data}>
                    <Text style = {styles.dataTextHead}>Year</Text>
                    <Text style = {styles.dataTextContent}>2019</Text>
                </View>
                <View style = {styles.data}>
                    <Text style = {styles.dataTextHead}>Country</Text>
                    <Text style = {styles.dataTextContent}>USA</Text>
                </View>
                <View style = {styles.data}>
                <Text style = {styles.dataTextHead}>Length</Text>
                <Text style = {styles.dataTextContent}>112 min</Text>
                </View>
            </View>

        </View>

        <View style={styles.aboutContainer}>

            <View>
                <Text style={styles.aboutHeading}>About Movie</Text>
            </View> 
            <View>
                <Text style = {styles.aboutText}>When Hiccup discovers Toothless isn't the ony night fury, he must 
                    seek the "The Hidden World", a secret Dragon Utopia before a hired tyrant named Grimmel finds it first
                </Text>
            </View>  
            <View>
                <Text style = {styles.screenshotHeading}>Screenshots</Text>
            </View> 

        </View>

        <View>

        <View style = {styles.screenshot}>
           <View style = {styles.screenshotImg}/>
           <View style = {styles.screenshotImg}/>
        </View>

        <View style = {styles.ticketButton}>
            <Button title = 'Buy Ticket' />
        </View>

        </View>

        </ScrollView>

        </>
    )
};

const styles  = StyleSheet.create({
    container:{
        alignItems:'center',
        backgroundColor:'#e9f1f7'
    },
    headingContainer:{
        height: 80,
        width:'100%',
        backgroundColor:'lightgrey',
        justifyContent:'center',
        alignItems:'center',
        marginTop:2,
        backgroundColor:'white'
        
        
    },
    img:{
        height:350,
        width:'60%',
        backgroundColor:'#596975', 
        marginTop:10,
        borderRadius:15
     
    },
    imgText:{
        height:80,
        width:'60%',
        justifyContent:'center',
        
        

    },
    text:{
        fontSize:14,
        textAlign:'center'
    },
    part:{
        marginBottom:20,
        
    },
    button:{
        flexDirection :'row',
    }, 
    buttonText:{
        margin:5,
        padding:10,
        backgroundColor: '#1F45FC',
        borderRadius:20,
        overflow: 'hidden',
        color:'white',
        fontWeight:'bold',
    },
    content:{
        marginTop:50,
        flexDirection:'row',
    },
    data:{
        margin:20,
    },
    dataTextHead:{
        color:'grey',
        textAlign:'center',
        fontSize:13,
        
    },
    dataTextContent:{
        textAlign:'center',
        fontSize:16,
    },
    aboutText:{
        textAlign:'left',
        
    },
    aboutContainer:{
        // marginHorizontal:15,
        backgroundColor:'#e9f1f7'
    },
    aboutHeading:{
        marginHorizontal:15,
        fontSize:15,
    },
    aboutText:{
        marginHorizontal:15,
        marginTop:15,
        color:'grey',
        fontSize:15,
    },
    screenshotHeading:{
        marginHorizontal:15,
        marginTop:15,
        fontSize:15,
    },
    screenshot:{

        flexDirection:'row',
        // marginHorizontal:20,
        marginVertical:15
    },
    screenshotImg:{
        height:100,
        width:'40%',
        backgroundColor: '#596975',
        marginHorizontal:15,
        borderRadius:10,
        marginBottom:4,
    },
    ticketButton:{
        marginHorizontal:20,
        width:'85%'
    }

    

})
export default Home;