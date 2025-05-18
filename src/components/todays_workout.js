import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'
import Fonts from '../../constants/font_styles'
import Icon from 'react-native-vector-icons/AntDesign'

const TodaysWorkout = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>No workouts recorded today. Tap the button to get started!</Text>
            <TouchableOpacity style={styles.button}>
                <Icon name='pluscircle' size={35} style={styles.iconAdd} color={Colors.mainTextColor} />
            </TouchableOpacity>
        </View>
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
    button: {
        alignItems: 'center',
        paddingTop: 15
    }
})

export default TodaysWorkout