import { FlatList } from 'react-native'
import MangaItem from '../../components/MangaItem'
import { MANGAS } from '../../data/mangas'


const CategoryMangaScreen = ({navigation, route}) => {

  const mangas = MANGAS.filter(manga => manga.category === route.params.categoryID)

  const handleSelected = item => {
    navigation.navigate('Detail',{
      productID: item.id,
      manga:item,
    })
  }

  const renderItemManga = ({item}) => (
    <MangaItem item={item} onSelected={handleSelected}/>
  )
  return (
    <FlatList
      data={mangas}
      renderItem={renderItemManga}
      keyExtractor={item => item.id}
    />
  )
}

export default CategoryMangaScreen