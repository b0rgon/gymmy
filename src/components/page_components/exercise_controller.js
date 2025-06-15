import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../../constants/colors'
import Fonts from '../../../constants/font_styles'
import Icon from 'react-native-vector-icons/AntDesign'
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens'
import SetController from './set_controller'
import { Asap_400Regular } from '@expo-google-fonts/asap'

const ExerciseController = ({ exercise, updateSet, hasChanges }) => {
    return (
        <View>
            <View style={styles.bar}>
                <TouchableOpacity style={styles.iconsPosition}>
                    <Icon
                        name={'infocirlceo'}
                        size={14}
                        color={Colors.secondaryTextColor}
                    />
                </TouchableOpacity>
                <Text style={styles.exerciseName}>{exercise.name}</Text>
                <TouchableOpacity style={styles.iconsPosition}>
                    <Icon
                        name={'calendar'}
                        size={20}
                        color={Colors.secondaryTextColor}
                    />
                </TouchableOpacity>
            </View>
            {exercise.sets.map((set, setIndex) => (
                <SetController
                    key={setIndex}
                    setData={set}
                    onUpdate={(field, value) => updateSet(exercise.id, setIndex, field, value)}
                />
            ))}
            <AddOrSaveExercise
                updating={hasChanges} />
        </View>
    )
}

const AddOrSaveExercise = ({ updating }) => {
    return (
        <View style={styles.exerciseAddDel}>
            <TouchableOpacity >
                <Icon name='pluscircle' size={30} color={Colors.secondaryColor} />
            </TouchableOpacity>
            {updating && (
                <TouchableOpacity style={styles.labelArea}>
                    <Text style={styles.labelSave}>Save changes</Text>
                </TouchableOpacity>
            )}
        </View>
    )
}


const styles = StyleSheet.create({
    bar: {
        backgroundColor: Colors.secondaryColorButWithMoreOpacity,
        marginTop: 10,
        padding: 8,
        paddingHorizontal: 12,
        borderRadius: 12,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    exerciseName: {
        color: Colors.secondaryTextColor,
        fontFamily: Fonts.asapBold
    },
    iconsPosition: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    exerciseAddDel: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginTop: 8,
        marginBottom: 14
    },
    labelArea: {
        position: 'absolute',
        right: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    labelSave: {
        fontFamily: Fonts.quicksandBold,
        fontSize: 12,
        color: Colors.saveBtnColor,
    }
})


export default ExerciseController