import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'
import Fonts from '../../constants/font_styles'

const CustomButton = ({onPress, buttonText}) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{buttonText}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.secondaryColor,
        width: 320,
        padding: 15,
        marginVertical: 40,
        borderRadius: 10,
    },
    text: {
        color: Colors.mainTextColor,
        textAlign: 'center',
        fontFamily: Fonts.asapRegular
    }
})

export default CustomButton