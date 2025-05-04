import { View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native'
import React, {useState} from 'react'
import GymmyLogo from '../../assets/icons/gymmy_logo.png'
import Colors from '../../constants/colors'
import Fonts from '../../constants/font_styles'
import CustomInput from '../components/custom_input'

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();
  return (
  <View style={styles.root}>
    <Image source={GymmyLogo} style={[styles.logo, {height: height * 0.3}]} resizeMode='contain'></Image>
    <Text style={[styles.mainText, {marginTop:10}]}>LOGIN TO YOUR ACCOUNT</Text>
    <Text style={[styles.secondaryText, {marginTop:30, marginBottom: 60}]}>Enter your login information</Text>
    <View >
      <CustomInput placeholder={'Enter your email'} value={username} setValue={setUsername}/>
      <CustomInput placeholder={'Enter your password'} value={password} setValue={setPassword} isPassword={true}/>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 70,
  },
  logo: {
    width: 180,
    maxWidth: 500,
    maxHeight: 200
  },
  mainText: {
    color: Colors.mainTextColor,
    fontSize: 18,
    fontFamily: Fonts.quicksandBold
  },
  secondaryText: {
    color: Colors.secondaryTextColor,
    fontSize: 16,
    fontFamily: Fonts.asapRegular
  }
})

export default LoginScreen