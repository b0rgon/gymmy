
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'

import Colors from '../../constants/colors'
import Fonts from '../../constants/font_styles'
import Icon from 'react-native-vector-icons/FontAwesome6'

const RestTimer = () => {

    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval = null;

        if (isRunning) {
            interval = setInterval(() => {
                setSeconds(prev => prev + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);

    }, [isRunning]);

    const Timer = (totalSeconds) => {
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        return [
            minutes.toString().padStart(2, '0'),
            seconds.toString().padStart(2, '0'),
        ].join(':');
    }

    const handleTimer = () => {
        setIsRunning(prev => !prev);
    };

    const stopTimer = () => {
        setIsRunning(false);
        setSeconds(0);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.timer}>{Timer(seconds)}</Text>
            <View style={styles.buttons}>
                <TouchableOpacity onPress={stopTimer}>
                    <Icon
                        name={'circle-stop'}
                        size={35}
                        color={Colors.secondaryColor}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleTimer}>
                    <Icon
                        name={isRunning ? 'circle-pause' : 'circle-play'}
                        size={35}
                        color={Colors.secondaryColor}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: Colors.secondaryColor,
        borderWidth: 1,
        borderRadius: 15,
        marginTop: 10,
        paddingBottom: 12,
        width: 140
    },
    timer: {
        fontSize: 38,
        textAlign: 'center',
        color: Colors.secondaryColor,
        fontFamily: Fonts.quicksandBold
    },
    buttons: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    }
})

export default RestTimer