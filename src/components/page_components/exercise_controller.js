import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../../constants/colors'
import Fonts from '../../../constants/font_styles'
import Icon from 'react-native-vector-icons/AntDesign'
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens'
import SetController from './set_controller'
import { Asap_400Regular } from '@expo-google-fonts/asap'

const ExerciseController = ({ exerciseCount, setsCount, weightIncrement, setWeightIncrement, repIncrement, setRepIncrement, isPr, setIsPr }) => {
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
                <Text style={styles.exerciseName}>Hack squat</Text>
                <TouchableOpacity style={styles.iconsPosition}>
                    <Icon
                        name={'calendar'}
                        size={20}
                        color={Colors.secondaryTextColor}
                    />
                </TouchableOpacity>
            </View>
            <SetController weightIncrement={weightIncrement}
                setWeightIncrement={setWeightIncrement}
                repIncrement={repIncrement}
                setRepIncrement={setRepIncrement}
                isPr={isPr}
                setIsPr={setIsPr}
            />
            <ExerciseAddDel />
        </View>
    )
}

const ExerciseAddDel = () => {
    return (
        <View style={styles.exerciseAddDel}>
            <TouchableOpacity >
                <Icon name='pluscircle' size={30} color={Colors.secondaryColor} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton}>
                <Text style={styles.labelDelete}>Delete exercise</Text>
            </TouchableOpacity>
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
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    labelDelete: {
        color: Colors.secondaryColor,
        fontFamily: Fonts.asapRegular,
        fontSize: 12,
    },
    deleteButton: {
        position: 'absolute',
        right: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
})


export default ExerciseController