import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Input from '../components/Input'

const AddPage = () => {

  const [isFocused,setIsFocus] = useState(false);
  const [inputSub,setInputSub] = useState([])
  return (
    <View style={styles.container}>
      <Input title='Judul' isSubtask={false} placeholder='Tambahkan judul rencana' onFocus={() => {console.log("focus")}}/>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Sub Task</Text>
        <View
        style={[styles.textContainer, {
          borderColor: isFocused ? "#ffc111": "#a0a0a0",}]}>
          <TextInput
          onFocus={() => {
            setIsFocus(true)
          }}
          onBlur={(value) => {
            setIsFocus(false)
          }}
          style={{fontSize:16}}
          placeholder="Tambahkan bagian rencana"/>
        </View>
    </View>
    </View>
  )
}

export default AddPage

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:10
  },
  inputContainer: {
    marginHorizontal:15,
    marginVertical:5
  },
  textContainer: {
    paddingHorizontal:10,
    height:40,
    borderBottomWidth: 2,
    justifyContent:"center"
  },
  title: {
    fontSize:18,
    fontWeight:"500",
    marginBottom:4
  }
})