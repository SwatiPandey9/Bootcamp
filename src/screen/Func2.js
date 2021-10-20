import React from 'react'
import { View, Text } from 'react-native'

export default function Func2(props) {
    console.log(props.title)
    console.log(props.array)
    
    const data = props.array
    console.log(data)

    return (
        <View>
            <Text>{props.title}</Text>
            <Text>
                Calling Data array from 'Another Functional Component'
                {
                    props.array.map((item, i) => (
                        <View key={i}>
                            <Text>{item.id}</Text>
                            <Text>{item.name}</Text>
                        </View>
                    ) 
                    
                    )
                }
            </Text>

        </View>
    )
}
