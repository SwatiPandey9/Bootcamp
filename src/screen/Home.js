import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import Value from '../components/Value';

const Home = () =>{

    const [count, setCount] = useState(0)

    updateValue = () =>
    {
        return(
            setCount(count+1)
        )
    }

    return(
        <View>
            <Value countedValue ={count} />
            <Text style ={styles.text}>Click on below button</Text>
            <Button onPress={updateValue} title = 'Click' />  
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize:20,
    }
})

export default Home;

{/* <Text>{count}</Text> */}

// () => setCount(count+1)