import { View, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import CartItem from '../../components/CartIem'

const CartScreen = () => {
  const items = useSelector(state => state.cart.items)

  const renderItem = item => {
    <CartItem item={item} />
  }
  return (
    <View>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default CartScreen