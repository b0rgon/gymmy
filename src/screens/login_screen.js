import { View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native'
import React from 'react'
import GymmyLogo from '../../assets/icons/gymmy_logo.png'
import Colors from '../../constants/colors'
import { LinearGradient } from 'expo-linear-gradient'

const LoginScreen = () => {
  const {height} = useWindowDimensions();
  return (
      <LinearGradient style = {styles.container} colors={Colors.backgroundColor}>
        <View style={styles.root}>
          <Image source={GymmyLogo} style={[styles.logo, {height: height * 0.3}]} resizeMode='contain'></Image>
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
  logo: {
    width: 180,
    maxWidth: 500,
    maxHeight: 200
  }
})

export default LoginScreen