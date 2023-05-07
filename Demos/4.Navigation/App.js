import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Theme = {
  colors: {
    background: "rgb(244, 202, 202)",
  },
};

const DrawerItems = ({ navigation }) => {
  return (
    <ScrollView style={styles.drawer}>
      <Button
        title="Categories"
        color="#c95858"
        onPress={() => navigation.navigate("Categories")}
      />
      <Button
        title="Favorites"
        color="#c95858"
        onPress={() => navigation.navigate("Favorites")}
      />
    </ScrollView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerItems {...props} />}
      screenOptions={{
        headerStyle: { backgroundColor: "#c95858" },
        headerTintColor: "white",
      }}
    >
      <Drawer.Screen name="Categories" component={CategoriesScreen} />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer theme={Theme}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#c95858",
            },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen name="Drawer" component={DrawerNavigator} />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  drawer: {
    backgroundColor: "white",
  },
});
