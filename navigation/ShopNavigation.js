import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CategoryScreen from '../screens/CategoryScreen';
import ItemDetailScreen from '../screens/ItemDetailScreen';
import ItemListScreen from '../screens/ItemListScreen';

const Stack = createNativeStackNavigator();

const ShopNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={CategoryScreen}/>
            <Stack.Screen name="Items" component={ItemListScreen}/>
            <Stack.Screen name="Detail" component={ItemDetailScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ShopNavigation;