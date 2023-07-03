
import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const FirstScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleNextScreen = () => {
    navigation.navigate('SecondScreen');
  };


  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.questionCircle}>
            <Feather name="help-circle" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.heading}>Reset Password</Text>
      <Text style={styles.introText}>
        Enter the email associated with your account and we'll send an email with instructions to reset your password
      </Text>
      <View style={styles.emailContainer}>
        <Text style={styles.emailHeading}>Email Address:</Text>
        <TextInput
          style={styles.emailInput}
          placeholder=" mcraigw@outlook.com"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleNextScreen}>
        <Text style={styles.buttonText}>Send Instructions</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    fontStyle: 'NunitoSansRegular'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  
  },
  questionCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  introText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'left',
    color: 'grey',
  },
  emailContainer: {
    marginBottom: 30,
    width: '70%',
  },
  emailHeading: {
    fontSize: 18,
    fontWeight: 'normal',
    marginBottom: 10,
    color: 'grey',
  },
  emailInput: {
    width: '100%',
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  button: {
    width: '70%',
    backgroundColor: '#703EB0',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'normal',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default FirstScreen;
