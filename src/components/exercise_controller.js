import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'
import Fonts from '../../constants/font_styles'
import Icon from 'react-native-vector-icons/AntDesign'

const ExerciseController = () => {
    return (
        <View style={styles.bar}>
            <TouchableOpacity>
                <Icon
                    name={'infocirlceo'}
                    size={20}
                    color={Colors.secondaryTextColor}
                />
            </TouchableOpacity>
            <Text style={styles.exerciseName}>Hack squat</Text>
            <TouchableOpacity>
                <Icon
                    name={'calendar'}
                    size={20}
                    color={Colors.secondaryTextColor}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    bar: {
        backgroundColor: Colors.secondaryColorButWithMoreOpacity,
        marginTop: 20,
        padding: 8,
        paddingHorizontal: 12,
        marginBottom: 15,
        borderRadius: 12,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    exerciseName: {
        color: Colors.mainTextColor,
        fontFamily: Fonts.asapBold
    }
})

export default ExerciseController