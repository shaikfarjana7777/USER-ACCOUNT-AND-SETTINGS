import React from 'react';
import { View, ScrollView, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useRoute } from '@react-navigation/native';

const AddNloginaccounts= () => {
    const navigation = useNavigation();

    const navigateToLikesNComments = () => {
        navigation.navigate('LikesandShare');
      }

    return (
        <ScrollView  style={styles.container}>
    <SafeAreaView >

    <View style={styles.spacing}>
  <Text style={styles.rowValue1}>
    Select the account that you want to add</Text>
</View>



<View style={styles.section} >
        
      
 
        <View style={styles.sectionBody}>
            <View style={styles.rowWrappersecond}>
            <View style={styles.rowFirst}>
                <TouchableOpacity onPress={navigateToLikesNComments}>                   
                  <View style={styles.row}>
                     <View style={styles.accountIconContainer}>
                    
                       <Image
                         source={require('../assets/security2.png')}
                         style={{ width: 25, height: 25 }}
    
                         />
    
                      </View>
                <Text style={styles.rowLabel}>Add Facebook account </Text>
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
         
         
         <View style={styles.rowWrapperLast}>
          <View style={styles.rowFirst}>
       <TouchableOpacity onPress={navigateToLikesNComments}>                   
                  <View style={styles.row}>
                  <View style={styles.accountIconContainer}>
                    
                  <Image
        source={require('../assets/account.png')}
        style={{ width: 25, height: 25 }}
      />
                  
          </View>
                    <Text style={styles.rowLabel}>Add instagram account</Text>
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
            marginTop: 0, // Add spacing between the two boxes
        }, 
        
        rowWrapperFirst: {
            paddingLeft:15,
            borderTopWidth:1.2,    
            borderColor: '#4C4C4C',
            backgroundColor:'#262626',
            borderBottomWidth: 1.2, 
            borderLeftWidth: 1.2,
            borderRightWidth: 1.2,
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

export default AddNloginaccounts;
