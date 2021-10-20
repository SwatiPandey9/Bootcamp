import React from 'react';
import {Image, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './src/screen/Home';
import Category from './src/screen/Category';
import MyCart from './src/screen/Mycart';
import Wishlist from './src/screen/Wishlist';
import Profile from './src/screen/Profile';


const Tab = createBottomTabNavigator();

const App = () => {
  return (
    
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: '#888',
          // headerShown: false
        }}
        initialRouteName='Profile'
        >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: 'MEN CLOTHING',
            tabBarIcon: () => (
              <Image
                source={require('./src/assets/Home.png')}
                style={styles.tabImage}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Category"
          component={Category}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('./src/assets/Category.png')}
                style={styles.tabImage}
              />
            ),
          }}
        />
        <Tab.Screen
          name="MyCart"
          component={MyCart}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('./src/assets/Mycart.png')}
                style={styles.tabImage}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Wishlist"
          component={Wishlist}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('./src/assets/Wishlist.png')}
                style={styles.tabImage}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <Image
                source={require('./src/assets/profile.png')}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: focused ? '#fada5e' : '#748c94',
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
   
  );
};

const styles = StyleSheet.create({
  tabImage: {
    height: 25,
    width: 25,
  },
});

export default App;
