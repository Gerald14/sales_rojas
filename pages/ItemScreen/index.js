import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const ItemScreen = ({itemNumber, returnToList}) => {
  return (
    <View style={styles.container}>
        <Text>{`item ID: ${itemNumber}`}</Text>
        <Button title='Volver' onPress={returnToList}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop:25,
        padding:15
    }
})

export default ItemScreen