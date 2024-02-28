// Import necessary React Native components and hooks
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
// Import custom components
import Heading from '../components/Heading';
import CustomButton from '../components/CustomButton';
import SocialIcons from '../components/SocialIcons';

// Import color palette
import colors from '../assets/colors';

// Define the Signup functional component
const Signup = ({navigation}) => {
  // Initialize the router for navigation
  const router = useRouter();
  
  // Set up state variables for form fields using the useState hook
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Return the JSX for the Signup screen
  return (
    // Use SafeAreaView to ensure content is displayed within the safe area
    <SafeAreaView className="container px-7 h-full bg-white">
      {/* Display a heading for the Signup screen */}
      <View className="mt-36">
        <Heading content="Create Account" />
      </View>

      {/* Render the form fields for the user to input their information */}
      <View className="mt-4">

        {/* Email input field */}
        <TextInput
          // Update the email state when the text changes
          onChangeText={setEmail}
          // Set the placeholder text
          placeholder={'Email'}
          // Set the placeholder text color
          placeholderTextColor={colors.textDark}
          // Display the user's current email input
          value={email}
          // Style the input field
          className="bg-zinc-200 py-3 rounded-xl px-5 mt-3 text-textgray"
        />

        {/* Password input field */}
        <TextInput
          // Update the password state when the text changes
          onChangeText={setPassword}
          // Set the placeholder text
          placeholder={'Password'}
          // Set the placeholder text color
          placeholderTextColor={colors.textDark}
          // Display the user's current password input
          value={password}
          // Style the input field
          className="bg-zinc-200 py-3 rounded-xl px-5 mt-3 text-textgray"
          // Set the input type to password
          secureTextEntry={true}
        />

        
      </View>

      {/* Custom Button component for Signup */}
      <CustomButton
        // Pass the navigation object to the CustomButton component
        navigation={navigation}
        // Set the background color of the button
        bgColor={colors.primary}
        // Set the text color of the button
        textColor={colors.textWhite}
        // Set the screen to navigate to when the button is pressed
        goto={'Items'}
        // Set the button content
        content={'Signup'}
      />

      {/* Container for alternative sign-in methods */}
      <View className="mt-10">
        {/* Display a message for users with existing accounts */}
        
                {/* Container for existing account navigation */}
        <View className="flex flex-row items-center justify-center mt-24">
          {/* Display a message for users with existing accounts */}
          <Text className="text-textgray">
            Already have a accout?
          </Text>
          {/* Touchable opacity for navigation to the SignIn screen */}
          <TouchableOpacity
            // Navigate to the SignIn screen when pressed
            onPress={() => router.push('SignIn')}
          >
            {/* Display the Login text */}
            <Text className="underline text-textgray">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

// Export the Signup component for use in other files
export default Signup;