import {Platform} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import COLORS from '../constants/colors';
import CartScreen from '../screens/CartScreen';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator
        initialRouteName='Cart'
        screenOptions={{
            headerStyle:{
                backgroundColor: Platform.OS === 'android' ? COLORS.primary: ''
            },
            headerTintColor: Platform.OS === 'android' ? 'white': COLORS.primary,
            headerTitleStyle:{
                fontWeight:'bold'
            }
        }}
    >
        <Stack.Screen
            name= 'Cart'
            component={CartScreen}
            options={{title:'Carrito de compras'}}
        />
    </Stack.Navigator>
  )
}

export default CartNavigator