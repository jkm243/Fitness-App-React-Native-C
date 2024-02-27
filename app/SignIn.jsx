import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Heading from '../components/Heading';
import CustomButton from '../components/CustomButton';
import colors from '../assets/colors';
import SocialIcons from '../components/SocialIcons';
import {useRouter} from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the Icon component

const Login = ({navigation}) => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // Add a state to manage the visibility of the password

    return (
        <SafeAreaView className="container px-7 bg-white h-full">
            {/* ... */}
            <View className="mt-4">
                {/* ... */}
                <TextInput
                    secureTextEntry={!showPassword} // Update the secureTextEntry prop based on the showPassword state
                    onChangeText={setPassword}
                    placeholder={'Password'}
                    placeholderTextColor={colors.textDark}
                    value={password}
                    className="bg-zinc-200 py-3 rounded-xl pl-5 mt-3"
                />
                <TouchableOpacity
                    className="flex items-end mt-2"
                    onPress={() => navigation.goBack()}
                >
                    <Text className="font-bold text-textDark">Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    className="absolute right-5 top-5"
                    onPress={() => setShowPassword(!showPassword)} // Toggle the showPassword state when the button is clicked
                >
                    <Icon name={showPassword ? 'eye' : 'eye-slash'} size={24} color={colors.textDark} />
                </TouchableOpacity>
            </View>
            {/* ... */}
        </SafeAreaView>
    );
};

export default Login;