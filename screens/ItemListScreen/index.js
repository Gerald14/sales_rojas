import { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import AddItem from '../../components/AddItem';
import List from '../../components/List';
import ModalItem from '../../components/ModalItem';
import Colors from '../../constants/colors'

const ItemListScreen = ({handlerViewItem}) => {

  const [textItem, setTextItem] = useState("");
  const [itemList, setItemList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const onHandleChangeItem = (text) => {
    setTextItem(text)
  }

  const onHandleDeleteItem = (id) => {
    setItemList(currentItems => currentItems.filter(item => item.id !== id));
    setItemSelected({});
    setModalVisible(!modalVisible)
  }

  const onHandleModal = id => {
    setItemSelected(itemList.filter(item => item.id === id)[0]);
    setModalVisible(!modalVisible)
  }
 
  const addItem = () => {
    setItemList(currentItems => [
      ...currentItems,
      {id:Math.random().toString(), value:textItem}
    ])
    setTextItem(" ")
  }

  return (
    <KeyboardAvoidingView
      behavior='padding'
      keyboardVerticalOffset={30}
    >
      
      <ScrollView>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.screen}>
            <ModalItem visible={modalVisible} itemSelected={itemSelected} onDelete={onHandleDeleteItem}/> 
            <Text style={styles.title}>Lista de Productos</Text>
            <AddItem value={textItem} onChange ={onHandleChangeItem} onAddItem ={addItem} />
            <List itemList={itemList} onHandleModal={onHandleModal} handlerViewItem={handlerViewItem}/>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
      
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
   padding:30
  },
  title:{
    textAlign:'center',
    fontSize:18,
    fontFamily:'PoppinsRegular',
    padding:10,
    color: Colors.primary
  }
});

export default ItemListScreen