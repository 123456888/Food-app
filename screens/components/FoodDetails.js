import { View, Text, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';

const FoodDetails = (item) => {
    const data = item.route.params;
    const navigation = useNavigation("");

    const [isFav, setIsFav] = useState(false);

    return (
        <ScrollView className="h-screen py-7">
            <View className="items-center">
                <Animated.Image source={{ uri: data.strMealThumb }} sharedTransitionTag="tag" className="h-80 w-96 rounded-3xl"></Animated.Image>
            </View>
            <View className=" mt-5 mx-3 absolute">
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back-circle" size={45} color="black" />
                </TouchableOpacity>
            </View>
            <View className="absolute">
                <TouchableOpacity className="mx-3 mt-64" onPress={() => setIsFav(!isFav)}>
                    <FontAwesome name="heart" size={38} color={isFav ? "red" : "gray"} className="bg-red-600" />
                </TouchableOpacity>
            </View>
            <View>
                <View className="items-center mt-2">
                    <Text className="mx-3 text-2xl text-red-500 font-bold">{data.strMeal}</Text>
                </View>
                <Animated.View entering={FadeInDown.duration(500).springify()} className="px-5 mt-5">
                    <View className="flex-row justify-between">
                        <View className="items-center bg-yellow-400 p-1 rounded-3xl">
                            <Image source={require("../../assets/Image/time.png")} className="h-10 w-10"></Image>
                            <Text className="text-sm mt-1" >35</Text>
                            <Text style={{ fontSize: 9 }} className="mb-3">MAX</Text>
                        </View>
                        <View className="items-center bg-yellow-400 p-1 rounded-3xl">
                            <Image source={require("../../assets/Image/men.png")} className="h-10 w-10"></Image>
                            <Text className="text-sm mt-1" >03</Text>
                            <Text style={{ fontSize: 9 }} className="mb-3">Serving</Text>
                        </View>
                        <View className="items-center bg-yellow-400 p-1 rounded-3xl">
                            <Image source={require("../../assets/Image/health.png")} className="h-10 w-10"></Image>
                            <Text className="text-sm mt-1" >103</Text>
                            <Text style={{ fontSize: 9 }} className="mb-3">CAL</Text>
                        </View>
                        <View className="items-center bg-yellow-400 p-1 rounded-3xl">
                            <Image source={require("../../assets/Image/money.png")} className="h-10 w-10"></Image>
                            <Text className="text-sm mt-1" >103</Text>
                            <Text style={{ fontSize: 9 }} className="mb-3">CAL</Text>
                        </View>
                    </View>
                </Animated.View>
                <View className="border border-red-100 mt-5"></View>
                <View className="px-3">
                    <Animated.View entering={FadeInDown.duration(100).springify()}>
                        <Text className="text-lg text-red-400 mt-3">Description:</Text>
                        <Text className="text-justify text-gray-400 text-base mt-1 mb-5">{data.des}</Text>
                    </Animated.View>
                </View>
            </View>
        </ScrollView>
    )
}

export default FoodDetails