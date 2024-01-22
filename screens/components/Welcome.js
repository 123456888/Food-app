import { View, Text, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {

    const ringOnePadding = useSharedValue(0);
    const ringTwoPadding = useSharedValue(0);
    const navigation = useNavigation();

    useEffect(() => {
        ringOnePadding.value = 0;
        ringTwoPadding.value = 0;
        setTimeout(() => {
            ringOnePadding.value = withSpring(ringOnePadding.value + hp(5))
        }, 100);
        setTimeout(() => {
            ringTwoPadding.value = withSpring(ringTwoPadding.value + hp(5.5))
        }, 300);
        setTimeout(() => {
            navigation.navigate("recipe");
        },2500);
    },[])

    return (
        <View className="flex-1 justify-center items-center bg-amber-500">
            <Animated.View className="bg-white/20 rounded-full" style={{ padding: ringOnePadding }}>
                <Animated.View className="bg-white/20 rounded-full" style={{ padding: ringTwoPadding }}>
                    <Image source={require("../../assets/Image/food.png")} style={{ width: 200, height: 200 }}></Image>
                </Animated.View>
            </Animated.View>
            <View className="flxe-1 justify-center items-center mt-4">
                <View>
                    <Text className="text-white text-4xl">Welcome</Text>
                </View>
                <View>
                    <Text className="text-amber-200 font-bold text-xl">To Our Foodie Mania!</Text>
                </View>
            </View>
        </View>
    )
}

export default Welcome