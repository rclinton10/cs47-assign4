import { View, Text, StyleSheet, SafeAreaView, Image, PixelRatio, Dimensions, FlatList } from 'react-native';
import Song from "./Song";
import { Themes } from "../assets/Themes";
import { useSpotifyAuth } from "../utils";
import SpotifyAuthButton from "../components/SpotifyAuthButton";

function Songs({ tracks, navigation }) { 
    const renderSong = ({ item }) => (
        <Song
            navigation={navigation}
            external_url={item.external_urls.spotify}
            preview_url={item.preview_url}
            image={item.album.images[2]}
            title={item.name}
            artist={item.artists}
            album={item.album.name}
            duration={item.duration_ms} 
            sound={item.href}
        />
    );

    return (
        <View style={styles.container}>
            <View style={styles.tracksHeader}>
            <Image style={styles.headerImage} source={require('../assets/spotify-logo.png')}/>
            <Text style={styles.headerText}>My Top Tracks</Text>
            </View>
            <FlatList
                data={tracks} // the array of data that the FlatList displays
                renderItem={(item) => renderSong(item)} // function that renders each item
                keyExtractor={(item) => item.id} // unique key for each item
            />
        </View>
    )
};

function SongList({navigation}) {
    const { token, tracks, getSpotifyAuth } = useSpotifyAuth();
  
    function CurrentScreen(props) {
        if (props.token) return <Songs tracks={tracks} navigation={navigation}/> 
        return <SpotifyAuthButton getSpotifyAuth={getSpotifyAuth}/>;
    }

    return (
        <SafeAreaView style={styles.container}>
            <CurrentScreen token={token}/>
        </SafeAreaView>
    );
}

export default SongList;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Themes.colors.background,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    tracksHeader: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.1,
        color: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        color: 'white',
        fontSize: PixelRatio.getFontScale() * Dimensions.get('window').height * 0.03,
        textAlign: 'center', 
    },
    headerImage: {
        alignSelf: 'center',
        resizeMode: 'contain',
        height: Dimensions.get('window').height * 0.04,
        width: Dimensions.get('window').height * 0.04,
        marginRight: 10,
        aspectRatio: 1,
    }
});
