import React from 'react';
import { View, ScrollView, Text, StyleSheet,Button,TouchableOpacity,Image,Email } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import  { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useRoute } from '@react-navigation/native';


const Userdetails = () => {
    const route = useRoute();
    const Email = route.params?.Email || 'shaikzoyafgd4563';
    const Fullname = route.params?.Fullname || 'Default Fullname';
    const navigation = useNavigation(); 

   
   
    const navigateToLikesNComments = () => {
        navigation.navigate('LikesandShare');
      }

      const navigateToName = () => {
        navigation.navigate('Name');
      }

      const navigateToUsername = () => {
        navigation.navigate('Username');
      } 
  

      return(
        <ScrollView>
            <SafeAreaView style={styles.container}>


            <View style={styles.accountIconContainer}>
                     <Image source={{uri:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"}}  
                     style={{  width: 70,
                     height: 70,
                     backgroundColor: 'white',
                     borderRadius: 9999,}} 
                     ></Image>
    
                      </View>

                      <View style={styles.fullnameContainer}>
                      <Text  style={styles.rowValue1}>
                             {Fullname}
                      </Text>
                      <Text style={styles.profileAddress} >{Email} . Synthiem</Text>

                      </View>

      
                      <View style={styles.section} >
        
        <View style={styles.sectionHeader1}>

        </View>
      
        <View style={styles.sectionBody}>
        <View style={styles.rowWrapperFirst}>
            <View style={styles.rowFirst}>
         <TouchableOpacity onPress={navigateToName}>                   
                    <View style={styles.row}>
                      <Text style={styles.rowLabel}>Name</Text>
                      <View style={styles.rowSpacer} />                      
                        <Text style={styles.rowValue}></Text> 
                        <FeatherIcon
                          color="#ababab"
                          name="chevron-right"
                          size={22}
                          onPress={navigateToName}
                          style={{ paddingRight: 7}}
                        />          
                      </View>
                                 
               </TouchableOpacity>
               </View>
           </View>
          <View style={styles.rowWrapper}>
           <View style={styles.rowFirst}>
           <TouchableOpacity onPress={navigateToUsername}>                   
                    <View style={styles.row}>
                      <Text style={styles.rowLabel}>Username</Text>
                      <View style={styles.rowSpacer} />                      
                        <Text style={styles.rowValue}></Text> 
                        <FeatherIcon
                          color="#ababab"
                          name="chevron-right"
                          size={22}
                          onPress={navigateToUsername}
                          style={{ paddingRight: 7}}
                        />          
                      </View>
                                 
               </TouchableOpacity>
              </View>
          </View>
          
          
             <View style={styles.rowWrapper}>
           <View style={styles.rowFirst}>
           <TouchableOpacity onPress={navigateToLikesNComments}>                   
                    <View style={styles.row}>
                      <Text style={styles.rowLabel}>Profile picture</Text>
                      <View style={styles.rowSpacer} />                      
                        <Text style={styles.rowValue}></Text> 
                        <FeatherIcon
                          color="#ababab"
                          name="chevron-right"
                          size={22}
                          onPress={navigateToLikesNComments}
                          style={{ paddingRight: 7}}
                        />          
                      </View>
                                 
               </TouchableOpacity>
              </View>
          </View>
          
          
          
          
          <View style={styles.rowWrapperLast}>
           <View style={styles.rowFirst}>
           <TouchableOpacity onPress={navigateToLikesNComments}>                   
                    <View style={styles.row}>
                      <Text style={styles.rowLabel}>Avatar</Text>
                      <View style={styles.rowSpacer} />                      
                        <Text style={styles.rowValue}></Text> 
                        <FeatherIcon
                          color="#ababab"
                          name="chevron-right"
                          size={22}
                          onPress={navigateToLikesNComments}
                          style={{ paddingRight: 7}}
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
        minHeight:815,
    },


    section: {
        paddingHorizontal: 14,
        paddingVertical: 12,
      },
      sectionHeader: {
        padding: 8,
        paddingTop:10,
        paddingLeft: 12,
      },

      sectionHeader1: {
    
        padding: 8,
        paddingLeft: 12,
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
        fontSize: 18,
        color: '#ffffff',
        letterSpacing:0.5,
       
      },
      fullnameContainer: {
        justifyContent: 'center',
        alignItems: 'center', // Center horizontally
        marginTop: 10, // Adjust the top margin as needed
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

          rowValue: {
            fontSize: 14,
            color: '#ababab',
            letterSpacing:0.5,
          },


          rowWrapper: {
            paddingLeft:15,
            borderTopWidth:0,
            borderRadius:1,
            borderColor: '#4C4C4C',
            borderRightWidth: 1.2,
            borderLeftWidth: 1.2,
            borderRightWidth: 1.2,
            backgroundColor:'#262626',
            borderBottomWidth: 0,
             
           },
          rowWrapperFirst: {
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

export default Userdetails;
