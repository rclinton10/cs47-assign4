import { View, Text, StyleSheet, Image, Dimensions, Pressable } from 'react-native';
import millisToMinutesAndSeconds from "../utils/millisToMinutesAndSeconds";
import { Ionicons } from '@expo/vector-icons';
import { colors } from "../assets/Themes/colors";

const Song = (props) => { 
    return (
        <Pressable onPress={() => 
            props.navigation.navigate('Song details', { external_url:props.external_url})}>
            <View style={styles.songComponent}>
            <Pressable onPress={() => 
                props.navigation.navigate('Song preview', { preview_url:props.preview_url})}>
                <Ionicons style={styles.playIcon} name="play-circle"/>
            </Pressable>
            <Image style={styles.image} source={(props.image)}/>
            <View style={styles.titleAndArtist}>
                <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                <Text style={styles.artist} numberOfLines={1}>{props.artist[0].name}</Text>
            </View>
            <Text style={styles.albumName} numberOfLines={1}>{props.album}</Text>
            <Text style={styles.duration}>{millisToMinutesAndSeconds(props.duration)}</Text>
            </View>
        </Pressable>
  );
};

export default Song;

const styles = StyleSheet.create({
    songComponent: {
        flexDirection: 'row',
        marginBottom: 15
    }, 
    playIcon: {
        color: colors.spotify,
        paddingTop: 16,
        fontSize: Dimensions.get('window').width * .07,
        width: Dimensions.get('window').width * .13,
        textAlign: 'center',
        marginLeft: -3
    },
    image: {
        width: Dimensions.get('window').width * .16,
        height: Dimensions.get('window').width * .16,
    }, 
    titleAndArtist: {
        paddingLeft: 10,
        paddingRight: 5,
        alignSelf: 'center',
        width: Dimensions.get('window').width * .30
    },
    title: {
        fontSize: 14,
        color: 'white',
    },
    artist: {
        fontSize: 14,
        color: 'gray'
    },
    albumName: {
        paddingLeft: 10,
        fontSize: 14,
        alignSelf: 'center',
        color: 'white',
        width: Dimensions.get('window').width * .3,
    },
    duration: {
        paddingLeft: 4,
        fontSize: 14,
        alignSelf: 'center',
        color: 'white',
        width: Dimensions.get('window').width * .1
    }
});
