import React from 'react';
import { View, ScrollView, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useRoute } from '@react-navigation/native';

const Sharingacrossprofiles = () => {
  const navigation = useNavigation();

  const navigateToAddNloginaccounts = () => {
    navigation.navigate('AddNloginaccounts');
  }


  return (
    <ScrollView  style={styles.container}>

    
    <SafeAreaView >
      <View style={styles.headingContainer}>
        
        <Text style={styles.heading}>Sharing across profiles</Text>
      </View>


      <View style={styles.spacing}>
  <Text style={styles.rowValue1}>
Add your accounts to enable connected experiences ,  {'\n'} 
such as sharing your Synthiem story and posts to , {'\n'}Facebook or Instagram  </Text>
</View>

      <View style={styles.section} >
         <View style={styles.sectionBody}>
        <View style={styles.spacing}>

            <View style={styles.rowWrapperFirst}>
            <View style={styles.rowFirst}>
                <TouchableOpacity onPress={navigateToAddNloginaccounts}>                   
                 

                  <View style={styles.row}>
                     <View style={styles.accountIconContainer}>
                     
    
                      </View>
                      <View style={styles.rowTextContainer}>
                  <Text style={styles.profileAddress1}>Add accounts</Text>
                </View>
                          <View style={styles.rowSpacer} />                      
                            <FeatherIcon 
                              color="#ababab"
                              name="chevron-right"
                              size={22} onPress={navigateToAddNloginaccounts}
                            />      
                          </View>

                      </TouchableOpacity>
                   </View>
               </View>
               </View>

               </View>
               </View>

    </SafeAreaView>
          </ScrollView>
  );
};

const styles = StyleSheet.create({
 

  container: {
    flex: 1,
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

  spacing: {
    marginTop: 30, 
}, 
rowValue1: {
  fontSize: 14,
  color: '#ffffff',
  letterSpacing:0.5,
  marginLeft:19,
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
  marginTop: 30, // Add spacing between the two boxes
}, 



rowWrapperFirst: {
  paddingLeft:15,
  borderTopWidth:1.2,    
  borderColor: '#4C4C4C',
  backgroundColor:'#262626',
  borderBottomWidth: 1.2, 
  borderLeftWidth: 1.2,
  borderRightWidth: 1.2,

  borderTopLeftRadius:18,
  borderTopRightRadius:18,
  borderBottomRightRadius:18,
  borderBottomLeftRadius:18,
 
  
 },

rowFirst: {
  borderTopLeftRadius: 12,
  borderTopRightRadius: 12,
  
},

row: {
  height:65,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  paddingTop: 13,
  paddingRight: 12,
  paddingBottom: 13,
  paddingLeft: 0,
},

accountIconContainer: {
  color:'#666666',
  marginRight: 8,
  alignItems:'center',
   
},

rowTextContainer: {
flex: 5,
marginLeft: 10, // Optional left margin
flexDirection: 'column',
justifyContent: 'center',
},
profileAddress1:{
          marginTop:0,
          fontSize:16,
          color:'#4682B4',
          paddingVertical: 6, // Optional horizontal padding
        
        },
        
        rowSpacer: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
      },
      
});

export default Sharingacrossprofiles;
