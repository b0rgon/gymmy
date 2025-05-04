import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, SafeAreaViewBase, StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/login_screen';
import AppLoading from 'expo-app-loading';
import { fontsToLoad } from './constants/font_styles';
import { useFonts } from '@expo-google-fonts/quicksand';
import Colors from './constants/colors'
import { LinearGradient } from 'expo-linear-gradient'

export default function App() {
  const [fontsLoaded] = useFonts(fontsToLoad);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
  <LinearGradient style = {styles.container} colors={Colors.backgroundColor}>
    <LoginScreen />
  </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
})
