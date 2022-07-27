import React from 'react'
import { Button, Modal, StyleSheet, Text, useWindowDimensions, View } from 'react-native'

const ModalItem = ({visible,itemSelected,onDelete}) => {

  

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={visible}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modal}>
            <View style={styles.modalTitle}>
              <Text>Mi modal</Text>
            </View>
            <View style={styles.modalMessage}>
              <Text>Estas seguro que deseas borrar?</Text>
            </View>
            <View style={styles.modalMessage}>
              <Text style={styles.modalItem}>{itemSelected.value}</Text>
            </View>
            <View style={styles.modalButton}>
              <Button onPress={() => onDelete(itemSelected.id)} title="confirmar"></Button>
            </View>
          </View>
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    modalBackground:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(0,0,0,0.5)'
    },
    modal:{
        backgroundColor:'#fff',
        width:'80%',
        height:'40%',
        padding:10,
        alignItems:'center',
        justifyContent:'space-between'
    },
    modalTitle:{
        backgroundColor:'#ccc',
        color:'white',
        fontSize:18
    },
    modalMessage: {
        marginBottom: 10,
        justifyContent:'center',
        alignItems:'center'
    },
    modalButton:{
        marginTop:15
    },
    modalItem:{
        fontSize: 30
    }
})

export default ModalItem