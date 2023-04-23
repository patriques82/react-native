import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = (props) => (
  <View style={styles.goalItem}>
    <Pressable
      android_ripple={{ color: "#dddddd" }}
      onPress={() => props.onRemoveGoal(props.id)}
    >
      <Text style={styles.goalText}>{props.text}</Text>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});

export default GoalItem;
