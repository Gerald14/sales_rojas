import React from 'react'
import { FlatList } from 'react-native'
import GridItem from '../../components/GridItem'
import { CATEGORIES } from '../../data/categories'

const CategoryScreen = ({navigation}) => {

  const handleSelectedCategory = item => {
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
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
      keyExtractor={item => item.id}
    />
  )
}

export default CategoryScreen