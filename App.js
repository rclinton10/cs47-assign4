import { StyleSheet } from "react-native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SongList from "./components/SongList";
import DetailedSongInfo from "./components/DetailedSongInfo";
import SongPreview from "./components/SongPreview"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="All songs" component={SongList} options={{headerShown: false}}/>
        <Stack.Screen name="Song details" component={DetailedSongInfo} options={{headerTitleStyle : styles.headerTitleStyle, headerStyle: styles.headerStyle}} />
        <Stack.Screen name="Song preview" component={SongPreview} options={{headerTitleStyle : styles.headerTitleStyle, headerStyle: styles.headerStyle}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: 'black'
  },
  headerTitleStyle: {
    color: '#3366CC'
  }
})
