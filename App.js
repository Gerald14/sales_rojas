import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';
import { SafeAreaView } from 'react-native';
import TabNavigator from './navigation/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [loaded] = useFonts({
    PoppinsBold: require('./assets/fonts/Poppins-Bold.ttf'),
    PoppinsRegular: require('./assets/fonts/Poppins-Regular.ttf'),
    PoppinsLight: require('./assets/fonts/Poppins-Light.ttf')})
  

  if(!loaded) return <AppLoading/>

  return (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  );
}
