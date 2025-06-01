import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../constants/colors'
import { LinearGradient } from 'expo-linear-gradient'
import BackButton from '../components/back_button'
import ConfirmButton from '../components/confirm_button'
import Icon from 'react-native-vector-icons/AntDesign'
import Fonts from '../../constants/font_styles'
import DefaultRoundSquareButton from '../components/default_round_square_button'
import CopyLastWorkout from '../components/copy_last_workout'
import MyRoutinesForm from '../components/my_routines_form'

const setConditionalView = (selectedBtn, selectedRoutine, setSelectedRoutine, routines) => {
    switch (selectedBtn) {
        case 'COPY':
            return (
                <CopyLastWorkout />
            )
        case 'CHOOSE':
            return (
                <MyRoutinesForm
                    routines={routines}
                    selectedRoutine={selectedRoutine}
                    setSelectedRoutine={setSelectedRoutine} />
            )
        case 'SCRATCH':
            return (
                <Text style={styles.chooseMethodLabel}>{selectedBtn}</Text>
            )
    }
}

const NewWorkout = () => {

    const [selectedBtn, setSelectedBtn] = useState('SCRATCH');
    const [selectedRoutine, setSelectedRoutine] = useState(0);
    const routines = ["Push", "Pull", "Legs"];

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps={'always'}>
            <LinearGradient style={styles.container} colors={Colors.backgroundColor}>
                <View style={styles.root}>
                    <View style={styles.header}>
                        <BackButton />
                        <Text style={styles.headerLabel}>New workout</Text>
                        <ConfirmButton
                            selectedBtn={selectedBtn}
                            selectedRoutine={selectedRoutine}
                        />
                    </View>
                    <Text style={styles.chooseMethodLabel}>Choose a method</Text>
                    <View style={styles.methods}>
                        <DefaultRoundSquareButton
                            id='COPY'
                            text='Copy last workout'
                            subtext='No data found.' // o subtext aqui vão ser dados da bd
                            selectedBtn={selectedBtn}
                            setSelectedBtn={setSelectedBtn}
                        />
                        <DefaultRoundSquareButton
                            id='CHOOSE'
                            text='Choose from My Routines'
                            subtext="I want to choose from the templates I've created"
                            selectedBtn={selectedBtn}
                            setSelectedBtn={setSelectedBtn}
                        />
                        <DefaultRoundSquareButton
                            id='SCRATCH'
                            text='Add as I go'
                            subtext='I wanna start from scratch.'
                            selectedBtn={selectedBtn}
                            setSelectedBtn={setSelectedBtn}
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