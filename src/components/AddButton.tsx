import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type AddButtonProps = {
  handlePress: () => void
}

export default function AddButton({handlePress} : AddButtonProps) {
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Text style={{fontSize:35,fontWeight:300}}>+</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width:60,
    height:60,
    backgroundColor:"#fff888",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:30,
    bottom:40,
    right:30,
    elevation:3
  }
})