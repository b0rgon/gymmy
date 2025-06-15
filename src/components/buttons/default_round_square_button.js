import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../../constants/colors'
import Fonts from '../../../constants/font_styles'

const DefaultRoundSquareButton = ({ id, text, subtext, selectedBtn, setSelectedBtn, horizontal }) => {
    let isSelected = id === selectedBtn;

    if (horizontal) {
        return (
            <TouchableOpacity style={{ paddingBottom: 15, width: '60%' }} onPress={() => setSelectedBtn(id)}>
                <View style={[styles.containerHorizontal,
                isSelected && { backgroundColor: Colors.secondaryColorWithOpacity }
                ]}>
                    <View style={styles.textArea}>
                        <Text style={styles.textHorizontal}>{text}</Text>
                    </View>
                    <Text style={styles.subtextHorizontal}>{subtext}</Text>
                </View>
            </TouchableOpacity >
        )
    }
    else {
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
            </TouchableOpacity >
        )
    }


}

const styles = StyleSheet.create({
    container: {
        borderColor: Colors.secondaryColor,
        borderWidth: 1,
        borderRadius: 15,
        width: 100,
        height: 120,
        paddingHorizontal: 10,
        paddingBottom: 10,
        paddingTop: 6,
    },
    containerHorizontal: {
        borderColor: Colors.secondaryColor,
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingBottom: 16,
    },
    textArea: {
        height: 35,
        justifyContent: 'center',
    },
    text: {
        color: Colors.mainTextColor,
        fontFamily: Fonts.quicksandBold,
        fontSize: 12
    },
    textHorizontal: {
        color: Colors.mainTextColor,
        fontFamily: Fonts.asapBold,
        fontSize: 15,
        textAlign: 'center'
    },
    subtext: {
        color: Colors.mainTextColor,
        fontFamily: Fonts.quicksandRegular,
        fontSize: 12,
    },
    subtextHorizontal: {
        color: Colors.mainTextColor,
        fontFamily: Fonts.quicksandRegular,
        fontSize: 12,
        textAlign: 'center'
    }
})

export default DefaultRoundSquareButton