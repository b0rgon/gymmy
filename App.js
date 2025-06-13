import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, SafeAreaViewBase, StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/login_screen';
import AppLoading from 'expo-app-loading';
import { fontsToLoad } from './constants/font_styles';
import { useFonts } from '@expo-google-fonts/quicksand';
import Colors from './constants/colors'
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation';
import { AuthProvider } from './src/context/auth_context';

export default function App() {
  const [fontsLoaded] = useFonts(fontsToLoad);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
};