import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const ListItem = ({onHandleModal, item,handlerViewItem}) => {
  return (
    <TouchableOpacity onPress={() => handlerViewItem(item.id)}>
        <View>
            <Text style={styles.item}>{item.value}</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    item:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        borderColor:'black',
        borderWidth:1,
        padding:6,
        marginTop:10
    }
})

export default ListItem