import { View, Text, StyleSheet, Button, Image, PixelRatio, Dimensions, FlatList, Pressable } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Themes } from "../assets/Themes";
import SongList from "../components/SongList";
import DetailedSongInfo from "../components/DetailedSongInfo";

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Navigate to NotificationsScreen"
        onPress={() => navigation.navigate('Notifications', {
          notifs: ["1 instagram like", "1 facebook follow"]
        })}
      />
    </View>
  );
};

const NotificationsScreen = ({ navigation, route }) => {
  console.log(route.params.notifs)

  return (
    <View>
      <Text>NotificationsScreen</Text>
      {route.params.notifs.map((value) => {
        console.log(value)
      })}
    </View>
  );
};
export default function SongPages() {
  return (
    <NavigationContainer>
      <Stack.Navigator style={styles.container}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
