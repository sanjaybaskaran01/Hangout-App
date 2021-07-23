import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";
import firebase from "firebase";
import { firebaseConfig } from "../../config";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { ResponseType } from "expo-auth-session";
import config from "../../config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

WebBrowser.maybeCompleteAuthSession();

const Signin = ({ navigation }) => {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: config.CLIENT_ID,
  });
  React.useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;

      const credential = firebase.auth.GoogleAuthProvider.credential(id_token);
      firebase.auth().signInWithCredential(credential);
      navigation.navigate("DrawerNavigationRoutes");
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <Button
        disabled={!request}
        title="Sign in with Google"
        onPress={() => {
          promptAsync();
        }}
      />
    </View>
  );
};

export default Signin;
