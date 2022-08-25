import { View, FlatList, Text } from 'react-native'
import { useSelector } from 'react-redux'
import CartItem from '../../components/CartIem'

const CartScreen = () => {
  const items = useSelector(state => state.cart.items)
  const total = useSelector(state => state.cart.total)
  const renderItem = ({item}) => (
    <CartItem item={item} />
  )
  return (
    <View>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Text>Total: ${total}</Text>
    </View>
  )
}

export default CartScreen