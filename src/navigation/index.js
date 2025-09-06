import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/login_screen';
import RegisterScreen from '../screens/register_screen'
import HomeScreen from '../screens/home_screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TrainingHistory from '../screens/training_history';
import Icon1 from 'react-native-vector-icons/Entypo'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import MyProfile from '../screens/profile_screen';
import MyRoutines from '../screens/my_routines';
import Colors from '../../constants/colors';
import NewWorkout from '../screens/new_workout';
import WorkoutLive from '../screens/workout_live';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="SignUp" component={RegisterScreen} />
                <Stack.Screen name="Home" component={TabNavigator} />
                <Stack.Screen name="WorkoutLive" component={WorkoutLive} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

// apenas a Stack que usar o TabNavigator como componente terá o BottomTabNavigator.
const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#060723',
                    borderTopWidth: 0,
                    elevation: 0,
                    position: 'absolute'
                },
                tabBarActiveTintColor: Colors.secondaryTextColor,
                tabBarInactiveTintColor: Colors.secondaryColor
            }}>
            <Tab.Screen
                name="HomeTab"
                component={HomeStack}
                options={{
                    title: 'Home',
                    tabBarIcon: ({ focused }) => (
                        <Icon1
                            name='home'
                            color={focused ? Colors.secondaryTextColor : Colors.secondaryColor}
                            size={28} />
                    )
                }}
            />
            <Tab.Screen
                name="MyRoutines"
                component={MyRoutines}
                options={{
                    title: 'My Routines',
                    tabBarIcon: ({ focused }) => (
                        <Icon2
                            name='weight-lifter'
                            color={focused ? Colors.secondaryTextColor : Colors.secondaryColor}
                            size={28} />
                    )
                }} />
            <Tab.Screen
                name="TrainingHistory"
                component={TrainingHistory}
                options={{
                    title: 'Training History',
                    tabBarIcon: ({ focused }) => (
                        <Icon1
                            name='calendar'
                            color={focused ? Colors.secondaryTextColor : Colors.secondaryColor}
                            size={28} />
                    )
                }} />
            <Tab.Screen
                name="MyProfile"
                component={MyProfile}
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ focused }) => (
                        <Icon1
                            name='user'
                            color={focused ? Colors.secondaryTextColor : Colors.secondaryColor}
                            size={28} />
                    )
                }} />
        </Tab.Navigator>
    )
}

// todos os diferentes ecrãs que posso aceder dentro do Home Screen
const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="NewWorkout" component={NewWorkout} />
        </Stack.Navigator>
    );
};

export default Navigation