import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import Colors from '../../constants/colors'
import BackButton from '../components/back_button'
import Fonts from '../../constants/font_styles'
import Icon from 'react-native-vector-icons/FontAwesome6'
import RestTimer from '../components/rest_timer'
import ExerciseController from '../components/exercise_controller'

const WorkoutLive = ({ route }) => {

    const navigation = useNavigation();

    const { title } = route.params;

    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval = null;

        if (isRunning) {
            interval = setInterval(() => {
                setSeconds(prev => prev + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);

    }, [isRunning]);

    const Timer = (totalSeconds) => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        return [
            hours.toString().padStart(2, '0'),
            minutes.toString().padStart(2, '0'),
            seconds.toString().padStart(2, '0'),
        ].join(':');
    }

    const handleTimer = () => {
        setIsRunning(prev => !prev);
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps={'always'}>
            <LinearGradient style={styles.container} colors={Colors.backgroundColor}>
                <View style={styles.root}>
                    <View style={styles.header}>
                        <BackButton />
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.finish}
                            onPress={() => console.log('Finish workout: not implemented yet.')}>Finish
                        </Text>
                    </View>
                    <View style={styles.timersHeader}>
                        <View>
                            <Text style={styles.workoutDuration}>Workout duration:</Text>
                            <Text style={styles.timer}>{Timer(seconds)}</Text>
                        </View>
                        <View>
                            <Text style={styles.timerLabel}>Rest timer:</Text>
                            <RestTimer />
                        </View>
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                        <TouchableOpacity style={styles.addExerciseBtn}>
                            <Text style={styles.addExerciseBtnText}>Add exercise</Text>
                        </TouchableOpacity>
                    </View>
                    <ExerciseController />
                </View>




                <View style={styles.buttonView}>
                    <TouchableOpacity onPress={handleTimer}>
                        <Icon
                            name={isRunning ? 'circle-pause' : 'circle-play'}
                            size={60}
                            color={Colors.secondaryColor}
                            style={{ textAlign: 'center' }}
                        />
                        <Text style={styles.buttonText}>{isRunning ? 'Pause' : 'GO!'}</Text>
                    </TouchableOpacity>
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
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 330,
    },
    timersHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        color: Colors.mainTextColor,
        fontSize: 18,
        fontFamily: Fonts.quicksandBold,
    },
    finish: {
        color: Colors.secondaryColor,
        fontFamily: Fonts.quicksandBold,
        fontSize: 16,
    },
    workoutDuration: {
        marginTop: 25,
        fontFamily: Fonts.asapRegular,
        fontSize: 16,
        color: Colors.secondaryTextColor
    },
    timerLabel: {
        marginTop: 25,
        fontFamily: Fonts.asapRegular,
        fontSize: 16,
        color: Colors.secondaryTextColor,
        textAlign: 'center' // decidir center ou right
    },
    timer: {
        marginTop: 6,
        fontFamily: Fonts.asapBold,
        fontSize: 36,
        color: Colors.secondaryTextColor,
    },
    buttonView: {
        position: 'absolute',
        bottom: 25,
        left: 0,
        right: 0,
        alignItems: 'center'
    },
    buttonStart: {
        color: Colors.secondaryColor
    },
    buttonText: {
        color: Colors.secondaryColor,
        fontSize: 14,
        fontFamily: Fonts.asapRegular,
        textAlign: 'center'
    },
    addExerciseBtn: {
        backgroundColor: Colors.secondaryColor,
        width: 120,
        padding: 6,
        marginTop: 30,
        marginBottom: 15,
        borderRadius: 10,
    },
    addExerciseBtnText: {
        color: Colors.mainTextColor,
        textAlign: 'center',
        fontFamily: Fonts.asapRegular
    }
})

export default WorkoutLive