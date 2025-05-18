import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'
import Fonts from '../../constants/font_styles'
import { eachDayOfInterval, eachWeekOfInterval, subDays, addDays, format } from 'date-fns'

const dates = eachWeekOfInterval(
    {
        // retorna todas as semanas entre estas 2 datas - no caso, a semana atual.
        start: subDays(new Date(), 1),
        end: addDays(new Date(), 0)
    },
    {
        weekStartsOn: 1
    }
    // separa pelos dias desta semana
).reduce((acc, cur) => {
    const allDays = eachDayOfInterval({
        start: cur,
        end: addDays(cur, 6)
    });

    acc.push(allDays);

    return acc;
}, []);

const WeekDays = ({ selectedDay, setSelectedDay }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Your week:</Text>
            {dates.map((week, i) => {
                return (
                    <View key={i}>
                        <View style={styles.daysRow}>
                            {week.map((day, j) => {
                                let days = format(day, 'EEE');
                                let daysNo = day.getDate();

                                let anySelected = selectedDay?.toDateString() === day.toDateString();

                                return (
                                    <TouchableOpacity
                                        key={j}
                                        onPress={() => setSelectedDay(day)}>

                                        <View style={anySelected && styles.selectedDay}>
                                            <Text style={[styles.days, anySelected && styles.selectedDayText]}>
                                                {days}
                                            </Text>

                                            <Text style={[styles.daysNo, anySelected && styles.selectedDayText]}>
                                                {daysNo}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    </View>
                )
            })}
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