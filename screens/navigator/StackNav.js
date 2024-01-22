import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "../components/Login";
import Welcome from '../components/Welcome';
import BreakFastOne from '../components/BreakFastOne';
import DessertOne from '../components/DessertOne';
import NonVegOne from '../components/NonVegOne';
import SeaFoodOne from '../components/SeaFoodOne';
import StarterOne from '../components/StarterOne';
import VegOne from '../components/VegOne';
import Recipes from '../components/Recipes';
import FoodDetails from '../components/FoodDetails';

const Stack = createStackNavigator();

const StackNav = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="welcome">
                <Stack.Screen name="welcome" component={Welcome} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name="login" component={Login}  options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name="breakfast" component={BreakFastOne}  options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name="dessert" component={DessertOne}  options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name="nonveg" component={NonVegOne}  options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name="seafood" component={SeaFoodOne}  options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name="starter" component={StarterOne}  options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name="veg" component={VegOne}  options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name="recipe" component={Recipes}  options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name="details" component={FoodDetails}  options={{ headerShown: false }}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNav;