import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, { useState } from 'react'
import GymmyLogo from '../../assets/icons/gymmy_logo.png'
import Colors from '../../constants/colors'
import Fonts, { fontsToLoad } from '../../constants/font_styles'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import axios from 'axios'
import { Alert } from 'react-native'
import WeekDays from '../components/week_days'
import TodaysWorkout from '../components/todays_workout'
import PrevRecordedWorkout from '../components/prev_recorded_workout'
import WeeklySummary from '../components/weekly_summary'

const HomeScreen = () => {
  const [selectedDay, setSelectedDay] = useState(new Date()); // por defeito é a data de hoje.
  const dayString = selectedDay.toLocaleDateString('en-US', {weekday: 'long'})

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps={'always'}>
      <LinearGradient style={styles.container} colors={Colors.backgroundColor}>
        <View style={styles.root}>
          <Text style={styles.welcomeText}>Welcome, Alexandre!</Text>
          <WeekDays selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
          <Text style={styles.generalLabel}>{selectedDay.getDate() != new Date().getDate() ? dayString : 'Today'}'s workout:</Text>
          <TodaysWorkout />
          <Text style={styles.generalLabel}>Previously recorded workout:</Text>
          <PrevRecordedWorkout />
          <View style={styles.seeMoreSummary}>
            <Text style={styles.generalLabel}>Weekly summary:</Text>
            <Text style={styles.seeMoreLabel}
              onPress={() => console.log('See more details: not implemented yet.')}>See more
            </Text>
          </View>
          <WeeklySummary />
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
  generalLabel: {
    paddingTop: 25,
    color: Colors.mainTextColor,
    fontSize: 18,
    fontFamily: Fonts.asapRegular,
  },
  seeMoreSummary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  seeMoreLabel: {
    color: Colors.secondaryColor,
    paddingTop: 25,
    fontFamily: Fonts.asapRegular
  }
})

export default HomeScreen