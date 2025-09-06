import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Fonts from '../../../constants/font_styles'
import { Dropdown } from 'react-native-element-dropdown'; import Colors from '../../../constants/colors'

const CountrySelector = ({ countries, country, setCountry }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Country of birth:</Text>
            <Dropdown
                style={styles.dropdown}
                data={countries}
                labelField="label"
                valueField="value"
                placeholder='Select a country'
                value={country}
                placeholderStyle={styles.placeholder}
                selectedTextStyle={styles.selectedText}
                itemTextStyle={styles.countryList}
                onChange={e => {
                    setCountry(e.value);
                }}
            />
        </View>
    )
}

export default CountrySelector

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginLeft: 15,
        alignItems: 'center',
        paddingTop: 12,
    },
    label: {
        fontFamily: Fonts.quicksandRegular,
        fontSize: 12,
        color: Colors.mainTextColor,
    },
    dropdown: {
        marginLeft: 20,
        borderColor: Colors.secondaryColor,
        borderWidth: 1,
        borderRadius: 5,
        width: 120,
        padding: 5
    },
    placeholder: {
        color: Colors.secondaryTextColor,
        fontFamily: Fonts.asapRegular,
        fontSize: 12
    },
    selectedText: {
        color: Colors.secondaryTextColor,
        fontFamily: Fonts.asapBold,
        fontSize: 13
    },
    countryList: {
        color: Colors.secondaryColor,
        fontFamily: Fonts.asapRegular,
        fontSize: 14
    }
})