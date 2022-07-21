import { FlatList } from 'react-native'
import ListItem from './components/ListItem'

const List = ({itemList,onHandleModal,handlerViewItem}) => {
  return (
    <FlatList
        data = {itemList}
        renderItem = {data => <ListItem onHandleModal={onHandleModal} handlerViewItem={handlerViewItem} item={data.item}/>}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
    />
  )
}



export default List