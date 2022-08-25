import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const CartItem = ({item}) => {
  return (
    <TouchableOpacity>
        <View style={styles.cartItem}>
            <View>
                <Text style={styles.title}>{item.name}</Text>
            </View>
            <View>
                <Text style={styles.details}>{item.price}</Text>
                <Text style={styles.details}>{item.formato}</Text>
            </View>
        </View>
    </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    cartItem:{
        flex:1,
        margin:15,
        padding:10,
        borderRadius:3,
        backgroundColor:'#ccc',
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontsize:20,
    },
    details: {
        fontsize:18
    }
})

export default CartItem