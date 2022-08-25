import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const CartItem = () => {
  return (
    <View>
        <TouchableOpacity
            onPress={() => {}}
            style={{
                ...styles.container,
                backgroundColor: item.color
            }}
        >
            <View>
                <Text style={styles.title}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        borderRadius:6,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding:8,
        shadowColor:'black',
        shadowOpacity: 0.25,
        shadowOffset: {width:0,height:2},
        shadowRadius:6,
        elevation:3
    }
})

export default CartItem