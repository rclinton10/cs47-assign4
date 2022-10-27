import { Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Themes } from "../assets/Themes";

const SpotifyAuthButton = ({ getSpotifyAuth }) => { 
    /*
    props: {
        getSpotifyAuth: ....,
        testID: "....",
    }
    */
    return (
        <TouchableOpacity style={styles.logInButton} onPress={getSpotifyAuth}>
            <Image style={styles.logInButtonLogo} source={require('../assets/spotify-logo.png')}/>
            <Text style={styles.logInButtonText}>CONNECT WITH SPOTIFY</Text>
        </TouchableOpacity>
      );
};

export default SpotifyAuthButton;

const styles = StyleSheet.create({
    logInButton: {
        backgroundColor: Themes.colors.spotify,
        borderRadius: 999999,
        fontSize: 40,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: "center"
    },
    logInButtonLogo: {
        height: Dimensions.get('window').height * 0.02,
        width: Dimensions.get('window').height * 0.02,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginRight: 10
    },
    logInButtonText: {
        color: "white",
        fontSize: 15,
    },
});
