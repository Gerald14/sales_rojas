import { useState } from 'react';
import { Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import AddItem from '../../components/AddItem';
import List from '../../components/List';
import ModalItem from '../../components/ModalItem';

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
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <ModalItem visible={modalVisible} itemSelected={itemSelected} onDelete={onHandleDeleteItem}/> 
        <Text>Lista de Productos</Text>
        <AddItem value={textItem} onChange ={onHandleChangeItem} onAddItem ={addItem} />
        <List itemList={itemList} onHandleModal={onHandleModal} handlerViewItem={handlerViewItem}/>
      </View>
    </TouchableWithoutFeedback>
    
  );
}

const styles = StyleSheet.create({
  screen: {
   padding:30
  }
});

export default ItemListScreen