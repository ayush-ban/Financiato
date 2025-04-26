import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { supabase } from '../utils/SupabaseConfig';
import Ionicons from '@expo/vector-icons/Ionicons';
import CourseInfo from '../components/CourseDetail/CourseInfo';

export default function CategoryDetails() {
  const {categoryId}=useLocalSearchParams();
  const[categoryData,setCategoryData]=useState([]);
  const router=useRouter();
  useEffect(()=>{
      console.log(categoryId)
      categoryId&&getCategoryDetail();
  },[categoryId]);

  const getCategoryDetail=async()=>{
    const {data,error}=await supabase.from('Category')
    .select('*,CategoryItems(*)')
    .eq('id',categoryId)
    setCategoryData(data[0]);
    // console.log("Cat:",data);
  }
  return (
    <View style={{padding:20,marginTop:18,left:-9}}>
    <TouchableOpacity onPress={()=>router.back()}>
      <Ionicons name="chevron-back" size={29} color="black" />
      <CourseInfo categoryData={categoryData} />
    </TouchableOpacity>
    </View>
  )
}