import React from 'react'
import { View, Text } from 'react-native'

const customFlatlist = (props) => {
    displayUserInfo = (rowData) => {
        const {item, index} = rowData
        return(
            <View>
                <Image source={{uri: `${item.avatar}`}} style={styles.userImage}/>
                <Text>{item.first_name}</Text>
                <Text>{}</Text>
            </View>
        )
    }
    
    return (
        <View>
            <Text></Text>
        </View>
    )
}
export default customFlatlist