import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../constants/colors'
import { LinearGradient } from 'expo-linear-gradient'
import BackButton from '../components/buttons/back_button'
import ConfirmButton from '../components/buttons/confirm_button'
import Icon from 'react-native-vector-icons/AntDesign'
import Fonts from '../../constants/font_styles'
import DefaultRoundSquareButton from '../components/buttons/default_round_square_button'
import CopyLastWorkout from '../components/page_components/copy_last_workout'
import MyRoutinesForm from '../components/page_components/my_routines_form'
import { mockRoutines } from '../../mock_tests/mockRoutines'
import { mockLastWorkout } from '../../mock_tests/mockLastWorkout'

const NewWorkout = () => {

    const [selectedBtn, setSelectedBtn] = useState('SCRATCH');
    const [selectedRoutine, setSelectedRoutine] = useState(0);
    const routines = mockRoutines;
    const lastWorkout = mockLastWorkout;

    const setConditionalView = (selectedBtn, selectedRoutine, setSelectedRoutine, routines) => {
        switch (selectedBtn) {
            case 'COPY':
                return (
                    <CopyLastWorkout
                        lastWorkout={lastWorkout} />
                )
            case 'CHOOSE':
                return (
                    <MyRoutinesForm
                        routines={routines}
                        selectedRoutine={selectedRoutine}
                        setSelectedRoutine={setSelectedRoutine} />
                )
        }
    }

    const handleSelectedBtn = (btn) => {
        setSelectedBtn(btn)

        if (btn != 'CHOOSE') {
            setSelectedRoutine(0)
        }
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps={'always'}>
            <LinearGradient style={styles.container} colors={Colors.backgroundColor}>
                <View style={styles.root}>
                    <View style={styles.header}>
                        <BackButton />
                        <Text style={styles.headerLabel}>New workout</Text>
                        <ConfirmButton
                            selectedBtn={selectedBtn}
                            selectedRoutine={selectedRoutine === 0 ? lastWorkout : routines.find(r => r.id === selectedRoutine)}
                        />
                    </View>
                    <Text style={styles.chooseMethodLabel}>Choose a method</Text>
                    <View style={styles.methods}>
                        <DefaultRoundSquareButton
                            id='COPY'
                            text='Copy last workout'
                            subtext='No data found.' // o subtext aqui vão ser dados da bd
                            selectedBtn={selectedBtn}
                            setSelectedBtn={handleSelectedBtn}
                        />
                        <DefaultRoundSquareButton
                            id='CHOOSE'
                            text='Choose from My Routines'
                            subtext="I want to choose from the templates I've created"
                            selectedBtn={selectedBtn}
                            setSelectedBtn={handleSelectedBtn}
                        />
                        <DefaultRoundSquareButton
                            id='SCRATCH'
                            text='Add as I go'
                            subtext='I wanna start from scratch.'
                            selectedBtn={selectedBtn}
                            setSelectedBtn={handleSelectedBtn}
                        />
                    </View>
                    {setConditionalView(selectedBtn, selectedRoutine, setSelectedRoutine, routines)}
                </View>
            </LinearGradient>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    root: {
        padding: 70,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 330,
    },
    headerLabel: {
        color: Colors.mainTextColor,
        fontSize: 20,
        fontFamily: Fonts.quicksandBold,
    },
    chooseMethodLabel: {
        marginTop: 50,
        color: Colors.secondaryTextColor,
        fontFamily: Fonts.asapRegular,
        fontSize: 18
    },
    methods: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 25
    },
    previousWorkoutLabel: {
        color: Colors.secondaryTextColor,
        fontFamily: Fonts.asapRegular,
        fontSize: 18
    }
})

export default NewWorkout