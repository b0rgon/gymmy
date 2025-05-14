import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'
import Fonts from '../../constants/font_styles'
import { RadioButton } from 'react-native-paper'

const WeekDays = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Your week:</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: Colors.secondaryColor,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 20,
        marginVertical: 20,
        width: 320,
        paddingBottom: 5,
        marginBottom: 5,
        backgroundColor: Colors.secondaryColorWithOpacity
    },
    label: {
        fontSize: 16,
        color: Colors.mainTextColor,
        fontFamily: Fonts.asapRegular,
        paddingTop: 10,
        paddingBottom: 5,
    },
})

export default WeekDays