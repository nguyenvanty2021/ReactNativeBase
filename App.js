import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Image,
  ImageBackground,
  Pressable,
  FlatList,
  ActivityIndicator,
} from "react-native";
import ProductListing from "./screens/ProductListing";
import ProductDetail from "./screens/ProductDetail";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          title: "Product List",
        }}
        name="ProductListing"
        component={ProductListing}
      />
      <Tab.Screen
        options={{
          title: "Product Detail",
        }}
        name="ProductDetail"
        component={ProductDetail}
      />
    </Tab.Navigator>
  );
};
export default function App() {
  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", () => {
      alert("KeyboardDidShow");
    });
    Keyboard.addListener("keyboardDidHide", () => {
      alert("KeyboardDidHide");
    });
  });
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#220577dd'
        },
        contentStyle: {
          backgroundColor: '#220577dd'
        }
      }} >
        <Stack.Screen
          options={{
            headerShown: false, // hidden header
          }}
          name="BottomTab"
          component={BottomTabs}
        />
        <Stack.Screen
          name="ProductListing"
          options={{
            title: "Product List",
          }}
          component={ProductListing}
        />
        <Stack.Screen name="ProductDetail"  options={{
            title: "Product Detail",
          }} component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   parent: {
//     margin: 20,
//     width: 500,
//     height: 500,
//     backgroundColor:'yellow',
//     justifyContent: 'space-between',
//     flexDirection: 'column',
//     alignItems: 'center'
//   }
// });
