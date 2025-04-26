import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import dark_blue from './../../assets/images/dark_blue.png';
import Colors from '../../utils/Colors';
import {client} from '../../utils/KindeConfig';
import services from './../../utils/services';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function LoginScreen() {

  const router = useRouter();
  const handleSignIn = async () => {
    const token = await client.login();
    if (token) {
      // User was authenticated
      await services.storeData('login','true');
      router.replace('/')
    }
  };

  return (
    
    <SafeAreaView style={styles.container}>
      <Image source={dark_blue}
      style={styles.bgImage}
      />
      
      <Text style={styles.text}>Financiato</Text>
      <Text style={{
        marginTop:130,
        color:Colors.WHITE,
        fontSize:18
      }}>
      Your financial records, always at your fingertips
      </Text>
      <TouchableOpacity style={styles.button}
      onPress={handleSignIn}>
        <Text style={{fontWeight:'bold'}}>Login/Signup</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  bgImage:{
    width:413,
    height:882,
    marginTop:30,
    borderWidth:1,
    borderColor:Colors.BLACK,
    position:'absolute'
  },
  text:{
    position:'absolute',
    color:Colors.WHITE,
    fontSize:35,
    textAlign:'center',
    justifyContent: 'center', // Center the text vertically
    fontWeight:'bold'
  },
  container: {
    flex: 1,
    alignItems: 'center', // Center child elements vertically
    justifyContent: 'center', // Center child elements horizontally (if needed)
  },
  button: {
    backgroundColor:Colors.WHITE,
    padding:15,
    paddingHorizontal:150,
    borderRadius:95,
    marginTop:30
  } 
})