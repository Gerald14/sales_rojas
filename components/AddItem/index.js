import React from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'

const AddItem = ({value,onChange,onAddItem }) => {
  return (
    <View style={styles.inputContainer}>
        <TextInput 
        style={styles.input} 
        placeholder='Ingrese aqui'
        onChangeText={onChange}
        value={value}/>
        <Button 
        title='Add' 
        onPress={onAddItem}
        disabled={value.length == 0 || value.trim() == "" ? true:false}/>
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