import React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const About = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('../assets/images/avatar.png')}
          style={styles.avatar}
        />
        <Text style={styles.title}>About</Text>
      </View>

      {/* Body */}
      <View style={styles.body}>
        <Text style={styles.bodyText}>
          This is the "About" page where you can provide information about the app, its features, and the creators.
        </Text>
        <Text style={styles.bodyText}>
          You can also include a list of body parts and exercises that the app covers.
        </Text>
      </View>

      {/* Footer */}
      <TouchableOpacity
                onPress={()=> router.push('home')}
                
                className="bg-rose-500 flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200"
            >
                
                <View style={styles.footer}>
        <Ionicons name="chevron-back" size={24} color="white" />
        <Text style={styles.footerText}>Back</Text>
      </View>
            </TouchableOpacity>     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'gray',
    marginLeft: 10,
  },
  body: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 60,
  },
  bodyText: {
    fontSize: 16,
    color: 'gray',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    
  },
  footerText: {
    fontSize: 16,
    color: 'white',
    marginLeft: 10,
  },
});

export default About;