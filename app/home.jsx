import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImageSlider from '../components/ImageSlider';
import BodyParts from '../components/BodyParts';
import { useRouter } from 'expo-router';
import SideMenu from 'react-native-side-menu';

export default function Home() {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleAboutPress = () => {
    // Navigate to the about page
    router.push('about');
  };

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  const SidebarContent = () => {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff', padding: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 60, marginBottom: 60 }}>
          {/* {isSidebarOpen ? (
            <TouchableOpacity onPress={handleSidebarClose}>
              <Ionicons name="chevron-back-outline" size={hp(3)} color="#333" />
            </TouchableOpacity>
          ) : ( */}
          <Image
                  source={require('../assets/images/avatar.png')}
                  style={{ height: hp(6), width: hp(6) }}
                  className="rounded-full"
                />
          {/* )} */}
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>
              Username
            </Text>
          </View>
        </View>
        <TouchableOpacity style={{ marginBottom: 10 }} onPress={handleAboutPress}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="information-circle-outline" size={hp(5)} color="#333" />
            <Text style={{ marginLeft: 10, fontSize: 14 }}>About</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginBottom: 10 }} onPress={handleAboutPress}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="settings-outline" size={hp(5)} color="#333" />
            <Text style={{ marginLeft: 10 }}>Settings</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginBottom: 10 }} onPress={handleAboutPress}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="help-circle-outline" size={hp(5)} color="#333" />
            <Text style={{ marginLeft: 10 }}>Help</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginBottom: 10 }} onPress={handleAboutPress}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="log-out-outline" size={hp(5)} color="#333" />
            <Text style={{ marginLeft: 10 }}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SideMenu
      isOpen={isSidebarOpen}
      onChange={(isOpen) => setIsSidebarOpen(isOpen)}
      menu={<SidebarContent />}
    >
      <SafeAreaView className="flex-1 bg-white flex space-y-5" edges={['top']}>
        <StatusBar style="dark" />

        {/* punchline and avatar */}
        <View className="flex-row justify-between items-center mx-5">
          <View className="flex justify-center items-center space-y-2">
            <TouchableOpacity onPress={handleSidebarToggle}>
              {isSidebarOpen ? (
                <Ionicons name="chevron-back-outline" size={hp(3)} color="#333" />
              ) : (
                <Image
                  source={require('../assets/images/avatar.png')}
                  style={{ height: hp(6), width: hp(6) }}
                  className="rounded-full"
                />
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={handleAboutPress}>
              <View
                className="bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300"
                style={{ height: hp(5.5), width: hp(5.5) }}
              >
                <Ionicons name="help-outline" size={hp(3)} color="gray" />
              </View>
            </TouchableOpacity>
          </View>
          <View className="space-y-1">
            <Text
              style={{ fontSize: hp(1.5) }}
              className="font-bold tracking-wider text-neutral-700"
            >
              READY TO
            </Text>
            <Text
              style={{ fontSize: hp(4.5) }}
              className="font-bold tracking-wider text-rose-500"
            >
              WORKOUT
            </Text>
          </View>
        </View>

        {/* image slider */}
        <View>
          <ImageSlider />
        </View>

        {/* body parts list */}
        <View className="flex-1">
          <BodyParts />
        </View>
      </SafeAreaView>
    </SideMenu>
  );
}