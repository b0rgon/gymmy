import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../../constants/colors'
import Fonts from '../../../constants/font_styles'

const DefaultRoundSquareButton = ({ id, text, subtext, selectedBtn, setSelectedBtn }) => {
    let isSelected = id === selectedBtn;

    return (
        <TouchableOpacity onPress={() => setSelectedBtn(id)}>
            <View style={[styles.container,
            isSelected && { backgroundColor: Colors.secondaryColorWithOpacity }
            ]}>
                <View style={styles.textArea}>
                    <Text style={styles.text}>{text}</Text>
                </View>
                <Text style={styles.subtext}>{subtext}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: Colors.secondaryColor,
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 10,
        width: 100,
        height: 130,
        paddingBottom: 10,
        paddingTop: 6,
    },
    textArea: {
        height: 35,
        justifyContent: 'center',
        marginBottom: 6
    },
    text: {
        color: Colors.mainTextColor,
        fontFamily: Fonts.quicksandBold,
        fontSize: 12
    },
    subtext: {
        color: Colors.mainTextColor,
        fontFamily: Fonts.quicksandRegular,
        fontSize: 12,
    }
})

export default DefaultRoundSquareButton