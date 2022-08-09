import React from 'react'
import { FlatList } from 'react-native'
import GridItem from '../../components/GridItem'
import { useDispatch, useSelector } from 'react-redux'
import { selectCategory } from '../../store/actions/category.actions'

const CategoryScreen = ({navigation}) => {

  const categories = useSelector(state => state.category.categories)
  const dispatch = useDispatch(); 

  const handleSelectedCategory = item => {
    dispatch(selectCategory(item.id))
    navigation.navigate('Products', {
      categoryID: item.id,
      name: item.title
    })
  }

  const renderGridItem = ({item}) => (
    <GridItem item={item} onSelected={handleSelectedCategory}/>
  )

  return (
    <FlatList 
      data={categories}
      renderItem={renderGridItem}
      numColumns={2}
      keyExtractor={item => item.id}
    />
  )
}

export default CategoryScreen