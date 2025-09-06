import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../../constants/colors'
import Fonts from '../../../constants/font_styles'
import { eachDayOfInterval, subDays, format } from 'date-fns'

// últimos 7 dias, incluindo o atual
const dates = eachDayOfInterval(
    {
        start: subDays(new Date(), 6),
        end: new Date()
    },
    {
        weekStartsOn: 0
    }
)

const WeekDays = ({ selectedDay, setSelectedDay }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Your week:</Text>
            <View style={styles.daysRow}>
                {dates.map((day, i) => {
                    const dayString = format(day, 'EEE');
                    const dayNumber = day.getDate();
                    const isSelected = selectedDay?.toDateString() === day.toDateString();

                    return (
                        <TouchableOpacity key={i} onPress={() => setSelectedDay(day)}>
                            <View style={isSelected && styles.selectedDay}>
                                <Text style={[styles.days, isSelected && styles.selectedDayText]}>
                                    {dayString}
                                </Text>
                                <Text style={[styles.daysNo, isSelected && styles.selectedDayText]}>
                                    {dayNumber}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: Colors.secondaryColor,
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 10,
        marginVertical: 20,
        width: 320,
        paddingBottom: 10,
        backgroundColor: Colors.secondaryColorWithOpacity
    },
    label: {
        fontSize: 18,
        color: Colors.secondaryTextColor,
        fontFamily: Fonts.asapBold,
        paddingTop: 10,
        paddingBottom: 5,
    },
    daysRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    days: {
        fontSize: 16,
        color: Colors.secondaryTextColor,
        fontFamily: Fonts.asapRegular,
        padding: 6
    },
    daysNo: {
        fontSize: 14,
        color: Colors.secondaryTextColor,
        fontFamily: Fonts.asapRegular,
        textAlign: 'center',
        padding: 6
    },
    selectedDayText: {
        color: Colors.mainTextColor
    },
    selectedDay: {
        borderWidth: 1,
        borderColor: Colors.secondaryColor,
        backgroundColor: Colors.secondaryColor,
        borderRadius: 15
    },
})

export default WeekDays