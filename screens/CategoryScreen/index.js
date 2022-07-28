import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const CategoryScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
        <Text>Categorias</Text>
        <Button title="Mangas" onPress={()=>{navigation.navigate('Mangas')}}/>
    </View>
  )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryScreen