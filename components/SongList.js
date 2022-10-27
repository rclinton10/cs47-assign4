import { View, Text, StyleSheet, Image, PixelRatio, Dimensions, FlatList } from 'react-native';
import Song from "./Song";

const SongList = ({ tracks }) => { 
    const renderSong = ({ item, index }) => (
        <Song
            index={index + 1}
            image={item.album.images[2]}
            title={item.name}
            artist={item.artists}
            album={item.album.name}
            duration={item.duration_ms} 
            sound={item.href}
        />
    );

    return (
        <View style={{ flex: 1}}>
            <View style={styles.tracksHeader}>
            <Image style={styles.headerImage} source={require('../assets/spotify-logo.png')}/>
            <Text style={styles.headerText}>My Top Tracks</Text>
            </View>
            <FlatList
                data={tracks} // the array of data that the FlatList displays
                renderItem={(item, index) => renderSong(item, index)} // function that renders each item
                keyExtractor={(item) => item.id} // unique key for each item
            />
        </View>
    )
};

export default SongList;

const styles = StyleSheet.create({
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
