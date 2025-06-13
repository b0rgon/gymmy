import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../../constants/colors'
import Fonts from '../../../constants/font_styles'
import DefaultRoundSquareButton from '../buttons/default_round_square_button'

const printRoutines = (routines, selectedRoutine, setSelectedRoutine) => {
    return routines.map((routine) => {

        let routineSummary = routine.exercises
            .map(ex => `${ex.name}: ${ex.sets.length} set(s)`)
            .join(';\n\n')

        return (
            <DefaultRoundSquareButton
                id={routine.id}
                key={routine.id}
                text={routine.name}
                subtext={routineSummary}
                selectedBtn={selectedRoutine}
                setSelectedBtn={setSelectedRoutine}
                horizontal={true}
            />
        );
    });
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
        marginTop: 20,
        alignItems: 'center'
    },
    label: {
        color: Colors.secondaryTextColor,
        fontFamily: Fonts.asapRegular,
        fontSize: 18,
    },
})

export default MyRoutinesForm