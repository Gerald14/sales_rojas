import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Platform} from 'react-native';

import CategoryScreen from '../screens/CategoryScreen';
import ItemDetailScreen from '../screens/ItemDetailScreen';
import CategoryMangaScreen from '../screens/CategoryMangaScreen';
import COLORS from '../constants/colors';


const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerStyle:{
            backgroundColor: Platform.OS === 'android' ? COLORS.primary: COLORS.accent
          },
          headerTintColor: Platform.OS === 'android' ? 'white': COLORS.primary,
          headerTitleStyle:{
            fontWeight: 'bold'
          }
        }}>
          <Stack.Screen name="Home" component={CategoryScreen} options={{title:'MangaStore'}}  /> 
          <Stack.Screen name="Products" component={CategoryMangaScreen} options={({route})=>({title:route.params.name})}  />
          <Stack.Screen name="Detail" component={ItemDetailScreen} options={({route})=>({title:route.params.manga.name})} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ShopNavigator;