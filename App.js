import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button, ToastAndroid } from "react-native";

const ELanguages = Object.freeze({
  RU: "RU",
  POLAND: "POLAND",
});

const textsByLanguage = {
  [ELanguages.RU]: {
    greeting: "Привет, мир!",
  },
  [ELanguages.POLAND]: {
    greeting: "Witaj świecie!",
  },
};

const flagByLanguage = {
  [ELanguages.RU]: [{ color: "white" }, { color: "blue" }, { color: "red" }],
  [ELanguages.POLAND]: [{ color: "white" }, { color: "red" }],
};

const langBtns = [
  { text: "Русский", lang: ELanguages.RU },
  { text: "Польский", lang: ELanguages.POLAND },
];

export default function App() {
  const [lang, setLang] = useState(ELanguages.RU);
  return (
    <View style={styles.container}>
      <View style={{ padding: 20 }}>
        <Text style={{ fontWeight: "700", fontSize: 30 }}>Разработка на базе андроид, Лаб.1</Text>
        <View style={{ padding: 10, gap: 5 }}>
          {langBtns.map((btn) => (
            <Button
              key={btn.lang}
              title={btn.text}
              onPress={() => {
                setLang(btn.lang);
                ToastAndroid.show(`Язык был изменён на ${btn.text}`, ToastAndroid.SHORT);
              }}
            />
          ))}
        </View>
        <Text style={{ fontWeight: "700", fontSize: 40 }}>{textsByLanguage[lang].greeting}</Text>
      </View>
      <View style={styles.flagContainer}>
        {flagByLanguage[lang].map(({ color }) => {
          return <View key={color} style={[styles.flagStripe, { backgroundColor: color }]}></View>;
        })}
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
  flagContainer: {
    padding: 20,
    height: 300,
    width: "100%",
    backgroundColor: "#000",
    flexDirection: "column",
  },
  flagStripe: {
    flex: 1,
  },
});
