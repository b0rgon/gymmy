import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/login_screen';
import RegisterScreen from '../screens/register_screen'
import HomeScreen from '../screens/home_screen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {/* <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="SignUp" component={RegisterScreen} /> */}
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation