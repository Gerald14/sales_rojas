import React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import Input from '../Input'

const AddItem = ({value,onChange,onAddItem }) => {
  return (
    <View style={styles.inputContainer}>
        <Input 
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
        alignItems:'center',
        shadowColor: "#000",
        padding:8,
        backgroundColor:'white',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        
        elevation: 9,
    }
})

export default AddItem