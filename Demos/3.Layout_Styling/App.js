import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import Colors from "./constants/Colors";

function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [rounds, setRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const chooseNumberHandler = (number) => {
    setUserChoice(number);
  };

  const restartGameHandler = () => {
    setUserChoice(null);
    setRounds(0);
    setGameOver(false);
  };

  let screen = <StartGameScreen onChooseNumber={chooseNumberHandler} />;

  if (userChoice && !gameOver) {
    screen = (
      <GameScreen
        userChoice={userChoice}
        onGuess={() => setRounds((prev) => prev + 1)}
        onGameOver={() => setGameOver(true)}
      />
    );
  }

  if (gameOver) {
    screen = (
      <GameOverScreen
        userChoice={userChoice}
        rounds={rounds}
        onRestartGame={restartGameHandler}
      />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootContainer}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.image}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25,
  },
});

export default App;
