import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../../constants/colors'
import Fonts from '../../../constants/font_styles'
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import NewWorkout from '../../screens/new_workout'
import WorkoutInfo from './workout_info'

const TodaysWorkout = ({ todaysWorkout }) => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {todaysWorkout ? (
                <TouchableOpacity onPress={() => navigation.navigate('WorkoutLive', { routine: todaysWorkout })}>
                    <WorkoutInfo workout={todaysWorkout} />
                </TouchableOpacity>
            ) : (
                <View >
                    <Text style={styles.label}>No workouts recorded today. Tap the button to get started!</Text>
                    <View style={styles.btnArea} >
                        <TouchableOpacity onPress={() => navigation.navigate('NewWorkout')}>
                            <Icon name='pluscircle' size={35} style={styles.iconAdd} color={Colors.mainTextColor} />
                        </TouchableOpacity>
                    </View>
                </View>
            )
            }
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: Colors.secondaryColor,
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 10,
        marginVertical: 20,
        width: 320,
        paddingBottom: 10,
        backgroundColor: Colors.secondaryColorWithOpacity
    },
    label: {
        fontSize: 10,
        color: Colors.secondaryTextColor,
        fontFamily: Fonts.quicksandBold,
        paddingTop: 5,
        textAlign: 'center'
    },
    iconAdd: {
        color: Colors.secondaryColor
    },
    btnArea: {
        alignItems: 'center',
        paddingTop: 10,
    }
})

export default TodaysWorkout