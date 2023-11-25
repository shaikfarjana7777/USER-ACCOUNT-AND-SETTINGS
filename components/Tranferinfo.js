import React from 'react';
import { View, ScrollView, Text, StyleSheet,Button,TouchableOpacity,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import  { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useRoute } from '@react-navigation/native';


const Transferinfo = () => {

    const route = useRoute();
    const Email = route.params?.Email || 'shaikzoyafgd4563';
    const navigation = useNavigation(); 



      const navigateToLikesNComments = () => {
        navigation.navigate('LikesandShare');
      }
      

      return(
        
        <ScrollView>
          <SafeAreaView style={styles.container} >
 
          <View  style={styles.spacing1} >
  <Text style={styles.rowValue1}>
{Email} . Synthiem 
  </Text>
</View>
          <View style={styles.headingContainer}>
        <Text style={styles.heading}>Transfer your information </Text>
      </View>

      <View style={styles.spacing}>
  <Text style={styles.rowValue1}>
You can transfer a copy of information that you craeted or sared on instagram to another service
  </Text>
</View>


<View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={navigateToLikesNComments}>
          <Text style={styles.buttonText}>Next</Text>
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
        spacing1: {
            marginTop: 0,
            marginLeft:14,
        }, 
        buttonContainer: {

            alignItems: 'center',
            marginVertical: 30,
            marginTop:590,
          },
          button: {
            backgroundColor: '#262626',
            width: 410, 
            height: 45, 
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

    export default Transferinfo;
 