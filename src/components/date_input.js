import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'
import Fonts from '../../constants/font_styles'
import Icon from 'react-native-vector-icons/AntDesign'

const DateInput = ({ day, setDay, month, setMonth, year, setYear, onChange }) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder='dd'
                placeholderTextColor={Colors.secondaryTextColor}
                style={styles.dateInput}
                keyboardType='number-pad'
                maxLength={2}
                value={day}
                onChangeText={setDay} />
            <Text style={styles.separator}>/</Text>
            <TextInput
                placeholder='mm'
                placeholderTextColor={Colors.secondaryTextColor}
                style={styles.dateInput}
                keyboardType='number-pad'
                maxLength={2}
                value={month}
                onChangeText={setMonth} />
            <Text style={styles.separator}>/</Text>
             <TextInput
                placeholder='yyyy'
                placeholderTextColor={Colors.secondaryTextColor}
                style={styles.dateInput}
                keyboardType='number-pad'
                maxLength={4}
                value={year}
                onChangeText={setYear} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: Colors.secondaryColor,
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 10,
        width: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    dateInput: {
        color: Colors.mainTextColor,
        fontFamily: Fonts.asapRegular,
        fontSize: 12,
        paddingTop: 6,
        paddingBottom: 6
    },
    separator: {
        fontSize: 12,
        color: Colors.mainTextColor
    }
})

export default DateInput