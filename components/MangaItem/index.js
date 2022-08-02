import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

const MangaItem = ({item, onSelected}) => {
  return (
    <TouchableOpacity
        onPress={() => onSelected(item)}
    >
        <View style={styles.mangaItem}>
            <Text style={styles.title}>{item.name}</Text>
        </View>
        <View>
            <Text style={styles.details}>{item.price}</Text>
            <Text style={styles.details}>{item.formato}</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    mangaItem:{
        padding: 20,
        margin:10,
        borderRadius:3,
        backgroundColor:'#ccc'
    },
    title:{
        fontsize: 20,
        fontFamily: 'openSansBold'
    },
    details: {
        fontsize:18
    }
})

export default MangaItem