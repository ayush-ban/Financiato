import { View, Text, TextInput, StyleSheet, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import Colors from '../utils/Colors'
import ColorPicker from '../components/ColorPicker'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';
import { supabase } from '../utils/SupabaseConfig';
import { client } from '../utils/KindeConfig';
import { useRouter } from 'expo-router';


export default function AddNewCategory() {
  // const [date,setDate] = useState(new Date());
  const [selectedIcon, setSelectedIcon]=useState('')
  const [selectedColor, setSelectedColor]=useState(Colors.PRIMARY);
  const [personName, setPersonName]=useState();
  const [dated, setDated]=useState();
  const [phoneNo, setPhoneNo]=useState();
  const [amount, setAmount]=useState();

  const router=useRouter();

  const onCreateCategory=async()=>{
    const user=await client.getUserDetails();  
        const {data, error} = await supabase.from('Category')
        .insert([{
          name: personName,
          amount: amount,
          date: dated,
          phone_no: phoneNo,
          color: selectedColor,
          icon: selectedIcon,
          created_by: user.email
        }]).select();
        console.log(data);
        if(data)
        {
          router.replace({
            pathname:'/category-detail',
            params:{
              categoryId:data[0].id
            }
          })
          ToastAndroid.show('Transaction added!', ToastAndroid.SHORT)
        }
  }
  return (
    <View style={{
      marginTop:20,
    }}>
      <View style={{alignItems:'center'}}>
        <TextInput
          style={[styles.iconInput, {backgroundColor:selectedColor}]}
          maxLength={2}
          onChangeText={(value)=>setSelectedIcon(value)}
        >{selectedIcon}</TextInput>
         <ColorPicker
         selectedColor={selectedColor}
         setSelectedColor={(color)=>setSelectedColor(color)}
         />
      </View>
      {/* Add transaction and the amount */}

      <View style={styles.inputView}>
        <Ionicons name="person" size={24} color={Colors.LIGHT_GRAY} />
        <TextInput placeholder='Person Name' 
        onChangeText={(v)=>setPersonName(v)}
        style={{
          width:'100%',
          fontSize:17
        }}/>
      </View>
      <View style={styles.inputView}>
        <MaterialIcons name="date-range" size={24} color={Colors.LIGHT_GRAY} />
        {/* Space for Date and time implementation */}
        <TextInput placeholder='Date YYYY-MM-DD'
        onChangeText={(v)=>setDated(v)}
        keyboardType=''
         style={{
          width:'100%',
          fontSize:17
        }}/>
      </View>
      <View style={styles.inputView}>
        <FontAwesome name="phone" size={24} color={Colors.LIGHT_GRAY} />
        <TextInput placeholder='Phone No.'
        onChangeText={(v)=>setPhoneNo(v)}
        keyboardType='numeric'        
         style={{
          width:'100%',
          fontSize:17,
          paddingHorizontal:4,
        }}/>
      </View>
      <View style={styles.inputView}>
        <FontAwesome name="rupee" size={24} color={Colors.LIGHT_GRAY} />
        <TextInput placeholder='Amount'
        onChangeText={(v)=>setAmount(v)}
        keyboardType='numeric'        
         style={{
          width:'100%',
          fontSize:17,
          paddingHorizontal:8,
        }}/>
      </View>

      <TouchableOpacity style={styles.button}
      disabled={!personName||!dated||!phoneNo}
      onPress={()=>onCreateCategory()}
      >
        <Text style={{color:Colors.LIGHT_GRAY, textAlign:'center', fontSize:18}}>Add</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  iconInput:{
    textAlign:'center',
    fontSize:30,
    borderRadius:99,
    padding:20,
    paddingHorizontal:20,
    color:Colors.WHITE,
  },
  inputView:{
    padding:14,
    flexDirection:'row',
    justifyContent:'flex-start',
    borderWidth:1,
    marginTop:20,
    gap:2,
    borderRadius:10,
    borderColor:Colors.LIGHT_GRAY,
    backgroundColor:Colors.WHITE,
    alignItems:'center',
  },
  button:{
    backgroundColor:Colors.PRIMARY,
    padding:18,
    borderRadius:99,
    marginTop:30,
    width:'50%',
    right:-105
  }
})