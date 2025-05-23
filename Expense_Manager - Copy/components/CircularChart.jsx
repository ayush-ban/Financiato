import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import PieChart from 'react-native-pie-chart'
import Colors from '../utils/Colors';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function CircularChart() {

    const widthAndHeight=150;
    const [values,setValues]=useState([1]);
    // const [sliceColor,setSliceColor]=([Colors.RED]);
    // const values = [123, 321, 123, 789, 537];
    const sliceColor = [Colors.GRAY];

  return (
    <View style={styles.container}>
      <Text style={{
        fontSize:20,
        marginLeft:12
        
      }}>Cash Flow : <Text style={{fontWeight:'bold'}}>₹0</Text></Text>
      <View style={styles.subContainer}>
      <PieChart
            widthAndHeight={widthAndHeight}
            series={values}
            sliceColor={sliceColor}
            coverRadius={0.65}
            coverFill={'#FFF'}
          />
      <View style={{display:'flex', flexDirection:'row', gap:5, alignItems:'center'}}>
        <MaterialCommunityIcons 
        name="checkbox-blank-circle" 
        size={24} 
        color={Colors.GRAY} />
        <Text>NA</Text>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop:20,
    backgroundColor:Colors.WHITE,
    padding:20,
    borderRadius:25,
    elevation:10
  },
  subContainer:{
    marginTop:20,
    display:'flex',
    flexDirection:'row',
    gap:50
  }
})