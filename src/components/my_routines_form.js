import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'
import Fonts from '../../constants/font_styles'
import DefaultRoundSquareButton from './default_round_square_button'

const printRoutines = (routines, selectedRoutine, setSelectedRoutine) => {
    return routines.map((routine, i) => (
        <DefaultRoundSquareButton
            id={i}
            key={i}
            text={routine}
            subtext={routine}
            selectedBtn={selectedRoutine}
            setSelectedBtn={setSelectedRoutine}
        />
    ));
}

const MyRoutinesForm = ({ routines, selectedRoutine, setSelectedRoutine }) => {
    return (
        <View style={{ marginTop: 40 }}>
            <Text style={styles.label}>My routines:</Text>
            <View style={styles.routines}>
                {printRoutines(routines, selectedRoutine, setSelectedRoutine)}
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