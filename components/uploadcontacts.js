import React from 'react';
import { View, ScrollView, Text, StyleSheet,Button,TouchableOpacity,Image,Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import  { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useRoute } from '@react-navigation/native';


const Uploadcontacts = () => {
  const [Contactsync, setContactSync] = useState(false);

    const navigation = useNavigation(); 



      const navigateToLikesNComments = () => {
        navigation.navigate('LikesandShare');
      }
      const toggleContactSync = () => {
        setContactSync(!Contactsync);
      };
      

      return(
        
        <ScrollView>
          <SafeAreaView style={styles.container} >

          

      <View style={styles.settingRow}>
        <Text style={styles.settingText}>Connect contacts</Text>
        <Switch
  value={Contactsync}
  onValueChange={toggleContactSync}
  trackColor={{
    false: 'grey', 
    true: 'white'  
  }}
  thumbColor={Contactsync ? 'green' : 'gray'} 
/>

      </View>

     

<View style={styles.spacing}>
  <Text style={styles.rowValue1}>
  We'll sync and securely store your contacts to help you connect with {'\n'}
 people you know on instagram, rcommend things you care about and{'\n'}
 offer you better service.You can choose which contacts to follow.{'\n'}
Disconnect anytime to stop syncing . learn more
  </Text>
</View>


          </SafeAreaView>
          
          </ScrollView>




  );
}  

const styles = StyleSheet.create({
  
    container: {
        backgroundColor: '#121212',
        paddingVertical:20,
        minHeight:815,
      },

     

      rowValue1: {
        fontSize: 12,
        color: '#ffffff',
        letterSpacing:0.5,
        },

        settingRow: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 0,
          marginLeft:12,
          marginRight:19,

        },
        settingText: {
          fontSize: 17,
          color:'white'

        },
        spacing: {
          marginTop: 2,
          marginLeft:12,
      }, 
       
         // Color when the switch is off

    });

    export default Uploadcontacts;
 