import React from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'

const AddItem = ({textItem,onHandleChangeItem,addItem}) => {
  return (
    <View style={styles.inputContainer}>
        <TextInput 
        style={styles.input} 
        placeholder='Ingrese aqui'
        onChangeText={onHandleChangeItem}
        value={textItem}/>
        <Button 
        title='Add' 
        onPress={addItem}
        disabled={textItem.length == 0 || textItem.trim() == "" ? true:false}/>
    </View>
  )
}

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    input:{
        borderBottomColor:'black',
        borderBottomWidth:1,
        width:'80%'
    }
})

export default AddItem