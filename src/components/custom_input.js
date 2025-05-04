import { View, Text, TextInput,StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'
import Fonts from '../../constants/font_styles'

const CustomInput = ({value, setValue, placeholder, isPassword}) => {
  return (
    <View style={styles.container}>
      <TextInput 
        value = {value} 
        onChangeText={setValue} 
        placeholder = {placeholder}
        placeholderTextColor = {Colors.mainTextColor}
        style={styles.input}
        secureTextEntry = {isPassword}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: '',
      borderColor: Colors.secondaryColor,
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 10,
      marginVertical: 10,
      width: 300
    },
    input: {
        textAlign: 'left',
        color: Colors.mainTextColor,
        fontFamily: Fonts.quicksandRegular
    }
})

export default CustomInput