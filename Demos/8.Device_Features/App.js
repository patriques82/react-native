import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AllPlacesScreen from "./screens/AllPlacesScreen";
import AddPlaceScreen from "./screens/AddPlaceScreen";
import IconButton from "./components/IconButton";
import { Colors } from "./constants/colors";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: Colors.primary500 },
          headerTintColor: Colors.gray700,
          contentStyle: { backgroundColor: Colors.gray700 },
        }}
      >
        <Stack.Screen
          name="AllPlaces"
          component={AllPlacesScreen}
          options={({ navigation }) => ({
            title: "All your places",
            headerRight: ({ tintColor }) => (
              <IconButton
                icon="plus"
                size={24}
                color={tintColor}
                pressHandler={() => navigation.navigate("AddPlace")}
              />
            ),
          })}
        />
        <Stack.Screen
          name="AddPlace"
          component={AddPlaceScreen}
          options={{
            title: "Add a place",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Navigator />
    </>
  );
}
