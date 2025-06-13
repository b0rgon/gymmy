import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import Colors from '../../constants/colors'
import BackButton from '../components/buttons/back_button'
import Fonts from '../../constants/font_styles'
import Icon from 'react-native-vector-icons/FontAwesome6'
import RestTimer from '../components/timers/rest_timer'
import ExerciseController from '../components/page_components/exercise_controller'

const WorkoutLive = ({ route }) => {

    const navigation = useNavigation();

    const loadedRoutine = route.params?.routine || {};

    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [exercises, setExercises] = useState(loadedRoutine.exercises);
    const [changedExercises, setChangedExercises] = useState(new Set())

    useEffect(() => {
        let interval = null;

        if (isRunning) {
            interval = setInterval(() => {
                setSeconds(prev => prev + 1);
            }, 1000);
        }
        else {
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

    const updateSet = (exerciseId, setIndex, field, value) => {
        setExercises(prevExercises => {
            let updated = prevExercises.map(ex =>
                ex.id === exerciseId
                    ? {
                        ...ex,
                        sets: ex.sets.map((set, i) =>
                            i === setIndex ? { ...set, [field]: value } : set
                        )
                    }
                    : ex
            );

            // comparar com o original
            // 'loadedRoutine.exercises' mantem-se sempre igual, logo a comparação é feita aqui
            const updatedExercise = updated.find(e => e.id === exerciseId);
            const originalExercise = loadedRoutine.exercises.find(e => e.id === exerciseId);

            const noChanges = JSON.stringify(updatedExercise.sets) === JSON.stringify(originalExercise.sets);

            setChangedExercises(prev => {
                const next = new Set(prev);
                if (noChanges) {
                    next.delete(exerciseId);
                }
                else {
                    next.add(exerciseId);
                }
                return next;
            });

            return updated;
        });
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps={'always'}>
            <LinearGradient style={styles.container} colors={Colors.backgroundColor}>
                <View style={styles.root}>
                    <View style={styles.header}>
                        <BackButton />
                        <Text style={styles.title}>{loadedRoutine.name}</Text>
                        <Text style={styles.finish}
                            onPress={() => console.log('Finish workout: not implemented yet.')}>Finish
                        </Text>
                    </View>
                    <View style={styles.timersHeader}>
                        <View >
                            <Text style={styles.workoutDuration}>Workout duration:</Text>
                            <Text style={styles.timer}>{Timer(seconds)}</Text>
                            <View style={styles.buttonView}>
                                <TouchableOpacity onPress={handleTimer}>
                                    <Icon
                                        name={isRunning ? 'pause' : 'play'}
                                        size={40}
                                        color={Colors.secondaryTextColor}
                                        style={{textAlign: 'center'}}
                                    />
                                    <Text style={styles.buttonText}>{isRunning ? 'Pause' : 'GO!'}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.timerLabel}>Rest timer:</Text>
                            <RestTimer />
                        </View>
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                        <TouchableOpacity style={styles.addExerciseBtn}>
                            <Text style={styles.addExerciseBtnText}
                                onPress={() => console.log('Add exercise: not implemented yet.')}>Add exercise</Text>
                        </TouchableOpacity>
                    </View>
                    {exercises?.map((exercise) => (
                        <ExerciseController
                            key={exercise.id}
                            exercise={exercise}
                            updateSet={updateSet}
                            hasChanges={changedExercises.has(exercise.id)}
                        />
                    ))}

                </View>
            </LinearGradient>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollContent: {
        flexGrow: 1
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom: 30
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
        color: Colors.mainTextColor,
        textAlign: 'center'
    },
    timer: {
        marginTop: 6,
        fontFamily: Fonts.asapBold,
        fontSize: 36,
        color: Colors.secondaryTextColor,
    },
    buttonView: {
        alignItems: 'center',
        marginTop: 10
    },
    buttonText: {
        color: Colors.mainTextColor,
        fontSize: 14,
        fontFamily: Fonts.asapRegular,
        textAlign: 'center'
    },
    addExerciseBtn: {
        backgroundColor: Colors.secondaryColor,
        width: 120,
        padding: 6,
        marginTop: 14,
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