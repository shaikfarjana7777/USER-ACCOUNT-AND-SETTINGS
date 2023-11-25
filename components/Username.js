import React from 'react';
import { View, ScrollView, Text, StyleSheet,Button,TouchableOpacity,Image,Email } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import  { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useRoute } from '@react-navigation/native';



const Username = () => {
    const route = useRoute();
    const Email = route.params?.Email || 'shaikzoyafgd4563';
    const Fullname = route.params?.Fullname || 'Default Fullname';

    const navigation = useNavigation(); 

   
 


      return(
        <ScrollView>
            <SafeAreaView style={styles.container}>

            <View style={styles.headingContainer}>
        <Text style={styles.heading}>Edit username </Text>
      </View>

      <View style={styles.spacing}>
  <Text style={styles.rowValue1}>
  changing your username will also change your {'\n'}
   synthiem account  </Text>
</View>

      <View style={styles.section} >
        
        <View style={styles.sectionBody}>
              <View style={styles.spacing}>
      
                  <View style={styles.rowWrapperFirst}>
                  <View style={styles.rowFirst}>
                      <TouchableOpacity >                   
                       
      
                        <View style={styles.row}>
                           
                            <View style={styles.rowTextContainer}>
                            <Text style={styles.profileAddress}>Username</Text>

                        <Text style={styles.rowLabel}>{Email}</Text>
                      </View>
                                    
                                </View>
      
                            </TouchableOpacity>
                         </View>
                     </View>
                     </View>
      
                     </View>
                     </View>
          


      <View>
  <Text style={styles.rowValue1}>
   your current synthiem username {Email} is available
  </Text>
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
            paddingVertical: 6,
          
          },

   spacing: {
    marginTop: 30, 
}, 
   section: {
    paddingHorizontal: 14,
    paddingVertical: 12,
  },

  rowFirst: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    
  },
  rowWrapperFirst: {
    paddingLeft:15,
    borderTopWidth:1.2,    
    borderColor: '#4C4C4C',
    backgroundColor:'#262626',
    borderBottomWidth: 1.2, 
    borderLeftWidth: 1.2,
    borderRightWidth: 1.2,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius:12,
    borderBottomRightRadius:12,
  },

  rowTextContainer: {
    flex: 5,
    marginLeft: 10, // Optional left margin
    flexDirection: 'column',
    justifyContent: 'center',
  },
  

   headingContainer: {
    justifyContent: 'center',
    marginLeft:19,
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
    marginLeft:19,
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
});
export default Username;
