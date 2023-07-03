import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const ThirdScreen = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const navigation = useNavigation();

  const handlePreviousScreen = () => {
    navigation.goBack();
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    setPasswordError(text.length < 8);
    setPasswordMatchError(confirmPassword && text !== confirmPassword);
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
    setPasswordMatchError(password && text !== password);
  };

  const handleResetPassword = () => {
    if (passwordError || passwordMatchError) {
      // Don't proceed with the reset if there are any validation errors
      return;
    }

    // Reset password logic here
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevVisible) => !prevVisible);
  };

  return (
    <SafeAreaView>
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handlePreviousScreen}>
        <Ionicons name="md-arrow-back" size={24} color="black" />
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.heading}>Create New Password</Text>
        <Text style={styles.introText}>Your new password must be different from previously used passwords</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password:</Text>
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={styles.input}
              secureTextEntry={!isPasswordVisible}
              placeholder="Password"
              value={password}
              onChangeText={handlePasswordChange}
            />
            <TouchableOpacity style={styles.eyeIcon} onPress={togglePasswordVisibility}>
              <Ionicons name={isPasswordVisible ? 'md-eye-off' : 'md-eye'} size={24} color="grey" />
            </TouchableOpacity>
          </View>
          {passwordError && <Text style={styles.errorText}>Password must be at least 8 characters</Text>}
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Confirm Password:</Text>
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={styles.input}
              secureTextEntry
              placeholder="Confirm Password"
              value={confirmPassword}
              onChangeText={handleConfirmPasswordChange}
            />
          </View>
          {passwordMatchError && <Text style={styles.errorText}>Both passwords must match</Text>}
        </View>
        <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
          <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBFC',
    padding: 20,
    
  },
  backButton: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  backText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  introText: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
    width: '70%',
  },
  inputLabel: {
    fontSize: 18,
    fontWeight: 'normal',
    marginBottom: 10,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'grey',
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  eyeIcon: {
    padding: 10,
  },
  button: {
    backgroundColor: '#703EB0',
    width: '60%',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  errorText: {
    color: 'grey',
    fontSize: 14,
    marginTop: 5,
    textAlign: 'center',
  },
});

export default ThirdScreen;
