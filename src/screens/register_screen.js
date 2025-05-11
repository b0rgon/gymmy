import { View, Text, Button, StyleSheet, useWindowDimensions, Platform } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../constants/colors'
import Fonts from '../../constants/font_styles'
import CustomInput from '../components/custom_input'
import Icon from 'react-native-vector-icons/AntDesign'
import DefaultButton from '../components/default_button'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import DateInput from '../components/date_input'
import RadioButtonForm from '../components/radio_button_form'

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  // form validation
  const [emailVerify, setEmailVerify] = useState(false);
  const [nameVerify, setNameVerify] = useState(false);
  const [passwordVerify, setPasswordVerify] = useState(false);
  const [yearVerify, setYearVerify] = useState(false);

  // dob variables:
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  // gym experience years: 
  const [selectedValue, setSelectedValue] = useState('N');

  const onRegisterPress = () => {
    navigation.navigate('Login');
  }

  const onLoginPress = () => {
    navigation.navigate('Login');
  }

  const navigation = useNavigation();

  function handleEmail(e) {
    const emailInput = e.nativeEvent.text;
    setEmail(emailInput);
    setEmailVerify(false);

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(emailInput)) {
      setEmail(emailInput);
      setEmailVerify(true);
    }
  }

  function handleName(e) {
    const nameInput = e.nativeEvent.text;
    setName(nameInput);
    setNameVerify(false);

    if (nameInput.length > 1) {
      setNameVerify(true);
    }
  }

  function handlePassword(e) {
    const passwordInput = e.nativeEvent.text;
    setPassword(passwordInput);
    setPasswordVerify(false);

    if (passwordInput.length > 5) {
      setPasswordVerify(true);
    }
  }

  function handleYear(e) {
    // prevent user from entering future years
    let currYear = new Date().getFullYear();
    let yearInput = e.nativeEvent.text;
    setYear(yearInput);
    setYearVerify(false);

    if (yearInput <= currYear) {
      setYear(yearInput);
      setYearVerify(true);
    }
  }

  return (
    <LinearGradient style={styles.container} colors={Colors.backgroundColor}>
      <View style={styles.root}>
        <Text style={[styles.mainText, { marginTop: 10 }, { marginBottom: 60 }]}>CREATE A NEW ACCOUNT</Text>
        <View >
          <CustomInput
            placeholder={'Enter your email'}
            value={email}
            setValue={setEmail}
            iconName='mail'
            onChange={e => handleEmail(e)}
          />
          {email.length < 1 ? null : emailVerify ? (null) : (
            <Text style={styles.validationError}>Invalid email.</Text>)}
          <CustomInput
            placeholder={'Enter your name'}
            value={name}
            setValue={setName}
            iconName='user'
            onChange={e => handleName(e)}
          />
          {name.length < 1 ? null : nameVerify ? (null) : (
            <Text style={styles.validationError}>Name must have at least 1 character.</Text>)}
          <CustomInput
            placeholder={'Enter your password'}
            value={password}
            setValue={setPassword}
            isPassword={true}
            iconName='lock'
            onChange={e => handlePassword(e)} />
          {password.length < 1 ? null : passwordVerify ? (null) : (
            <Text style={styles.validationError}>Password must have at least 5 characters.</Text>)}
          <View style={styles.dateOfBirth}>
            <Text style={[styles.secondaryText, { marginRight: 20 }, { fontSize: 12 }, { marginLeft: 15 }]} >Date of birth:</Text>
            <DateInput
              day={day}
              setDay={setDay}
              month={month}
              setMonth={setMonth}
              year={year}
              setYear={setYear}
              onChange={e => handleYear(e)} />
            {year.length < 1 ? null : yearVerify ? (null) : (
              setYear(''))}
          </View>
          <RadioButtonForm selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
          <DefaultButton buttonText={'Continue'} onPress={onRegisterPress} />
          <View style={styles.signUpRedirection}>
            <Text style={[styles.goToLogin, { fontSize: 12 }]}>Already have an account?</Text>
            <Text style={[styles.goToLogin, { fontSize: 12 }, { marginLeft: 5 }, { color: Colors.secondaryColor }]}
              onPress={onLoginPress} >Sign In
            </Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  goToLogin: {
    color: Colors.secondaryTextColor,
    fontSize: 16,
    fontFamily: Fonts.asapRegular
  },
  signUpRedirection: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
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
  validationError: {
    fontSize: 10,
    color: Colors.deleteBtnColor,
    fontFamily: Fonts.asapRegular
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