import { WebView } from "react-native-webview";

function DetailedSongInfo({ route }) {
    const { external_url } = route.params

    return  ( <WebView source={{ uri: external_url }} /> )

}
export default DetailedSongInfo;
