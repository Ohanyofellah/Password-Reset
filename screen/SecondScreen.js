import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SecondScreen = () => {
  const navigation = useNavigation();

  const handleNextScreen = () => {
    navigation.navigate('ThirdScreen');
  };

  const handlePreviousScreen = () => {
    navigation.goBack();
  };

  const handleSkip = () => {
    navigation.navigate('ThirdScreen');
  };

  return (
    <SafeAreaView>
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handlePreviousScreen}>
        <Ionicons name="md-arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.content}>
        <Ionicons name="md-mail" size={80} color="#703EB0" />
        <Text style={styles.heading}>Check Your Mail</Text>
        <Text style={styles.introText}>We have sent password recovery instructions to your email.</Text>
        <TouchableOpacity style={styles.button} onPress={handleSkip}>
          <Text style={styles.buttonText}>Open email app</Text>
        </TouchableOpacity>
        <View style={styles.space} />
        <TouchableOpacity style={styles.skipLink} onPress={handleSkip}>
          <Text style={styles.skipText}>Skip, I'll confirm later</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Did not receive the email? Check your spam filter or</Text>
        <TouchableOpacity style={styles.previousOptionButton} onPress={handlePreviousScreen}>
          <Text style={styles.previousOptionText}>try another email address</Text>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontStyle: 'NunitoSansRegular'
  },
  backButton: {
    marginTop: 10,
    marginLeft: 10,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginBottom: 30, // Add margin to create space for the footer
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  introText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  skipLink: {
    marginBottom: 20,
  },
  skipText: {
    fontSize: 16,
    color: 'grey',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#703EB0',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  space: {
    height: 10, 
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  footerText: {
    fontSize: 14,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  previousOptionButton: {
    backgroundColor: 'transparent',
    paddingHorizontal: 0,
    paddingVertical: 0,
    borderRadius: 0,
  },
  previousOptionText: {
    color: '#703EB0',
    fontWeight: 'normal',
    fontSize: 14,
  },
});

export default SecondScreen;