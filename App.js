import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';



export default function App() {

  const [textItem, setTextItem] = useState("");
  const [itemList, setItemList] = useState([]);

  const handleChange = (text) => {
    setTextItem(text)
  }

  const Add = () => {
    setItemList(currentItems => [
      ...currentItems,
      {id:Math.random().toString(), value:textItem}
    ])
    setTextItem(" ")
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput 
        style={styles.input} 
        placeholder='Ingrese aqui'
        onChangeText={handleChange}
        value={textItem}/>
        <Button 
        title='Add' 
        onPress={Add}
        disabled={textItem.length == 0 || textItem.trim() == "" ? true:false}/>
      </View>
      <View>
        <FlatList
        data = {itemList}
        renderItem = {data =>(
          <TouchableOpacity key={data.item.id}>
            <View>
              <Text style={styles.item}>{data.item.value}</Text>
            </View>
          </TouchableOpacity>
          )}
        />
          
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
   padding:30
  },
  inputContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  input:{
    borderBottomColor:'black',
    borderBottomWidth:1,
    width:'80%'
  },
  item:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
    borderColor:'black',
    borderWidth:1,
    padding:6,
    marginTop:10
  }
});
