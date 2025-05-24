import { TouchableOpacity, } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/AntDesign'
import Colors from '../../constants/colors'

const ConfirmButton = () => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => console.log('Confirm: not implemented yet.')}>
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
