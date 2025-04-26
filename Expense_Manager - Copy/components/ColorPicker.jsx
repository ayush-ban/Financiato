import { View, Text } from 'react-native'
import React from 'react'
import Colors from '../utils/Colors'
import { TouchableOpacity } from 'react-native'

export default function ColorPicker({selectedColor,setSelectedColor}) {
  return (
    <View style={{
      flexDirection:'row',
      display:'flex',
      marginRight:-50
    }}>
      {Colors.COLOR_LIST.map((color,index)=>(
        <TouchableOpacity
        key={index} 
        style={[{
          height:30,
          width:30,
          backgroundColor:color,
          marginRight:50,
          marginTop:20,
          borderRadius:10
        },selectedColor==color&&{borderWidth:4}]}
        onPress={()=>setSelectedColor(color)}
        >
        </TouchableOpacity>
      ))}      
    </View>
  )
}