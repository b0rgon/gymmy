import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'
import Fonts from '../../constants/font_styles'

// 'Login', 'Continue' (signup) and 'Add exercise'

const DefaultButton = ({ onPress, buttonText }) => {
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
        marginBottom: 15,
        borderRadius: 10,
    },
    text: {
        color: Colors.mainTextColor,
        textAlign: 'center',
        fontFamily: Fonts.asapRegular
    }
})

export default DefaultButton