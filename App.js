import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Toast from "react-native-toast-message";

export default function App() {
  const showtoast = () => {
    Toast.show({
      type: "success",
      text1: "Nice to meet you! 👋",
      position: "bottom",
      visibilityTime: 2000,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.screentext}>
        Hello! Asslamualikum I am Abdul Manan
      </Text>
      <Text style={styles.screentext}>
        I can “read” and “understand” over 100 languages 🤯
      </Text>
      <Text style={styles.screentext}>
        but unlike humans, I never forget the syntax of any!
      </Text>

      <Image style={styles.profile} source={require("./assets/pic.jpeg")} />

      <TouchableOpacity style={styles.button} onPress={showtoast}>
        <Text style={styles.buttonText}>Press me</Text>
      </TouchableOpacity>
      <Toast />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
  },
  screentext: {
    fontWeight: "bold",
    paddingBottom: 10, 
  },
  profile: {
    marginTop: 20, 
    width: 300, 
    height: 300, 
    borderRadius: 150, 
  },
  button: {
    marginTop: 25,
    backgroundColor: "black",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
