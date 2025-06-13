import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../../constants/colors'
import Fonts, { fontsToLoad } from '../../../constants/font_styles'

const WorkoutInfo = ({ workout }) => {

    if (workout) {
        return (
            <View>
                <Text style={styles.title}>{workout.name}:</Text>
                {
                    workout.exercises.map((exercise) => (
                        <View key={exercise.id}>
                            <View style={{ flexDirection: 'row', paddingBottom: 4 }}>
                                <Text style={styles.list}>{exercise.name}:</Text>
                                <Text style={styles.sets}>{exercise.sets.length} set(s)</Text>
                            </View>
                        </View>
                    ))
                }
            </View>
        )
    }
    else {
        return (
            <View>
                <Text style={styles.label}>No data found</Text>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    title: {
        color: Colors.mainTextColor,
        fontFamily: Fonts.quicksandBold,
        marginBottom: 4,
        marginTop: 10,
        fontSize: 14
    },
    list: {
        color: Colors.mainTextColor,
        fontSize: 12,
        paddingTop: 4,
        paddingLeft: 8,
        fontFamily: Fonts.asapRegular
    },
    sets: {
        color: Colors.mainTextColor,
        fontSize: 12,
        paddingTop: 3,
        paddingLeft: 6,
        fontFamily: Fonts.quicksandRegular
    },
    label: {
        fontSize: 10,
        color: Colors.secondaryTextColor,
        fontFamily: Fonts.quicksandBold,
        paddingTop: 5,
        paddingLeft: 5
    }
})

export default WorkoutInfo