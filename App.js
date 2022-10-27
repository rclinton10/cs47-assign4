import { StyleSheet, SafeAreaView, Text, Button, FlatList, View, TouchableOpacity, Image, Dimensions, PixelRatio, InteractionManager } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import Song from "./components/Song";
import { useFonts } from 'expo-font';
import SpotifyAuthButton from "./components/SpotifyAuthButton";
import SongList from "./components/SongList";
import { useState } from "react";

export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();
  
  function CurrentScreen(props) {
    if (props.token) return <SongList tracks={tracks}/> 
    return <SpotifyAuthButton getSpotifyAuth={getSpotifyAuth}/>;
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <CurrentScreen token={token}/>
    </SafeAreaView>
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
