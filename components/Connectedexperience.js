import React from 'react';
import { View, ScrollView, Text, StyleSheet,Button,TouchableOpacity,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import  { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useRoute } from '@react-navigation/native';



const Connectedexperience = () => {


  const navigation = useNavigation(); 

    const navigateToSharingacrossprofiles = () => {
        navigation.navigate('Sharingacrossprofiles');
      }

      const navigateToLoggingwithaccounts = () => {
        navigation.navigate('Loggingwithaccounts');
      }

      return(
        <ScrollView>
            <SafeAreaView style={styles.container}>

            <View style={styles.headingContainer}>
        <Text style={styles.heading}>Connected experience </Text>
      </View>


      <View style={styles.section} >
         <View style={styles.sectionBody}>
        <View style={styles.spacing}>

            <View style={styles.rowWrapperFirst}>
            <View style={styles.rowFirst}>
                <TouchableOpacity onPress={navigateToSharingacrossprofiles}>                   
                 

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
                              size={22} onPress={navigateToSharingacrossprofiles}
                            />      
                          </View>

                      </TouchableOpacity>
                   </View>
               </View>
               </View>

               </View>
               </View>



      <View style={styles.section} >
        
      
 
    <View style={styles.sectionBody}>
        <View style={styles.rowWrappersecond}>
        <View style={styles.rowFirst}>
            <TouchableOpacity onPress={navigateToSharingacrossprofiles}>                   
              <View style={styles.row}>
                 <View style={styles.accountIconContainer}>
                
                   <Image
                     source={require('../assets/Sharing.png')}
                     style={{ width: 25, height: 25 }}

                     />

                  </View>
            <Text style={styles.rowLabel}>Sharing across profiles</Text>
                <View style={styles.rowSpacer} />                      
                  <FeatherIcon
                    color="#ababab"
                    name="chevron-right"
                    size={22} onPress={navigateToSharingacrossprofiles}
                  />      
                </View>
            </TouchableOpacity>
         </View>
     </View>
     
     
     <View style={styles.rowWrapperLast}>
      <View style={styles.rowFirst}>
   <TouchableOpacity onPress={navigateToLoggingwithaccounts}>                   
              <View style={styles.row}>
              <View style={styles.accountIconContainer}>
                
              <Image
    source={require('../assets/account.png')}
    style={{ width: 25, height: 25 }}
  />
              
      </View>
                <Text style={styles.rowLabel}>Logging in with accounts</Text>
                <View style={styles.rowSpacer} />  

                  <FeatherIcon
                    color="#ababab"
                    name="chevron-right"
                    size={22} onPress={navigateToLoggingwithaccounts}
                  />      
                </View>
                           
         </TouchableOpacity>
         </View>
     </View>
     </View>
     </View>





</SafeAreaView>
</ScrollView>
      );
      }

      const styles = StyleSheet.create({

        container: {
    
            backgroundColor: '#121212',
           paddingVertical: 20,
           minHeight:815,
            
         },

         section: {
          paddingHorizontal: 14,
          paddingVertical: 12,
        },

         headingContainer: {
            justifyContent: 'center',
            marginLeft:12,
            marginTop:0,
          },
          profileAddress1:{
            marginTop:0,
            fontSize:16,
            color:'#4682B4',
            paddingVertical: 6, 
          
          },

          heading: {
            fontSize: 25,
            fontWeight: 'normal',
            color:'white',
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
          rowWrappersecond: {
            paddingLeft:15,
            borderTopWidth:1.2,    
            borderColor: '#4C4C4C',
            backgroundColor:'#262626',
            borderBottomWidth: 0, 
            borderLeftWidth: 1.2,
            borderRightWidth: 1.2,
            borderTopLeftRadius:18,
            borderTopRightRadius:18,
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
            height:58,
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
         rowLabel: {
          fontSize: 17.6,
          color: '#ffffff',
         fontStyle:'normal',
          
         },
         rowSpacer: {
          flexGrow: 1,
          flexShrink: 1,
          flexBasis: 0,
        },
        
        rowWrapperLast: {
          paddingLeft:12,
          borderTopWidth:0,    
          borderColor: '#4C4C4C',
          backgroundColor:'#262626',
          borderBottomWidth: 1.2, 
          borderLeftWidth: 1.2,
          borderRightWidth: 1.2,
          borderBottomLeftRadius:18,
          borderBottomRightRadius:18,
         },

      })

      export default Connectedexperience;
