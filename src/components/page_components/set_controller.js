import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../../constants/colors'
import Fonts, { fontsToLoad } from '../../../constants/font_styles'
import Icon from 'react-native-vector-icons/AntDesign'
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons'
import DefaultButton from '../buttons/default_button'

const SetController = ({ setData, onUpdate }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [currentSetIndex, setCurrentSetIndex] = useState(null)
    const [noteText, setNoteText] = useState('')

    const handleWeightIncrement = (value) => {
        onUpdate('weight', Math.max(0, setData.weight + value));
    };

    const handleRepIncrement = (value) => {
        onUpdate('reps', Math.max(1, setData.reps + value));
    };

    const openNotesModal = (setIndex, currentNote) => {
        setCurrentSetIndex(setIndex);
        setNoteText(currentNote);
        setModalVisible(true);
    };

    const saveNote = () => {
        onUpdate('notes', noteText)
        setModalVisible(false);
    };

    const IconGroup = ({ isPr, setNotes, setId }) => {
        return (
            <View style={styles.iconArea}>
                <IconFontAwesome5
                    name={'trophy'}
                    size={16}
                    color={isPr ? 'goldenrod' : 'transparent'}
                />
                <TouchableOpacity style={{ paddingHorizontal: 8 }} onPress={() => openNotesModal(setId, setNotes)}>
                    <IconMaterialIcons
                        name={'notes'}
                        size={18}
                        color={setNotes ? 'khaki' : Colors.secondaryColor}
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
                <IconGroup
                    isPr={setData.isPr}
                    setNotes={setData.setNotes}
                    setId={setData.id}
                />
            </View>
            <View style={styles.separator}>
            </View>

            <Modal
                visible={modalVisible}
                animationType='fade'
                transparent={true}
                onRequestClose={() => setModalVisible(false)}>
                <View style={styles.modal}>
                    <View style={styles.dialog}>
                        <Text style={styles.dialogTitle}>Set notes</Text>
                        <TextInput
                            value={noteText}
                            onChangeText={setNoteText}
                            placeholder="Add or edit your notes"
                            multiline
                            style={styles.dialogInputText}
                        />
                        <View style={styles.buttonsView}>
                            <TouchableOpacity style={[styles.dialogButton, { backgroundColor: Colors.saveBtnColor }]}>
                                <Text style={styles.dialogBtnText}
                                    onPress={saveNote}>Save</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.dialogButton, { backgroundColor: 'brown' }]}>
                                <Text style={styles.dialogBtnText}
                                    onPress={() => setModalVisible(false)}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
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
    },
    modal: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dialog: {
        backgroundColor: 'gainsboro',
        padding: 20,
        width: '70%',
        outlineColor: Colors.secondaryColor,
        outlineWidth: 3,
        borderRadius: 10
    },
    dialogTitle: {
        fontFamily: Fonts.asapBold,
        paddingBottom: 10,
        fontSize: 16,

    },
    dialogInputText: {
        height: 100,
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        textAlignVertical: 'top',
        marginBottom: 10,
        fontFamily: Fonts.asapRegular,
        color: 'black',
        fontSize: 14
    },
    buttonsView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    dialogButton: {
        width: 100,
        padding: 6,
        borderRadius: 5,
    },
    dialogBtnText: {
        fontFamily: Fonts.asapRegular,
        color: 'gainsboro',
        textAlign: 'center'
    }
})

export default SetController