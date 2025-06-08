import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../../constants/colors'
import Fonts, { fontsToLoad } from '../../../constants/font_styles'

const CopyLastWorkout = () => {
    return (
        <View style={{ marginTop: 40 }}>
            <Text style={styles.label}>Previous workout:</Text>
            <View style={{ marginTop: 15 }}>
                <Text style={styles.title}>Lower Day B:</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.list}>{`\u2022`} Hack squat:</Text>
                    <Text style={styles.sets}>2 sets;</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.list}>{`\u2022`} Seated Leg Curl:</Text>
                    <Text style={styles.sets}>2 sets;</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.list}>{`\u2022`} Leg Extension:</Text>
                    <Text style={styles.sets}>3 sets;</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        color: Colors.secondaryTextColor,
        fontFamily: Fonts.asapRegular,
        fontSize: 18
    },
    title: {
        color: Colors.mainTextColor,
        fontFamily: Fonts.quicksandBold,
        marginBottom: 6,
        fontSize: 15
    },
    list: {
        color: Colors.mainTextColor,
        fontSize: 14,
        paddingTop: 4,
        fontFamily: Fonts.asapBold
    },
    sets: {
        color: Colors.mainTextColor,
        fontSize: 14,
        paddingTop: 4,
        paddingLeft: 6
    }
})

export default CopyLastWorkout