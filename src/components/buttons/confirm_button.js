import { TouchableOpacity, } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/AntDesign'
import Colors from '../../../constants/colors'

const ConfirmButton = ({ selectedBtn, selectedRoutine }) => {

    const navigation = useNavigation();

    function onContinueClick(selectedBtn, selectedRoutine) {
        if (selectedBtn == 'SCRATCH') {
            selectedRoutine = "";
        }

        navigation.navigate('WorkoutLive', { routine: selectedRoutine });
    }

    return (
        <TouchableOpacity onPress={() => onContinueClick(selectedBtn, selectedRoutine)}>
            <Icon
                name='check'
                size={40}
                color={Colors.secondaryColor}
                style={{ marginLeft: 8 }}
            />
        </TouchableOpacity>
    )
}

export default ConfirmButton
