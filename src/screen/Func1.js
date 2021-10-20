import React ,{useState} from 'react'
import { View, Text, Button } from 'react-native'

import Func2 from './Func2'

const Func1 = () => {

    const [state, setstate] = useState(0)
    const [text, setText] = useState('hello')
    const [num, setNum] = useState(1)

    const changeText = () => {
        setText('hii')
    }

    const changeNum = (val) => {
        setNum(val)
    }

    const aar = [
        {
            id:1,
            name:'swati'
        },
        {
            id:2,
            name:'Vishnu'
        },
        {
            id:3,
            name:'Krishna'
        },
        {
            id:4,
            name:'Radha'
        },
        {
            id:5,
            name:'Laxmi'
        },
    ]


    return (
        <View>
            <Text>Functional Component</Text>
            <Func2 title='Starting of Functional Component' array={aar}/>
            

            <Text>How to use state in Functional Component</Text>
            <Text>Initial state value is 0</Text>
            <Text>After clicking on button its value is {state}</Text>
            <Button title='Click me' onPress={() => setstate(123)} />

            <Text>Now how to change state value using function</Text>
            <Text>{text}</Text>
            <Button title='click to change above text'  onPress={changeText}/>

            <Text>Now in this we are changeing value</Text>
            <Text>{num}</Text>
             <Button title='Press me' onPress={() => changeNum(123456789)} />  

            

           
        </View>
    )
}
export default Func1;