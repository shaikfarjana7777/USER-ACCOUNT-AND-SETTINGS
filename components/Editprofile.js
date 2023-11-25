import React, { useState } from 'react';
import { View,Text, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios'; 
import { useNavigation } from '@react-navigation/native'; 
import { isValidEmail, isRequired, isValidPhoneNumber ,isFirstNameMatchingFullName, isValidFullName, isValidDateOfBirth} from './validate'; // Import validation functions from validate.js

const Editprofile = ({route}) => {
  const [dropdown1Value, setDropdown1Value] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');

  const [Fullname, setFullName] = useState('');
  const [Firstname, setFirstName] = useState('');
  const [DOB, setDob] = useState('');
  const [Email, setEmail] = useState('');

  const navigation = useNavigation(); 

  
  const handleDropdown1Change = (itemValue) => {
    setDropdown1Value(itemValue);
    setPhoneNumber(itemValue + ' ');
   // setPhoneNumber(itemValue === 'none' ? '' : itemValue + ' ');
  };




  const handleFullNameChange = (text) => {
    setFullName(text);
  };

  const handleFirstNameChange = (text) => {
    setFirstName(text);
  };

  const handleDobChange = (text) => {
    setDob(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleFormSubmit = async () => {
    try {
      
      if (!isValidFullName(Fullname)) {
        console.error('Fullname is required.');
        return;
      }
      

      if (!isFirstNameMatchingFullName(Fullname, Firstname)) {
        console.error('First Name should match the first part of Full Name.');
        return;
      }

      if (!isValidDateOfBirth(DOB)) {
        console.error('please enter the valid DOB (ex.. DD/MM/YYYY) .');
        return;
      }
      
      if (!isValidEmail(Email)) {
        console.error('Please enter a valid email address.');
        return;
      }

      if (!isRequired(dropdown1Value) || dropdown1Value === 'option0') {
        console.error('Please select a country.');
        return;
      }

      if (!isValidPhoneNumber(phoneNumber)) {
        console.error('Please enter a valid phone number.');
        return;
      }
      
      
      
      const formData = {
        Fullname,
        Firstname,
        DOB,
        Email,
      };

      const response = await axios.post('http://192.168.158.52:3000/submit-form', formData);  //please add  specific ip adress of your server

      navigation.navigate('Settings', formData);
    } catch (error) {
      if (error.response) {
      console.error('Server Error:', error.response.data);
    } else if (error.request) {
      console.error('No response from server:', error.request);
    } else {
      console.error('Error:', error.message);
    }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.inputContainer}>
          <TextInput
            label="Fullname"
            style={styles.input}
            theme={{ colors: { text: 'white', primary: 'white' } }}
            value={Fullname}
            onChangeText={handleFullNameChange}
          />
        </View>

        

        <View style={styles.inputContainer}>
          <TextInput
            label="Firstname"
            style={styles.input}
            theme={{ colors: { text: 'white', primary: 'white' } }}
            value={Firstname}
            onChangeText={handleFirstNameChange}
          />
        </View>

        
        <View style={styles.inputContainer}>
          <TextInput
            label="DOB"
            style={styles.input}
            theme={{ colors: { text: 'white', primary: 'white' } }}
            value={DOB}
            onChangeText={handleDobChange}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            label="Email"
            style={styles.input}
            theme={{ colors: { text: 'white', primary: 'white' } }}
            value={Email}
            onChangeText={handleEmailChange}
          />
        </View>
         <View style={styles.inputContainer}>
          <Picker
            selectedValue={dropdown1Value}
            onValueChange={handleDropdown1Change}

            style={styles.dropdown}
          >
            <Picker.Item label="Country " value="none" />
            <Picker.Item label="INDIA " value="+91" />
            <Picker.Item label="China" value="+86" />
            <Picker.Item label="United states" value="+1" />
            <Picker.Item label="Indonesia " value="+62" />
            <Picker.Item label="Brazil" value="+55" />
            <Picker.Item label="Russia" value="+7" />
            <Picker.Item label="Pakisthan " value="+92" />
            <Picker.Item label="Mexico" value="+52" />
          </Picker>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.rowContainer}>
            
             
            <TextInput
              label="Phone Number ..."
              style={[styles.input, { flex: 2 }]}  
              theme={{ colors: { text: 'white', primary: 'white' } }}


              value={phoneNumber}
              onChangeText={(text) => setPhoneNumber(text)}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Picker
            selectedValue={gender}
            onValueChange={(itemValue) => setGender(itemValue)}
            style={styles.dropdown}
          >
            
            <Picker.Item label="gender" value=" " />
 
            <Picker.Item label="Female" value="female" />
            <Picker.Item label="Male" value="male" />
          </Picker>
        </View>
        <Button mode="contained" style={styles.button} onPress={handleFormSubmit}>
          Submit
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  scrollContent: {
    padding: 20,
    margin: 10,
    marginTop: 10,
  },
  inputContainer: {
    marginVertical: 10,
  },
  input: {
    backgroundColor: 'rgba(0, 0, 0, 2)',
  },
  dropdown: {
    color: 'dimgrey',
    backgroundColor: 'rgba(0, 0, 0, 2)',
  },
  button: {
    marginVertical: 20,
    backgroundColor: '#FF7966',
    borderRadius: 20,
    height: 50,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  
});

export default Editprofile;
