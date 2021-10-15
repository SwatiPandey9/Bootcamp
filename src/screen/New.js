import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native'

const New = () =>
{
    return(
        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
            <View>
                <Text style={{width:100, backgroundColor:'yellow'}}>
                    195 items
                </Text>
            </View>
        <View style={{flexDirection:'row', backgroundColor:'yellow'}}>
            <TouchableOpacity>
                <Text>
                    HELLO
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>
                    WORLD
                </Text>
            </TouchableOpacity>
        </View>
        </View>
        
    );
}
export default New;
