
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
 
export default function Index() {

   useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('../onboarding'); 
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);
  return (
    <>
    <SafeAreaView className="bg-[#6baa7d] h-full flex items-center justify-center">
      <StatusBar style="dark" /> 
      <View>
        {/* Hero Section */}
            <Image
              source={require('../assets/images/BaskyLogo.png')}
              className="w-[400px] h-[400px]"
              resizeMode="contain"
            />
      </View>      
    </SafeAreaView>
    </>
  );
}