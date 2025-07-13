import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Fonts from '../../../constants/font_styles'
import Colors from '../../../constants/colors'
import { RadioButton } from 'react-native-paper'

const GenderForm = ({ gender, setGender }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Gender:</Text>
            <RadioButton.Group
                onValueChange={(val) => setGender(val)}
                value={gender}
            >
                <View style={styles.radioGroupRow}>
                    <View style={styles.radioButtons}>
                        <RadioButton
                            value='M'
                            color={Colors.secondaryColor}
                        />
                        <Text style={styles.radioBtnLabel}>Male</Text>
                    </View>
                    <View style={styles.radioButtons}>
                        <RadioButton
                            value='F'
                            color={Colors.secondaryColor}
                        />
                        <Text style={styles.radioBtnLabel}>Female</Text>
                    </View>
                </View>
            </RadioButton.Group>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginLeft: 15,
        alignItems: 'center',

    },
    label: {
        fontFamily: Fonts.quicksandRegular,
        fontSize: 12,
        color: Colors.mainTextColor,
    },
    radioButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15
    },
    radioBtnLabel: {
        color: Colors.secondaryTextColor,
        fontSize: 12,
        fontFamily: Fonts.asapRegular
    },
    radioGroupRow: {
        flexDirection: 'row', 
        alignItems: 'center', 
    },
})

export default GenderForm