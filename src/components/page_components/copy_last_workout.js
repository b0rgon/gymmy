import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../../constants/colors'
import Fonts, { fontsToLoad } from '../../../constants/font_styles'

const CopyLastWorkout = ({ lastWorkout }) => {
    return (
        <View style={{ marginTop: 40 }}>
            <Text style={styles.label}>Previous workout:</Text>
            <Text style={styles.title}>{lastWorkout.name}:</Text>
            {
                lastWorkout.exercises.map((exercise) => (
                    <View>
                        <View style={{ flexDirection: 'row', paddingBottom:4 }}>
                            <Text style={styles.list}>{exercise.name}:</Text>
                            <Text style={styles.sets}>{exercise.sets.length} set(s)</Text>
                        </View>
                    </View>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        color: Colors.secondaryTextColor,
        fontFamily: Fonts.asapRegular,
        fontSize: 18
    },
    title: {
        color: Colors.mainTextColor,
        fontFamily: Fonts.quicksandBold,
        marginBottom: 6,
        marginTop: 20,
        fontSize: 15
    },
    list: {
        color: Colors.mainTextColor,
        fontSize: 14,
        paddingTop: 4,
        paddingLeft: 10,
        fontFamily: Fonts.asapBold
    },
    sets: {
        color: Colors.mainTextColor,
        fontSize: 14,
        paddingTop: 3,
        paddingLeft: 6,
        fontFamily: Fonts.quicksandRegular
    }
})

export default CopyLastWorkout