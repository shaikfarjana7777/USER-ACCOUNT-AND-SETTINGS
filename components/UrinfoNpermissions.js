import React from 'react';
import { View, ScrollView, Text, StyleSheet,Button,TouchableOpacity,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import  { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useRoute } from '@react-navigation/native';


const UrinfoNpermissions = () => {
    const navigation = useNavigation(); 



    const navigateToDownloadinfo = () => {
        navigation.navigate('Downloadinfo');

      }

      const navigateToLikesNComments = () => {
        navigation.navigate('LikesandShare');
      }

      const navigateToTransferinfo = () => {
        navigation.navigate('Transferinfo');
      }

      const navigateToUploadcontacts = () => {
        navigation.navigate('Uploadcontacts');
      }


      

      return(
        <ScrollView>
          <SafeAreaView style={styles.container} >

          <View style={styles.headingContainer}>
        <Text style={styles.heading}>Your information and permissions </Text>
      </View>
      <View style={styles.section} >
          <View style={styles.sectionHeader1}>
          </View>
      
        <View style={styles.sectionBody}>
           <View style={styles.rowWrapperFirst}>
           <View style={styles.rowFirst}>
        <TouchableOpacity onPress={navigateToDownloadinfo}>                   
                   <View style={styles.row}>
                   <View style={styles.accountIconContainer}>
                  
                   </View>
                     <Text style={styles.rowLabel}>Download your information</Text>
                     <View style={styles.rowSpacer} /> 
                       <FeatherIcon
                         color="#ababab"
                         name="chevron-right"
                         size={22}  onPress={navigateToDownloadinfo}
                         style={{ paddingRight: 7}}
                       />      
                     </View>
                     </TouchableOpacity>
               </View>
           </View>
           
           <View style={styles.rowWrapper}>
            <View style={styles.rowFirst}>
         <TouchableOpacity onPress={navigateToTransferinfo}>                   
                    <View style={styles.row}>

                    <View style={styles.accountIconContainer}>
                   
                   
                      
              </View>
                      <Text style={styles.rowLabel}>Transfer a copy of your information </Text>
                      <View style={styles.rowSpacer} />                      
                        <FeatherIcon
                          color="#ababab"
                          name="chevron-right"
                          size={22}
                          onPress={navigateToTransferinfo}
                          style={{ paddingRight: 7}}
                        />       
                      </View>
                      </TouchableOpacity>
               </View>
           </View>
           <View style={styles.rowWrapperLast}>
            <View style={styles.rowFirst}>
         <TouchableOpacity  onPress={navigateToLikesNComments}>                   
                    <View style={styles.row}>
                    <View style={styles.accountIconContainer}>
                   
                      
                      
              </View>
                      <Text style={styles.rowLabel}>Search history</Text>
                      <View style={styles.rowSpacer} />      

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

           <View style={styles.spacing}>
  <Text style={styles.rowValue1}>
View Download or Transfer your information and activity{'\n'} on our apps 
  </Text>
</View>


           <View style={styles.section} >
        
      
 
        <View style={styles.sectionBody}>
            <View style={styles.rowWrappersecond}>
            <View style={styles.rowFirst}>
                <TouchableOpacity onPress={navigateToLikesNComments}>                   
                  <View style={styles.row}>
                     <View style={styles.accountIconContainer}>
                    
                       
                      </View>
                <Text style={styles.rowLabel}>Your activity of Meta tehnologies </Text>
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
       <TouchableOpacity onPress={navigateToUploadcontacts}>                   
                  <View style={styles.row}>
                  <View style={styles.accountIconContainer}>
                    
                 
                  
          </View>
                    <Text style={styles.rowLabel}>Upload contacts</Text>
                    <View style={styles.rowSpacer} />  
    
                      <FeatherIcon
                        color="#ababab"
                        name="chevron-right"
                        size={22} onPress={navigateToUploadcontacts}
                      />      
                    </View>
                               
             </TouchableOpacity>
             </View>
         </View>
         </View>
         </View>

         <View style={styles.spacing}>
  <Text style={styles.rowValue1}>
  Control what information Meta technologies can use to influence your experiences
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
      headingContainer: {
        justifyContent: 'center',
        marginLeft:12,
      },
      rowValue1: {
        fontSize: 13,
        color: '#ffffff',
        letterSpacing:0.5,
        },
    
      heading: {
        fontSize: 25,
        fontWeight: 'normal',
        color:'white',
      },
      sectionHeader1: {
  
        padding: 8,
        paddingLeft: 12,
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
            marginTop: 20,
            marginLeft:19,
        }, 
        
        rowWrapperFirst: {
            paddingLeft:15,
            borderTopWidth:1.2,    
            borderColor: '#4C4C4C',
            backgroundColor:'#262626',
            borderLeftWidth: 1.2,
            borderRightWidth: 1.2,
            borderTopLeftRadius:18,
            borderTopRightRadius:18,
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
            rowValue: {
                fontSize: 14,
                color: '#ababab',
                letterSpacing:0.5,
                },
                
                rowSpacer: {
                    flexGrow: 1,
                    flexShrink: 1,
                    flexBasis: 0,
                    },

});

export default UrinfoNpermissions;