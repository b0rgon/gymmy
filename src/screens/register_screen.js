import { View, Text, Button, StyleSheet, useWindowDimensions, Platform } from 'react-native'
import React, { useState } from 'react'
import GymmyLogo from '../../assets/icons/gymmy_logo.png'
import Colors from '../../constants/colors'
import Fonts from '../../constants/font_styles'
import CustomInput from '../components/custom_input'
import CheckBox from 'expo-checkbox';
import DefaultButton from '../components/default_button'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import DateInput from '../components/date_input'

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [name, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // dob variables:
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <LinearGradient style={styles.container} colors={Colors.backgroundColor}>
      <View style={styles.root}>
        <Text style={[styles.mainText, { marginTop: 10 }, { marginBottom: 60 }]}>CREATE A NEW ACCOUNT</Text>
        <View >
          <CustomInput
            placeholder={'Enter your email'}
            value={email}
            setValue={setEmail}
            iconName='mail' />
          <CustomInput
            placeholder={'Enter your name'}
            value={name}
            setValue={setUsername}
            iconName='user' />
          <CustomInput
            placeholder={'Enter your password'}
            value={password}
            setValue={setPassword}
            isPassword={true}
            iconName='lock' />
          <View style={styles.dateOfBirth}>
            <Text style={[styles.secondaryText, { marginRight: 20 }, { fontSize: 12 }, { marginLeft: 15 }]} >Date of birth:</Text>
            <DateInput />
          </View>
        </View>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  root: {
    alignItems: 'center',
    padding: 70,
  },
  dateOfBirth: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainText: {
    paddingTop: 60,
    color: Colors.mainTextColor,
    fontSize: 18,
    fontFamily: Fonts.quicksandBold
  },
  inputs: {
    paddingTop: 60
  },
  secondaryText: {
    color: Colors.mainTextColor,
    fontSize: 16,
    fontFamily: Fonts.quicksandRegular
  },
  dobInput: {
    flexDirection: 'row',
    alignItems: 'center',
  }
}
)

export default RegisterScreen