import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Heading from '../components/Heading'; // Importing Heading component
import CustomButton from '../components/CustomButton'; // Importing CustomButton component
import colors from '../assets/colors';
import SocialIcons from '../components/SocialIcons';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome';

// Login component with navigation prop
const Login = ({ navigation }) => {
  const router = useRouter(); // Initialize the router
  const [email, setEmail] = useState(''); // Initialize email state
  const [password, setPassword] = useState(''); // Initialize password state
  const [showPassword, setShowPassword] = useState(false); // Initialize showPassword state

  // Return the UI for the Login component
  return (
    <SafeAreaView className="container px-7 bg-white h-full">
      {/* Display the heading */}
      <View className="mt-36">
        <Heading content="Welcome Back" />
      </View>

      {/* Input field for email */}
      <View className="mt-4">
        <TextInput
          onChangeText={setEmail}
          placeholder={'Email'}
          placeholderTextColor={colors.textDark}
          value={email}
          className="bg-zinc-200 py-3 rounded-xl pl-5"
        />
      </View>

      {/* Input field for password with show/hide password functionality */}
      <View className="relative">
        <TextInput
          secureTextEntry={!showPassword} // If showPassword is false, make the input secure
          onChangeText={setPassword}
          placeholder={'Password'}
          placeholderTextColor={colors.textDark}
          value={password}
          className="bg-zinc-200 py-3 rounded-xl pl-5 mt-3"
        />
        {/* TouchableOpacity for show/hide password icon */}
        <TouchableOpacity
          className="absolute top-3 right-2 mt-2 mr-2"
          onPress={() => setShowPassword(!showPassword)} // Toggle showPassword state
        >
          <Icon name={showPassword ? 'eye' : 'eye-slash'} size={20} color={colors.textDark} />
        </TouchableOpacity>
      </View>

      {/* Forgot password functionality */}
      <TouchableOpacity className="flex items-end mt-2" onPress={() => navigation.goBack()}>
        <Text className="font-bold text-textDark">Forgot Password?</Text>
      </TouchableOpacity>

      {/* CustomButton for login functionality */}
      <CustomButton
        navigation={navigation}
        bgColor={colors.primary}
        textColor={colors.textWhite}
        goto={'Items'}
        content={'Login'}
      />

      {/* Social Icons and Signup functionality */}
      <View className="mt-10">
        <Text className="text-center text-textDark">Or Continue With</Text>
        <View className="mt-2">
          <SocialIcons />
        </View>
        <View className="flex flex-row items-center justify-center mt-44">
          <Text className="text-textDark">Does'nt have a accout?</Text>
          <TouchableOpacity onPress={() => router.push('SignUp')}>
            <Text className="underline text-textDark">Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

// Export the Login component
export default Login;
