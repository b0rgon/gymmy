import { TouchableOpacity, } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/AntDesign'
import Colors from '../../constants/colors'

const BackButton = () => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
                name='arrowleft'
                size={40}
                color={Colors.secondaryColor}
                style={{ marginLeft: 8 }}
            />
        </TouchableOpacity>
    )
}

export default BackButton
