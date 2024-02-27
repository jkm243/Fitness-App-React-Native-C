import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';
import { useRouter } from 'expo-router';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function SignInSignUp() {
  const router = useRouter();

  return (
    <View className="flex-1 flex justify-center items-center">
      <StatusBar style="light" />
      <Image
        className="h-full w-full absolute"
        source={require('../assets/images/neck.png')}
      />

      <LinearGradient
        colors={['transparent', '#18181b']}
        style={{ width: wp(100), height: hp(70), position: 'absolute', bottom: 0 }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className="flex justify-center items-center space-y-8"
      >
        <Animated.View entering={FadeInDown.delay(100).springify()} className="flex items-center">
          <Text style={{ fontSize: hp(4.5) }} className="text-white tracking-wide">
            BE THE BEST
          </Text>
          <Text style={{ fontSize: hp(8) }} className="text-white font-bold tracking-wide text-rose-500">
            OF YOU
          </Text>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(200).springify()}>
          <TouchableOpacity
            onPress={() => router.push('SignIn')}
            style={{ height: hp(7), width: wp(80) }}
            className="bg-rose-500 flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200"
          >
            <Text style={{ fontSize: hp(3) }} className="text-white font-bold tracking-widest">
              Sign In
            </Text>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(300).springify()}>
          <TouchableOpacity
            onPress={() => router.push('signUp')}
            style={{ height: hp(7), width: wp(80) }}
            className="bg-neutral-200 flex items-center justify-center mx-auto rounded-full border-[2px] border-rose-500"
          >
            <Text style={{ fontSize: hp(3) }} className="text-rose-500 font-bold tracking-widest">
              Sign Up
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
  );
}