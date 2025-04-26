import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

export default function CategoryList({categoryList}) {

    const router=useRouter();
    const onCategoryClick =(category)=>{
      router.push({
        pathname:'/category-detail',
        params:{
          categoryId:category.id
        }
      })
    }
  return (
    <View style={{
      marginTop:8, left:2
    }}>
      <Text style={{
        fontWeight:'bold',fontSize:20
      }}>Recent Transactions</Text>
      <View>
        {categoryList.map((category,index)=>(
          <TouchableOpacity key={index}
          onPress={()=>onCategoryClick(category)}
          >
            <View>
              <Text style={styles.iconText}>{category.icon} <Text style={{fontSize:22,fontWeight:'bold'}}>{category.name}  <Text style={{fontSize:14, fontWeight:'400'}}>{category.phone_no}</Text></Text></Text>
            </View>
            <View style={{left:280}}>
              <View>
                <Text>{category?.CategoryItems?.length} Transactions</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  iconText:{
    fontSize:25,
    marginTop:10,
    backgroundColor:'#808080',
    padding:15,
    borderRadius:15
  }
})