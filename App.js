import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
} from "react-native";
import BackgroundImage from "./assets/shoe-print.png";
import { shoes } from "./ShoesTable";
export default function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  async function textChange() {
    shoes.man.map((item) => {
      let key = Object.keys(item);
      let value = Object.values(item);
      if (text == key[0]) {
        setResult(value[0]);
      }
    });
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={BackgroundImage}
        resizeMode="contain"
        style={styles.image}
        imageStyle={{ opacity: 0.3 }}
      >
        <View
          style={{
            height: "70%",
            justifyContent: "space-evenly",
            alignItems: "center",
            paddingBottom: 100,
          }}
        >
          <Text style={styles.text}>Tamanho Do Seu Pe nos EUA</Text>
          <TextInput
            style={styles.input}
            placeholder="Tamanho do seu Pe"
            placeholderTextColor="red"
            onChangeText={(text) => setText(text)}
            defaultValue={text}
            onSubmitEditing={textChange}
            textAlign={"center"}
          />
          <Text style={styles.text}>{result}</Text>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D2B48C",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: 1.5,
  },
  input: {
    height: 70,
    margin: 12,
    width: 150,
    borderWidth: 1,
    padding: 10,
    borderColor: "red",
    alignItems: "center",
    color: "blue",
  },
  text: {
    color: "blue",
    fontSize: 20,
    fontWeight: "bold",
  },
});
