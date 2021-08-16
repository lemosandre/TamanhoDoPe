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

  const textChange = (text) => {
    setText(text);
    console.log(shoes.man);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={BackgroundImage}
        resizeMode="contain"
        style={styles.image}
        imageStyle={{ opacity: 0.7 }}
      >
        <View
          style={{
            height: "70%",
            backgroundColor: "red",
            justifyContent: "space-evenly",
            alignItems: "center",
            paddingBottom: 100,
          }}
        >
          <Text>Tamanho Do Seu Pe nos EUA</Text>
          <TextInput
            style={{ height: 70 }}
            placeholder="Tamanho do seu Pe"
            onChangeText={textChange}
            defaultValue={text}
          />
          <Text>{text}</Text>
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
});
