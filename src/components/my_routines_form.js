import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'
import Fonts, { fontsToLoad } from '../../constants/font_styles'
import DefaultRoundSquareButton from './default_round_square_button'

const printRoutines = (routinesCount) => {
    var loop = [];

    for (let i = 0; i < routinesCount; i++) {
        loop.push(
            <DefaultRoundSquareButton key={i} text={i} />
        )
    }

    return (
        loop
    )
}

const MyRoutinesForm = ({ routinesCount }) => {
    return (
        <View style={{ marginTop: 40 }}>
            <Text style={styles.label}>My routines:</Text>
            <View style={styles.routines}>
                {printRoutines(routinesCount)}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    routines: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 25
    },
    label: {
        color: Colors.secondaryTextColor,
        fontFamily: Fonts.asapRegular,
        fontSize: 18
    },
})

export default MyRoutinesForm