import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { useContext, useState } from 'react'
import Colors from '../../constants/colors'
import Fonts from '../../constants/font_styles'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import WeekDays from '../components/page_components/week_days'
import TodaysWorkout from '../components/page_components/todays_workout'
import WeeklySummary from '../components/page_components/weekly_summary'
import mockWorkouts from '../../mock_tests/mockWorkouts'
import WorkoutInfo from '../components/page_components/workout_info'
import { AuthContext } from '../context/auth_context'

const HomeScreen = () => {
  const [selectedDay, setSelectedDay] = useState(new Date()); // por defeito é a data de hoje.
  const dayString = selectedDay.toLocaleDateString('en-US', { weekday: 'long' })
  const { user } = useContext(AuthContext);
  const userFirstName = user?.name.split(' ')[0] ?? 'undefined'

  let selectedDate = selectedDay.toISOString().split('T')[0]

  // obter workout do dia selecionado + anteriores:
  const workoutBySelectedDay = mockWorkouts.find(w => w.date === selectedDate)
  // ordenar por ordem decrescente de data e guardar o index do mais recente
  const sortedWorkouts = [...mockWorkouts].sort((a, b) => new Date(b.date) - new Date(a.date));

  var previousWorkout

  // se houver treino naquele dia, o treino anterior é o treino do índice atual + 1 
  // caso contrário, o treino anterior é o treino cuja data seja inferior à data atual
  if (workoutBySelectedDay) {
    let i = sortedWorkouts.findIndex(w => w.date === selectedDate)
    previousWorkout = sortedWorkouts[i + 1] || null
  }
  else {
    previousWorkout = sortedWorkouts.find(w => w.date < selectedDate) || null
  }

  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps={'always'}>
      <LinearGradient style={styles.container} colors={Colors.backgroundColor}>
        <View style={styles.root}>
          <Text style={styles.welcomeText}>Welcome, {userFirstName}!</Text>
          <WeekDays selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
          <Text style={styles.generalLabel}>{selectedDay.getDate() != new Date().getDate() ? dayString : 'Today'}'s workout:</Text>
          <TodaysWorkout todaysWorkout={workoutBySelectedDay} />
          <Text style={styles.generalLabel}>Previously recorded workout:</Text>
          <View style={styles.prevWorkoutView}>
            {previousWorkout ?
              (
                <TouchableOpacity onPress={() => navigation.navigate('WorkoutLive', { routine: previousWorkout })}>
                  <WorkoutInfo workout={previousWorkout}
                    existsPrevWorkout={true} />
                </TouchableOpacity>
              )
              :
              (
                <WorkoutInfo workout={previousWorkout} />
              )
            }
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
    fontSize: 20,
    fontFamily: Fonts.asapBold,
    color: Colors.mainTextColor,
    paddingTop: 30,
    paddingBottom: 10
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