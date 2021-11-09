import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {HomeScreen, Counter, AddNote, UpdateNote} from '../screen/index'
import {Colors, String} from '../utils/index'

const Stack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator();

const StackNav = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle:{
            backgroundColor:Colors.primaryColor
            },
            headerTintColor:Colors.primaryTextColor
        }}>
            <Stack.Screen  name='HomeScreen' component={HomeScreen} options={{title: String.headerTitle}}/>
            <Stack.Screen  name='Counter' component={Counter} options={{title: String.addNoteTitle}}/>
            <Stack.Screen  name='AddNote' component={AddNote} options={{title: String.addNoteTitle}}/>
            <Stack.Screen  name='UpdateNote' component={UpdateNote} options={{title: String.addNoteTitle}}/>
        </Stack.Navigator>  
    )
};

const Navigation = () => {
    return(
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{headerShown:false}}>
                <RootStack.Screen name='StackNav' component={StackNav} />
            </RootStack.Navigator>
        </NavigationContainer>
    )
};

export default Navigation;
