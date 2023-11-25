import React from 'react';
import { View, ScrollView, Text, StyleSheet,Button,TouchableOpacity,Image,Email } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import  { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useRoute } from '@react-navigation/native';


const Profiles = () => {
    const route = useRoute();
    const Email = route.params?.Email || 'shaikzoyafgd4563';
    const Fullname = route.params?.Fullname || 'Default Fullname';

    const navigation = useNavigation(); 

   
   
    const navigateToLikesNComments = () => {
        navigation.navigate('LikesandShare');
      }

      const navigateToUserdetails=()=>{
        navigation.navigate('Userdetails',{Email,Fullname})
      }

      return(
        <ScrollView>
            <SafeAreaView style={styles.container}>

            <View style={styles.headingContainer}>
        <Text style={styles.heading}>Profiles </Text>
      </View>

      <View>
  <Text style={styles.rowValue1}>
    Manage your profile info, and use the same info across{'\n'}
    Facebook, Instagram, and Horizon. Add more profiles by adding your accounts.
    Learn more
  </Text>
</View>

<View style={styles.section} >
        
  <View style={styles.sectionBody}>
        <View style={styles.spacing}>

            <View style={styles.rowWrapperFirst}>
            <View style={styles.rowFirst}>
                <TouchableOpacity onPress={navigateToUserdetails}>                   
                 

                  <View style={styles.row}>
                     <View style={styles.accountIconContainer}>
                     <Image source={{uri:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"}}  
                     style={{  width: 40,
                     height: 40,
                     backgroundColor: 'white',
                     borderRadius: 9999,}} 
                     ></Image>
    
                      </View>
                      <View style={styles.rowTextContainer}>
                  <Text style={styles.rowLabel}>{Email}</Text>
                  <Text style={styles.profileAddress}>instagram</Text>
                </View>
                          <View style={styles.rowSpacer} />                      
                            <FeatherIcon
                              color="#ababab"
                              name="chevron-right"
                              size={22} onPress={navigateToUserdetails}
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
        <View style={styles.spacing}>

            <View style={styles.rowWrapperFirst}>
            <View style={styles.rowFirst}>
                <TouchableOpacity onPress={navigateToLikesNComments}>                   
                 

                  <View style={styles.row}>
                     <View style={styles.accountIconContainer}>
                     
    
                      </View>
                      <View style={styles.rowTextContainer}>
                  <Text style={styles.profileAddress1}>add accounts</Text>
                </View>
                          <View style={styles.rowSpacer} />                      
                            <FeatherIcon
                              color="#ababab"
                              name="chevron-right"
                              size={22} onPress={navigateToLikesNComments}
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
}

const styles = StyleSheet.create({
   
   
    container: {
        backgroundColor: '#121212',
        minHeight:815,
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
        fontSize: 14,
        color: '#ffffff',
        letterSpacing:0.5,
        marginLeft:12,
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
            marginLeft:12,
            marginRight:12,
            
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
          rowLabel: {
          fontSize: 17.6,
          color: '#ffffff',
          fontStyle:'normal',
          marginTop:5,
          
          },
          rowSpacer: {
            flexGrow: 1,
            flexShrink: 1,
            flexBasis: 0,
            },

            profileAddress:{
                marginTop:0,
                fontSize:16,
                color:'#858585',
                paddingVertical: 6, // Optional horizontal padding
              
              },
              profileAddress1:{
                marginTop:0,
                fontSize:16,
                color:'#4682B4',
                paddingVertical: 6, // Optional horizontal padding
              
              },
              spacing: {
                marginTop: 30, // Add spacing between the two boxes
            },              
});

export default Profiles;
