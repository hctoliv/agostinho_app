import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';



const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

import Home from "./Pages/Home/Home";
import Logar from "./Pages/Login/Logar/Logar";
import Agendamentos from "./Pages/verAgendar/Agendamentos";
import Agendar from "./Pages/Agendar";

import { Entypo } from "@expo/vector-icons";

export function Routes() {  
  return (
    <NavigationContainer>
      <TabsScreen />
    </NavigationContainer>
  );
}

function TabsScreen() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          position: "absolute",
          borderRadius: 30,
          left: 20,
          right: 20,
          bottom: 10,
          height: 60
        }
      }}
    >
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Entypo name="home" size={24} color="#8a4932" />
            ) : (
              <Entypo name="home" size={24} color="black" />
            );
          }
        }}
      />

      <Tabs.Screen
        name="Agendamentos"
        component={Agendamentos}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Entypo name="scissors" size={24} color="#8a4932" />
            ) : (
              <Entypo name="scissors" size={24} color="black" />
            );
          }
        }}
      />
    </Tabs.Navigator>
  );
}

function StackScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Agendar" component={Agendar} />
      
      <Stack.Screen name="Logar" component={Logar} />
    </Stack.Navigator>
  );
}
