import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../../constants/colors'
import Fonts from '../../../constants/font_styles'
import { RadioButton } from 'react-native-paper'

const RadioButtonForm = ({ selectedValue, setSelectedValue }) => {
    const handleRadioBtnPress = (value) => {
        setSelectedValue(value);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>How long have you been in the gym for?</Text>
            <RadioButton.Group
                onValueChange={(value) => handleRadioBtnPress(value)}
                value={selectedValue} >
                <View style={styles.radioButtons}>
                    <RadioButton
                        value='N'
                        color={Colors.secondaryColor} />
                    <Text style={styles.radioBtnLabel}>0-2 years (Novice)</Text>
                </View>
                <View style={styles.radioButtons}>
                    <RadioButton
                        value='I'
                        color={Colors.secondaryColor} />
                    <Text style={styles.radioBtnLabel}>2-5 years (Intermediate)</Text>
                </View>
                <View style={styles.radioButtons}>
                    <RadioButton
                        value='A'
                        color={Colors.secondaryColor} />
                    <Text style={styles.radioBtnLabel}>5+ years (Advanced)</Text>
                </View>
            </RadioButton.Group>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: Colors.secondaryColor,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 20,
        width: 320,
        paddingBottom: 5,
        marginBottom: 5
    },
    label: {
        fontSize: 12,
        color: Colors.mainTextColor,
        fontFamily: Fonts.asapRegular,
        paddingTop: 10,
        paddingBottom: 5
    },
    radioButtons: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    radioBtnLabel: {
        fontSize: 12,
        color: Colors.secondaryTextColor,
        fontFamily: Fonts.asapRegular
    }
})

export default RadioButtonForm
