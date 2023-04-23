import { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function addGoalHandler(text) {
    setCourseGoals((prevGoals) => [
      ...prevGoals,
      { text, key: Math.random().toString() },
    ]);
  }

  function removeGoalHandler(id) {
    setCourseGoals((prevGoals) => {
      return prevGoals.filter((goal) => goal.key !== id);
    });
  }

  function addModalHandler() {
    setModalIsVisible(true);
  }

  function removeModalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add Goal" onPress={addModalHandler} />
        <GoalInput
          visible={modalIsVisible}
          onClose={removeModalHandler}
          onAddGoal={addGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  onRemoveGoal={removeGoalHandler}
                  text={itemData.item.text}
                  id={itemData.item.key}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085e",
  },
  goalsContainer: {
    flex: 5,
  },
});
