// Import necessary libraries and modules
import { View, Text, FlatList, TouchableOpacity, Image} from 'react-native'
import React, { useState, useMemo } from 'react'
import SearchBar from 'react-native-platform-searchbar'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { bodyParts } from '../constants'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'
import Animated, { FadeInDown } from 'react-native-reanimated'

/**
 * BodyParts component displays a list of exercises grouped by body parts.
 * It includes a search bar for filtering exercises by name.
 */
export default function BodyParts() {
  // Initialize the router object for navigation
  const router = useRouter()

  // Set up the local state for storing the search input value
  const [searchInput, setSearchInput] = useState('')

  // Memoize the filteredBodyParts array to optimize performance
  const filteredBodyParts = useMemo(() => {
    if (!searchInput) return bodyParts;
    return bodyParts.filter(item => item.name.toLowerCase().includes(searchInput.toLowerCase()));
  }, [searchInput])

  // Render the BodyParts component
  return (
    <View className="mx-4">
      {/* Display the title "Exercises" */}
      <Text style={{ fontSize: hp(3) }} className="font-semibold text-neutral-700">
        Exercises
      </Text>

      {/* Render the SearchBar component for filtering exercises */}
      <SearchBar
        placeholder='Search for exercises...'
        platform="default"
        cancelText="Cancel"
        barTintColor="#fff"
        onChangeText={(text) => setSearchInput(text)}
      />

      {/* Render the FlatList component for displaying the exercises */}
      <FlatList
        data={filteredBodyParts}
        numColumns={2}
        keyExtractor={item => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item, index }) => <BodyPartCard router={router} index={index} item={item} />}
      />
    </View>
  )
}

/**
 * BodyPartCard component displays a single exercise item with an image and name.
 * It handles the touch event for navigating to the Exercises screen.
 * @param {Object} item - The exercise item object containing name and image properties.
 * @param {Object} router - The router object for navigation.
 * @param {Number} index - The index of the exercise item in the FlatList.
 */
const BodyPartCard = ({ item, router, index }) => {
  return (
    <Animated.View entering={FadeInDown.duration(400).delay(index * 200).springify()}>
      {/* Render the TouchableOpacity component for handling touch events */}
      <TouchableOpacity
        onPress={() => router.push({ pathname: '/exercises', params: item })}
        style={{ width: wp(44), height: wp(52) }}
        className="flex justify-end p-4 mb-4"
      >
        {/* Render the Image component for displaying the exercise image */}
        <Image
          source={item.image}
          resizeMode='cover'
          style={{ width: wp(44), height: wp(52) }}
          className="rounded-[35px] absolute"
        />

        {/* Render the LinearGradient component for adding a background gradient */}
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.9)']}
          style={{ width: wp(44), height: hp(15) }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="absolute bottom-0 rounded-b-[35px]"
        />

        {/* Render the Text component for displaying the exercise name */}
        <Text
          style={{ fontSize: hp(2.3) }}
          className="text-white font-semibold text-center tracking-wide"
        >
          {item?.name}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  )
}