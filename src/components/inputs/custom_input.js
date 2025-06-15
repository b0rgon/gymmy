import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../../constants/colors'
import Fonts from '../../../constants/font_styles'
import Icon from 'react-native-vector-icons/AntDesign'

const CustomInput = ({ value, setValue, placeholder, isPassword, iconName, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Icon name={iconName} size={18} color={Colors.mainTextColor} />
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        placeholderTextColor={Colors.secondaryTextColor}
        style={[styles.input, {flex:1}]}
        secureTextEntry={isPassword && !showPassword}
        onChange={onChange}
      />
      {isPassword && (
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Icon
            name={showPassword ? 'eye' : 'eyeo'}
            size={18}
            color={Colors.secondaryColor}
            style={{ marginLeft: 8 }}
          />
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.secondaryColor,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    width: 320,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    textAlignVertical: 'center',
    color: Colors.mainTextColor,
    fontFamily: Fonts.quicksandRegular,
    fontSize: 12,
    paddingHorizontal: 15,
  }
})

export default CustomInput