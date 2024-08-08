import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

type inputProps = {
  title: string,
  placeholder: string,
  onFocus: () => void,
  isSubtask: boolean
}

const Input = ({title, placeholder, isSubtask} : inputProps) => {

  const [subtasks,setSubTasks] = useState<any>([]);
  const [count,setCount] = useState(0);
  const [isFocused,setIsFocus] = useState(false);

  const handleAddSub = (text: any) => {
    setSubTasks([...subtasks, text]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={[styles.textContainer, {
    borderColor: isFocused ? "#ffc111": "#a0a0a0",}]}>
        <TextInput
        onFocus={() => {
          setIsFocus(true)
        }}
        onBlur={(value) => {
          setIsFocus(false)
          console.log(subtasks)
        }}
        onChangeText={(value) => { 
          console.log(subtasks)
          isSubtask ? 
          handleAddSub(value)
          : null}}
        style={{fontSize:16}}
        placeholder={placeholder}/>
      </View>
        {isSubtask && (
          <Text style={{marginHorizontal:10}}>
            {subtasks}
          </Text>
        )}
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  container: {
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