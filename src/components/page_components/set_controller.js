import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../../constants/colors'
import Fonts, { fontsToLoad } from '../../../constants/font_styles'
import Icon from 'react-native-vector-icons/AntDesign'
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { id } from 'date-fns/locale'

const SetController = ({ setData, onUpdate }) => {

    const handleWeightIncrement = (value) => {
        onUpdate('weight', Math.max(0, setData.weight + value));
    };

    const handleRepIncrement = (value) => {
        onUpdate('reps', Math.max(1, setData.reps + value));
    };

    return (
        <View>
            <View style={styles.area}>
                <View style={styles.incrementerArea}>
                    <TouchableOpacity onPress={() => handleWeightIncrement(-2.5)}>
                        <Icon
                            name={'minus'}
                            size={16}
                            color={Colors.secondaryColor}
                        />
                    </TouchableOpacity>
                    <Text style={styles.incrementerValue}>{setData.weight} kg</Text>
                    <TouchableOpacity onPress={() => handleWeightIncrement(2.5)}>
                        <Icon
                            name={'plus'}
                            size={16}
                            color={Colors.secondaryColor}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.incrementerArea}>
                    <TouchableOpacity onPress={() => handleRepIncrement(-1)}>
                        <Icon
                            name={'minus'}
                            size={16}
                            color={Colors.secondaryColor}
                        />
                    </TouchableOpacity>
                    <Text style={styles.incrementerValue}>{setData.reps} reps</Text>
                    <TouchableOpacity onPress={() => handleRepIncrement(1)}>
                        <Icon
                            name={'plus'}
                            size={16}
                            color={Colors.secondaryColor}
                        />
                    </TouchableOpacity>
                </View>
                <IconGroup isPr={setData.isPr} />
            </View>
            <View style={styles.separator}>
            </View>
        </View>
    )
}

const IconGroup = ({ isPr }) => {
    return (
        <View style={styles.iconArea}>
            <IconFontAwesome5
                name={'trophy'}
                size={16}
                color={isPr ? 'goldenrod' : 'transparent'}
            />
            <TouchableOpacity style={{ paddingHorizontal: 8 }}>
                <IconMaterialIcons
                    name={'notes'}
                    size={18}
                    color={Colors.secondaryColor}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <IconFontAwesome5
                    name={'trash'}
                    size={18}
                    color={Colors.secondaryColor}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    area: {
        height: 45,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    separator: {
        borderWidth: 1,
        borderColor: Colors.secondaryColor,
    },
    incrementerArea: {
        flexDirection: 'row',
    },
    incrementerValue: {
        fontFamily: Fonts.asapRegular,
        fontSize: 14,
        paddingLeft: 6,
        paddingRight: 6,
        color: Colors.secondaryTextColor,
    },
    iconArea: {
        flexDirection: 'row',
    }
})

export default SetController