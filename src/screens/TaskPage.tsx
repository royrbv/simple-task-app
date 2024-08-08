import { ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import Task from '../components/Task'
import AddButton from '../components/AddButton'
import { useNavigation } from '@react-navigation/native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

export default function TaskPage() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      {/* <Text style={styles.judul}>  Daftar Task :</Text> */}
      <ScrollView>
        <View style={{height:30}}/>
        <Task percentage={20} text='Membuat Baju'/>
        <Task percentage={36} text='Menyala'/>
        <Task percentage={70} text='Setrika'/>
        <Task percentage={100} text='Jemur'/>
        <Task percentage={10} text='Kabari satpam, ada paket mau datang dan segera siap-siap patroli '/>
        <Task percentage={30} text='Kabari satpam, ada paket mau datang dan segera siap-siap patroli '/>
        <View style={{height:60}}/>
      </ScrollView>
      <AddButton handlePress={() => {navigation.navigate("AddPage")}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#e0e0e0",
    flex:1,
    paddingHorizontal:0,
  },
  judul: {
    fontSize:18,
    fontWeight:"bold",
    margin:10
  },
  containerTask: {
    paddingTop:17,
    borderRadius:22,
    backgroundColor:"#f9f9f9",
    marginBottom:7,
    elevation:1,
    marginHorizontal:10,
    overflow:"hidden"
  },
})