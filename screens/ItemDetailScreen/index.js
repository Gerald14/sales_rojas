import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useSelector,useDispatch } from 'react-redux'
//Actions
import { addItem } from '../../store/actions/cart.actions'

const ItemDetailScreen = () => {

  const dispatch= useDispatch()

  const manga = useSelector(state => state.manga.selected)

  const handleAddtoCart = () => dispatch(addItem(manga))


  return (
    <View style={styles.container}>
        <Text>{manga.name}</Text>
        <Text>{manga.description}</Text>
        <Text>{manga.price}</Text>
        <Text>{manga.formato}</Text>
        <Button title= 'Add to cart' onPress={handleAddtoCart} />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      marginTop:25,
      padding:15
    },
    button:{
      width:100
    }
})

export default ItemDetailScreen