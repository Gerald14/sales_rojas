import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const ItemDetailScreen = ({itemNumber, returnToList}) => {
  return (
    <View style={styles.container}>
        <Text>{`item ID: ${itemNumber}`}</Text>
        <Button style={styles.button} title='Volver' onPress={returnToList}/>
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