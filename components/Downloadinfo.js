import React from 'react';
import { View, ScrollView, Text, StyleSheet,Button,TouchableOpacity,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import  { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useRoute } from '@react-navigation/native';


const Downloadinfo = () => {
    const navigation = useNavigation(); 



      const navigateToLikesNComments = () => {
        navigation.navigate('LikesandShare');
      }
      

      return(
        
        <ScrollView>
          <SafeAreaView style={styles.container} >

          <View style={styles.headingContainer}>
        <Text style={styles.heading}>Download your information </Text>
      </View>

      <View style={styles.spacing}>
  <Text style={styles.rowValue1}>
You can request a copy of your information at any time
  </Text>
</View>

<View style={styles.spacing}>
  <Text style={styles.rowValue1}>
When your file is ready, you'll have four days {'\n'}
 to download your information from this page.{'\n'}
 Downloading your files is a password-protected {'\n'}
 procss tahat only you access to 

  </Text>
</View>
<View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={navigateToLikesNComments}>
          <Text style={styles.buttonText}>Request a Download</Text>
        </TouchableOpacity>
      </View>

          </SafeAreaView>
          
          </ScrollView>




  );
}  

const styles = StyleSheet.create({
  
    container: {
        backgroundColor: '#121212',
        paddingVertical:20,
      },

      headingContainer: {
        justifyContent: 'center',
        marginLeft:12,
      },
    
      heading: {
        fontSize: 25,
        fontWeight: 'normal',
        color:'white',
      },

      rowValue1: {
        fontSize: 13,
        color: '#ffffff',
        letterSpacing:0.5,
        },
        spacing: {
            marginTop: 10,
            marginLeft:12,
        }, 
        buttonContainer: {

            alignItems: 'center',
            marginVertical: 30,
            marginTop:550
          },
          button: {
            backgroundColor: '#262626',
            width: 410, // Set the width as per your requirements
            height: 45, // Set the height as per your requirements
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            borderColor: '#4C4C4C',
            borderWidth:1.2,
            borderRadius:40,
          },
          buttonText: {
            color: 'white',
            fontSize: 16,
          },

    });

    export default Downloadinfo;
 