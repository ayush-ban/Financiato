import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import Colors from './../../utils/Colors';

export default function CourseInfo({categoryData}) {

  // transaction calculation
  const[totalCost,setTotalCost]=useState();
  useEffect(()=>{
    categoryData&&calculateTotal();
  },[categoryData])
  const calculateTotal=()=>{
    let total=0;
    categoryData?.CategoryItems?.forEach(item=>{
      total=total+item.amount;
    });
    setTotalCost(total);
    console.log("Total", total)
  }  


  return (
    <View>
      <View style={styles.container}>
        <View style={{marginLeft:15}}>
          <Text style={styles.categoryName}>{categoryData?.name}</Text>
          <Text style={styles.categoryItemText}>{categoryData?.CategoryItems?.length} Transactions</Text>
        </View>
          <AntDesign name="delete" size={24} color="red" />
      </View>
      {/* progress bar */}
      <View style={styles.amountContainer}>
        <Text style={{fontSize:25, fontWeight:'bold'}}>Total {totalCost}</Text>
      </View>
      <View style={styles.progressBarMainContainer}>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop:12,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  categoryName:{
    fontSize:24,
    fontWeight:'bold'
  },
  categoryItemText:{
    fontSize:14
  },
  progressBarMainContainer:{
    width:'100%',
    height:18,
    backgroundColor:Colors.GRAY,
    borderRadius:99,
    marginTop:7
  },
  amountContainer:{
    marginTop:15,
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-end',
    right:5
  }
})