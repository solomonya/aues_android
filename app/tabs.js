import { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

export default function Page() {
  const [text, setText] = useState("");
  return (
    <View style={[styles.container]}>
      <View>
        <TextInput value={text} onTextInput={(input) => setText(input)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
