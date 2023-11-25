import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profiletype = () => {
  const navigation = useNavigation();
  const [selectedProfileType, setSelectedProfileType] = useState('');

  const navigateToAddNloginaccounts = () => {
    navigation.navigate('AddNloginaccounts');
  };

  const isButtonDisabled = !selectedProfileType;

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Are you a business?</Text>
      </View>

      <View style={styles.spacing}>
        <Text style={styles.rowValue1}>
          Based on the category that selected you may be a{'\n'} business. you can change this at any time
        </Text>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionBody}>
          <View style={styles.spacing}>
            <View style={styles.rowWrapperFirst}>
              <View style={styles.rowFirst}>
                <View style={styles.row}>
                  <View style={styles.rowTextContainer}>
                    <Text style={styles.profileAddress1}>Business</Text>
                    <Text style={styles.additionalText}>
                      Best for retailers, local businesses, brands, organizations, and service providers
                    </Text>
                  </View>
                  <RadioButton
                    value="Business"
                    status={selectedProfileType === 'Business' ? 'checked' : 'unchecked'}
                    onPress={() => setSelectedProfileType('Business')}
                    color="white"
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionBody}>
          <View style={styles.spacing}>
            <View style={styles.rowWrapperFirst}>
              <View style={styles.rowFirst}>
                <View style={styles.row}>
                  <View style={styles.rowTextContainer}>
                    <Text style={styles.profileAddress1}>Creator</Text>
                    <Text style={styles.additionalText}>
                      Best for public figures, content producers, artists, and influencers
                    </Text>
                  </View>
                  <RadioButton
                    value="Creator"
                    status={selectedProfileType === 'Creator' ? 'checked' : 'unchecked'}
                    onPress={() => setSelectedProfileType('Creator')}
                    color="white"
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.Button, { backgroundColor: isButtonDisabled ? 'gray' : 'skyblue' }]}
          onPress={navigateToAddNloginaccounts}
          disabled={isButtonDisabled}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // ... Other styles
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingVertical: 20,
  },
  headingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 25,
    fontWeight: 'normal',
    color: 'white',
  },
  rowValue1: {
    fontSize: 14,
    color: '#ffffff',
    letterSpacing: 0.5,
    justifyContent: 'center',
    textAlign: 'center',
  },
  section: {
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  sectionBody: {
    borderRadius: 12,
    shadowColor: 'rgba(0,0,0,0.25)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  spacing: {
    marginTop: 10,
  },
  rowWrapperFirst: {
    paddingLeft: 15,
    borderTopWidth: 1.2,
    borderColor: '#4C4C4C',
    backgroundColor: '#262626',
    borderBottomWidth: 1.2,
    borderLeftWidth: 1.2,
    borderRightWidth: 1.2,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomRightRadius: 18,
    borderBottomLeftRadius: 18,
  },
  rowFirst: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  row: {
    height: 99,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 13,
    paddingRight: 12,
    paddingBottom: 13,
    paddingLeft: 0,
  },
  accountIconContainer: {
    color: '#666666',
    marginRight: 8,
    alignItems: 'center',
  },
  rowTextContainer: {
    flex: 5,
    marginLeft: 10,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  profileAddress1: {
    marginTop: 0,
    fontSize: 18,
    color: 'white',
    paddingVertical: 6,
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  sectionHeader1: {
    padding: 8,
    paddingLeft: 18,
  },
  sectionHeaderText: {
    fontSize: 16,
    fontFamily: 'Helvetica',
    fontWeight: '500',
    color: 'white',
    textTransform: 'none',
    letterSpacing: 0.2,
  },
  radioContainer: {
    paddingHorizontal: 16,
    marginTop: 10,
  },
  radioButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  radioButtonText: {
    fontSize: 16,
    color: '#ffffff',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },

  Button: {
    backgroundColor: 'skyblue',
    padding: 10,
    width: '90%',
    borderRadius: 10,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },

 
  additionalText: {
    fontSize: 14,
    color: 'gray',
    marginTop: 1,
  },
  
});

export default Profiletype;
