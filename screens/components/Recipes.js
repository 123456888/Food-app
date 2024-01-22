import { View, Text, ScrollView, TextInput, Image } from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';
import AllCategory from "../Data/AllCategory";

const Recipes = () => {

    const [input, setInput] = useState("");
    const navigation = useNavigation();

    const breakFast = () => {
        navigation.navigate("breakfast");
    }
    const dessert = () => {
        navigation.navigate("dessert");
    }
    const nonVeg = () => {
        navigation.navigate("nonveg");
    }
    const seaFood = () => {
        navigation.navigate("seafood");
    }
    const veg = () => {
        navigation.navigate("veg")
    }
    const starter = () => {
        navigation.navigate("starter");
    }
    const Allcat = () => {
        navigation.navigate("recipe");
    }

    const DataDetails = (item) => {
        navigation.navigate("details", item)
    }

    const renderItems = ({ item }) => {
        if (input === "") {
            return (
                <Animated.View entering={FadeInDown.duration(500).springify()} className="mt-5 flex-1 items-center">
                    <TouchableOpacity className="px-3 items-center" onPress={() => DataDetails(item)}>
                            <Animated.Image source={{ uri: item.strMealThumb }} sharedTransitionTag="tag" className="rounded-full h-36 w-36"></Animated.Image>
                        <Text numberOfLines={2} style={{ width: 100 }} className="mb-5 text-red-400 text-sm">{item.strMeal}</Text>
                    </TouchableOpacity>
                </Animated.View>
            )
        }
        if (item.strMeal.toLowerCase().includes(input.toLowerCase())) {
            return (
                <Animated.View entering={FadeInDown.duration(500).springify()} className="mt-5 flex-1 items-center">
                    <TouchableOpacity className="px-3 items-center">
                        <Image source={{ uri: item.strMealThumb }} className="rounded-full h-36 w-36"></Image>
                        <Text numberOfLines={2} style={{ width: 100 }} className="mb-5 text-red-400 text-sm">{item.strMeal}</Text>
                    </TouchableOpacity>
                </Animated.View>
            )
        }
    }

    return (
        <View className="flex-1 py-10">
            <ScrollView className="space-y-6">
                <View className="flex-row justify-between px-3">
                    <Image source={require("../../assets/Image/avatar.png")} className="bg-blue-200 rounded-full" style={{ height: 30, width: 30 }}></Image>
                    <Image source={require("../../assets/Image/notification.png")} style={{ height: 25, width: 25 }}></Image>
                </View>
                <View className="px-3">
                    <View className="flex-row">
                        <Text className="text-gray-500">Hello, </Text>
                        <Text className="text-red-600">Subham Raj</Text>
                    </View>
                    <View className="mt-4">
                        <Text className="text-3xl font-bold">Make your own food,</Text>
                        <View className="flex-row">
                            <Text className="text-3xl font-bold">Stay at </Text>
                            <Text className="text-3xl font-bold text-red-300">Home</Text>
                        </View>
                    </View>
                </View>
                <View className="px-3">
                    <View className="border border-gray-400 rounded-full h-10 justify-center bg-blue-100">
                        <View className="flex-row justify-between px-3 items-center">
                            <TextInput placeholder="Search Food..." onChangeText={(data) => setInput(data)}></TextInput>
                            <Image source={require("../../assets/Image/search.png")} style={{ height: 20, width: 20 }}></Image>
                        </View>
                    </View>
                </View>
                <Animated.View entering={FadeInDown.duration(500).springify()}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity className="flex space-y-1 items-center" onPress={Allcat}>
                            <View className="rounded-full px-2 items-center">
                                <Image source={require("../../assets/Image/breakfast.jpg")} style={{ height: 50, width: 50 }} className="rounded-full"></Image>
                                <Text className="mt-2 font-bold text-red-300 text-sm">All Category</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity className="flex space-y-1 items-center" onPress={breakFast}>
                            <View className="rounded-full px-2 items-center">
                                <Image source={require("../../assets/Image/breakfast.jpg")} style={{ height: 50, width: 50 }} className="rounded-full"></Image>
                                <Text className="mt-2 font-bold text-red-300 text-sm">Break Fast</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity className="flex space-y-1 items-center" onPress={dessert}>
                            <View className="rounded-full px-2 items-center">
                                <Image source={require("../../assets/Image/dessert.jpg")} style={{ height: 50, width: 50 }} className="rounded-full"></Image>
                                <Text className="mt-2 font-bold text-red-300 text-sm">Dessert</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity className="flex space-y-1 items-center" onPress={nonVeg}>
                            <View className="rounded-full px-2 items-center">
                                <Image source={require("../../assets/Image/nonVeg.jpg")} style={{ height: 50, width: 50 }} className="rounded-full"></Image>
                                <Text className="mt-2 font-bold text-red-300 text-sm">Non-Vegetarian</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity className="flex space-y-1 items-center" onPress={seaFood}>
                            <View className="rounded-full px-2 items-center">
                                <Image source={require("../../assets/Image/sea.jpg")} style={{ height: 50, width: 50 }} className="rounded-full"></Image>
                                <Text className="mt-2 font-bold text-red-300 text-sm">Sea-Food</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity className="flex space-y-1 items-center" onPress={veg}>
                            <View className="rounded-full px-2 items-center">
                                <Image source={require("../../assets/Image/veg.jpg")} style={{ height: 50, width: 50 }} className="rounded-full"></Image>
                                <Text className="mt-2 font-bold text-red-300 text-sm">Vegetarian</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity className="flex space-y-1 items-center" onPress={starter}>
                            <View className="rounded-full px-2 items-center">
                                <Image source={require("../../assets/Image/starter.jpg")} style={{ height: 50, width: 50 }} className="rounded-full"></Image>
                                <Text className="mt-2 font-bold text-red-300 text-sm">Starter</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </Animated.View>
                <View className="h-full">
                    <View className="border border-gray-200"></View>
                    <Text className="text-red-400 text-3xl px-3 mt-4 font-bold">All Category</Text>
                    <View>
                        <FlatList
                            data={AllCategory}
                            renderItem={renderItems}
                            keyExtractor={(item) => item.idCategory}
                            numColumns="2"
                        ></FlatList>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Recipes;