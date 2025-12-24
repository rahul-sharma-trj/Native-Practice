import { Link } from 'expo-router';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image 
          source={require('../assets/images/icon.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
        <Text className="text-3xl font-bold text-blue-600 mb-2 text-center">Welcome to Native Practice</Text>
        <Text style={styles.subtitle}>Your entry point to the app</Text>

        <View style={styles.buttonContainer}>
          <Link href="/location" asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Go to Location</Text>
            </Pressable>
          </Link>

          <Link href="/(auth)/sign-in" asChild>
            <Pressable style={[styles.button, styles.secondaryButton]}>
              <Text style={[styles.buttonText, styles.secondaryButtonText]}>Sign In</Text>
            </Pressable>
          </Link>

          <Link href="/(auth)/sign-up" asChild>
             <Pressable style={[styles.button, styles.outlineButton]}>
              <Text style={[styles.buttonText, styles.outlineButtonText]}>Create Account</Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#1a1a1a',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    gap: 12,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: '#34C759',
  },
  secondaryButtonText: {
    color: '#fff',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  outlineButtonText: {
    color: '#007AFF',
  },
});
