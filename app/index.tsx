import { Text, View, Pressable, Button } from "react-native";
import { StyleSheet, UnistylesRuntime } from "react-native-unistyles";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> {UnistylesRuntime.themeName}</Text>
      <Pressable
        style={styles.buttonContainer}
        onPress={() => {
          console.log("Button Pressed");
        }}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Click Me</Text>
        </View>
      </Pressable>
      <Button
        title="Change Theme"
        onPress={() => {
          UnistylesRuntime.setTheme(
            UnistylesRuntime.themeName === "light" ? "dark" : "light",
          );
        }}
      />
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
    boxShadow: [
      {
        offsetX: 5,
        offsetY: 5,
        blurRadius: 5,
        spreadDistance: 0,
        color: "red",
      },
    ],
  },
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: theme.colors.secondary,
  },
  buttonText: {
    color: theme.colors.primary,
  },
  text: {
    color: theme.colors.secondary,
  },
}));
