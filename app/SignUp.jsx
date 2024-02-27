// Import necessary React Native components and hooks
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

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
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Return the JSX for the Signup screen
  return (
    // Use SafeAreaView to ensure content is displayed within the safe area
    <SafeAreaView className="container px-7 h-full bg-white">
      {/* Display a heading for the Signup screen */}
      <View className="mt-24">
        <Heading content="Create Account" />
      </View>

      {/* Render the form fields for the user to input their information */}
      <View className="mt-4">
        {/* First Name input field */}
        <TextInput
          // Update the firstName state when the text changes
          onChangeText={setFirstName}
          // Set the placeholder text
          placeholder={'First Name'}
          // Set the placeholder text color
          placeholderTextColor={colors.textDark}
          // Display the user's current first name input
          value={firstName}
          // Style the input field
          className="bg-zinc-200 py-3 rounded-xl px-5 text-textgray"
        />

        {/* Last Name input field */}
        <TextInput
          // Update the lastName state when the text changes
          onChangeText={setLastName}
          // Set the placeholder text
          placeholder={'Last Name'}
          // Set the placeholder text color
          placeholderTextColor={colors.textDark}
          // Display the user's current last name input
          value={lastName}
          // Style the input field
          className="bg-zinc-200 py-3 rounded-xl px-5 mt-3 text-textgray"
        />

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

        {/* Forgot Password? touchable opacity for navigation */}
        <TouchableOpacity
          // Style the touchable opacity
          className="flex items-end mt-2"
          // Navigate back to the previous screen when pressed
          onPress={() => navigation.goBack()}
        >
          {/* Display the Forgot Password? text */}
          <Text className="font-bold text-textgray">Forgot Password?</Text>
        </TouchableOpacity>
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
        <Text className="text-center text-textgray">
          Or Continue With
        </Text>
        {/* Social Icons component for alternative sign-in methods */}
        <View className="mt-2">
          <SocialIcons />
        </View>

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