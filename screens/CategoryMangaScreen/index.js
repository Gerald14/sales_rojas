import { useEffect } from 'react'
import { FlatList } from 'react-native'
import MangaItem from '../../components/MangaItem'
//redux
import { useSelector, useDispatch } from 'react-redux'

//actions
import { selectManga, filteredManga } from '../../store/actions/manga.actions'

const CategoryMangaScreen = ({navigation}) => {

  const dispatch = useDispatch()
  const categoryMangas = useSelector(state => state.manga.filteredManga)
  const category = useSelector(state => state.category.selected)

    useEffect(() => {
      dispatch(filteredManga(category.id))
    }, [])

  const handleSelected = item => {
    dispatch(selectManga(item.id))
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
      data={categoryMangas}
      renderItem={renderItemManga}
      keyExtractor={item => item.id}
    />
  )
}

export default CategoryMangaScreen