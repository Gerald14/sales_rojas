import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ListItem from './components/ListItem'

const List = ({itemList,onHandleModal}) => {
  return (
    <FlatList
        data = {itemList}
        renderItem = {data => <ListItem onHandleModal={onHandleModal} item={data.item}/>}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        />
  )
}



export default List