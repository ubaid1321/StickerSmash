import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header  from '../components/Header'
import SearchFilter from '../components/SearchFilter'
import CategoriesFilter from '../components/CategoriesFilter'
import RecipeCard from '../components/RecipeCard'
const RecipeListScreen = () => {
  return (
    <SafeAreaView style={{flex:1,marginHorizontal:16}}>
     <Header headerText={"Hi,Ubaid"} headerIcon={"bell-o"} />
     <SearchFilter icon="search" placeholder={"enter your favorite recipe "} />
    <View style={{marginTop:22}}>
        <Text style={{fontSize:22,fontWeight:"bold"}}>
         Categories
        </Text>
        {/* Categories List */}
        <CategoriesFilter/>
    </View>
    {/* recipe list filte */}
    <View style={{marginTop:22,flex:1}}>
        <Text style={{fontSize:22,fontWeight:"bold"}}>
         Popular Recipes
        </Text>
        <RecipeCard/>
    </View>
    </SafeAreaView>
  )
}

export default RecipeListScreen