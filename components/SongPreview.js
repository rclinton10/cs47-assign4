import { WebView } from "react-native-webview";

function SongPreview({ route }) {
    const { preview_url } = route.params

    return  ( <WebView source={{ uri: preview_url }} /> )
}
export default SongPreview;
