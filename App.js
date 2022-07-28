import { useState } from 'react';
import ItemListScreen from './screens/ItemListScreen';
import ItemDetailScreen from './screens/ItemDetailScreen';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';
import { SafeAreaView } from 'react-native';

export default function App() {
  const [loaded] = useFonts({
    PoppinsBold: require('./assets/fonts/Poppins-Bold.ttf'),
    PoppinsRegular: require('./assets/fonts/Poppins-Regular.ttf'),
    PoppinsLight: require('./assets/fonts/Poppins-Light.ttf')})
  const [itemNumber, setItemNumber] = useState(null)

  const handlerViewItem = (itemSelected) => {
    setItemNumber(itemSelected)
  }

  const returnToList = () => {
    setItemNumber(null)
  }

  if(!loaded) return <AppLoading/>

  return (
    <SafeAreaView>
      {itemNumber?
        <ItemDetailScreen itemNumber={itemNumber} returnToList={returnToList}/>:
        <ItemListScreen handlerViewItem={handlerViewItem}/>
      }
    </SafeAreaView>
  );
}
