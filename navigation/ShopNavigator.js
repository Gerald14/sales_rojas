import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoryScreen from '../screens/CategoryScreen';
import ItemDetailScreen from '../screens/ItemDetailScreen';
import ItemListScreen from '../screens/ItemListScreen';
import { Button, View } from 'react-native';
import CategoryMangaScreen from '../screens/CategoryMangaScreen';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={CategoryScreen}  />
          <Stack.Screen name="Mangas" component={CategoryMangaScreen}  />
          <Stack.Screen name="Detail" component={ItemDetailScreen} />
        </Stack.Navigator>
        <Button
        onPress={() => ({})}
        title="Go home"
      />
    </NavigationContainer>
  )
}

export default ShopNavigator;