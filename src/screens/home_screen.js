import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import GymmyLogo from '../../assets/icons/gymmy_logo.png'
import Colors from '../../constants/colors'
import Fonts, { fontsToLoad } from '../../constants/font_styles'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import axios from 'axios'
import { Alert } from 'react-native'
import WeekDays from '../components/page_components/week_days'
import TodaysWorkout from '../components/page_components/todays_workout'
import WeeklySummary from '../components/page_components/weekly_summary'
import mockWorkouts from '../../mock_tests/mockWorkouts'
import { AuthContext } from '../context/auth_context'
import WorkoutInfo from '../components/page_components/workout_info'

const HomeScreen = () => {
  const [selectedDay, setSelectedDay] = useState(new Date()); // por defeito é a data de hoje.
  const dayString = selectedDay.toLocaleDateString('en-US', { weekday: 'long' })
  const loggedUser = useContext(AuthContext); // para ter acesso ao utilizador autenticado

  let todaysDate = selectedDay.toISOString().split('T')[0]

  // obter workout do dia selecionado + anteriores:

  const workoutBySelectedDay = mockWorkouts.find(w => w.date === todaysDate)
  // ordenar por ordem decrescente de data e guardar o index do mais recente
  const sortedWorkouts = [...mockWorkouts].sort((a, b) => new Date(b.date) - new Date(a.date))
  const selectedDayIndex = sortedWorkouts.findIndex(w => w.date === todaysDate)
  const previousWorkout = selectedDayIndex !== -1 && sortedWorkouts[selectedDayIndex + 1]

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps={'always'}>
      <LinearGradient style={styles.container} colors={Colors.backgroundColor}>
        <View style={styles.root}>
          <Text style={styles.welcomeText}>Welcome, {!(loggedUser.name) ? '(undefined)' : loggedUser.name}!</Text>
          <WeekDays selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
          <Text style={styles.generalLabel}>{selectedDay.getDate() != new Date().getDate() ? dayString : 'Today'}'s workout:</Text>
          <TodaysWorkout todaysWorkout={workoutBySelectedDay} />
          <Text style={styles.generalLabel}>Previously recorded workout:</Text>
          <View style={styles.prevWorkoutView}>
            <WorkoutInfo workout={previousWorkout} />
          </View>
          <View style={styles.seeMoreSummary}>
            <Text style={styles.generalLabel}>Weekly summary:</Text>
            <TouchableOpacity onPress={() => console.log('See more details: not implemented yet.')}>
              <Text style={styles.seeMoreLabel}>See more </Text>
            </TouchableOpacity>
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
  },
  prevWorkoutView: {
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginVertical: 20,
    width: 320,
    paddingBottom: 10,
    backgroundColor: Colors.secondaryColorWithOpacity
  }
})

export default HomeScreen