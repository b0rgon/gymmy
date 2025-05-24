import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'
import { LinearGradient } from 'expo-linear-gradient'
import BackButton from '../components/back_button'
import ConfirmButton from '../components/confirm_button'
import Icon from 'react-native-vector-icons/AntDesign'
import Fonts from '../../constants/font_styles'

const NewWorkout = () => {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps={'always'}>
            <LinearGradient style={styles.container} colors={Colors.backgroundColor}>
                <View style={styles.root}>
                    <View style={styles.header}>
                        <BackButton />
                        <Text style={styles.headerLabel}>New workout</Text>
                        <ConfirmButton />
                    </View>
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
        alignItems: 'center',
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

})

export default NewWorkout