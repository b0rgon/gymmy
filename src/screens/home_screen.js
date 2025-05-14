import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, { useState } from 'react'
import GymmyLogo from '../../assets/icons/gymmy_logo.png'
import Colors from '../../constants/colors'
import Fonts from '../../constants/font_styles'
import CustomInput from '../components/custom_input'
import CheckBox from 'expo-checkbox';
import DefaultButton from '../components/default_button'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import axios from 'axios'
import { Alert } from 'react-native'
import WeekDays from '../components/week_days'


const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps={'always'}>
      <LinearGradient style={styles.container} colors={Colors.backgroundColor}>
        <View style={styles.root}>
          <Text style={styles.welcomeText}>Welcome, Alexandre!</Text>
          <WeekDays></WeekDays>
        </View>
      </LinearGradient>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  root: {
    padding: 70,
  },
   welcomeText: {
    paddingTop: 30,
    color: Colors.mainTextColor,
    fontSize: 20,
    fontFamily: Fonts.quicksandBold,
    width: 320
  },
})

export default HomeScreen