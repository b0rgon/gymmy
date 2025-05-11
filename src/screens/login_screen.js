import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import GymmyLogo from '../../assets/icons/gymmy_logo.png'
import Colors from '../../constants/colors'
import Fonts from '../../constants/font_styles'
import CustomInput from '../components/custom_input'
import CheckBox from 'expo-checkbox';
import DefaultButton from '../components/default_button'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const onLoginPress = () => {

  }

  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  }

  return (
    <LinearGradient style={styles.container} colors={Colors.backgroundColor}>
      <View style={styles.root}>
        <Image source={GymmyLogo} style={[styles.logo, { height: height * 0.3 }]} resizeMode='contain'></Image>
        <Text style={[styles.mainText, { marginTop: 10 }]}>LOGIN TO YOUR ACCOUNT</Text>
        <Text style={[styles.secondaryText, { marginTop: 30, marginBottom: 60 }]}>Enter your login information</Text>
        <View  >
          <CustomInput
            placeholder={'Enter your email'}
            value={email}
            setValue={setEmail}
            iconName='mail' />
          <CustomInput
            placeholder={'Enter your password'}
            value={password}
            setValue={setPassword}
            isPassword={true}
            iconName='lock' />
          <View style={styles.chkBoxAndTextContainer}>
            <View style={styles.rememberMe}>
              <CheckBox
                style={{ width: 16, height: 16 }}
                value={rememberMe}
                onValueChange={setRememberMe}
                color={rememberMe ? Colors.secondaryColor : undefined} />
              <Text style={[styles.secondaryText, { fontSize: 12 }, { marginLeft: 8 }]} >Remember me</Text>
            </View>
            <Text style={[styles.secondaryText, , { fontSize: 12 }, { color: Colors.secondaryColor }]}
              onPress={() => console.log('Forgot password: not implemented yet.')}
            >Forgot my password
            </Text>
          </View>
        </View>
        <DefaultButton buttonText={'Login'} onPress={onLoginPress} />
        <View style={styles.signUpRedirection}>
          <Text style={[styles.secondaryText, { fontSize: 12 }]}>Don't have an account?</Text>
          <Text style={[styles.secondaryText, { fontSize: 12 }, { marginLeft: 5 }, { color: Colors.secondaryColor }]}
            onPress={onSignUpPress} >Sign Up
          </Text>
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
  signUpRedirection: {
    marginBottom: 5,
    flexDirection: 'row'
  },
  chkBoxAndTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
  },
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