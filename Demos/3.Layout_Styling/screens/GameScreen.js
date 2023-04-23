import { Text, View, StyleSheet, Alert } from "react-native";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

import Title from "../components/Title";
import NumberContainer from "../components/NumberInput";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";

function generateRandomNumber(min, max, exclude) {
  const number = Math.floor(Math.random() * (max - min)) + min;
  if (number === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return number;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userChoice, onGuess, onGameOver }) {
  const [guess, setGuess] = useState(generateRandomNumber(1, 100, userChoice));

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  useEffect(() => {
    if (guess === userChoice) {
      onGameOver();
    }
  }, [guess, userChoice, onGameOver]);

  function guessNumber(sign) {
    const lieTooHigh = sign === "+" && guess > userChoice;
    const lieTooLow = sign === "-" && guess < userChoice;
    if (lieTooHigh || lieTooLow) {
      Alert.alert("Dont lie", "You know that is not true", [
        {
          text: "Sorry",
          style: "cancel",
        },
      ]);
      return;
    }

    if (sign === "+") {
      minBoundary = guess + 1;
    } else {
      maxBoundary = guess;
    }
    const rndNum = generateRandomNumber(minBoundary, maxBoundary, guess);
    onGuess();
    setGuess(rndNum);
  }

  return (
    <View style={styles.container}>
      <Title>Opponents Guess</Title>
      <NumberContainer>{guess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher Or Lower?
        </InstructionText>
        <View style={styles.controls}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={guessNumber.bind(this, "-")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={guessNumber.bind(this, "+")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 28,
    flex: 1,
  },
  instructionText: {
    marginBottom: 12,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default GameScreen;
