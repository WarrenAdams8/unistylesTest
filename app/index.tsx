import { Text, View, Pressable } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text> app/index.tsx to edit this screen.</Text>
      <Pressable
        style={styles.buttonContainer}
        onPress={() => alert("Button Pressed")}
      >
        <Text style={styles.buttonText}>Click Me</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.primary,
  },
  buttonContainer: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: theme.colors.secondary,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25) inset",
  },
  buttonText: {
    color: theme.colors.primary,
  },
}));
