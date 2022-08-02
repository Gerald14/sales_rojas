import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const ItemDetailScreen = ({route}) => {

  const manga = route.params.manga;

  return (
    <View style={styles.container}>
        <Text>{manga.name}</Text>
        <Text>{manga.description}</Text>
        <Text>{manga.price}</Text>
        <Text>{manga.formato}</Text>
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