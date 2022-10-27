import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import millisToMinutesAndSeconds from "../utils/millisToMinutesAndSeconds";

const Song = (props) => { 
    return (
        <View style={styles.songComponent}>
        <Text style={styles.index}>{props.index}</Text>
        <TouchableOpacity>
            <Image style={styles.image} source={(props.image)}/>
        </TouchableOpacity>
        <View style={styles.titleAndArtist}>
            <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
            <Text style={styles.artist} numberOfLines={1}>{props.artist[0].name}</Text>
        </View>
        <Text style={styles.albumName} numberOfLines={1}>{props.album}</Text>
        <Text style={styles.duration}>{millisToMinutesAndSeconds(props.duration)}</Text>
        </View>
  );
};

export default Song;

const styles = StyleSheet.create({
    songComponent: {
        flexDirection: 'row',
        marginBottom: 15
    }, 
    index: {
        color: 'gray',
        alignSelf: 'center',
        width: Dimensions.get('window').width * .07,
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
        width: Dimensions.get('window').width * .35
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
