import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AddItem from './components/AddItem';
import List from './components/List';
import ModalItem from './components/ModalItem';



export default function App() {

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
    <View style={styles.screen}>
      <ModalItem modalVisible={modalVisible} itemSelected={itemSelected} onHandleDeleteItem={onHandleDeleteItem}/> 
      <AddItem textItem={textItem} onHandleChangeItem={onHandleChangeItem} addItem={addItem} />
      <View>
        <List itemList={itemList} onHandleModal={onHandleModal}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
   padding:30
  }
});
