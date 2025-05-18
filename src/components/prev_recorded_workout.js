import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'
import Fonts from '../../constants/font_styles'

const PrevRecordedWorkout = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>No data found</Text>
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
        paddingLeft: 5
    }
})

export default PrevRecordedWorkout