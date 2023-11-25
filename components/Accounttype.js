import React from 'react';
import { View, ScrollView, Text, StyleSheet,Button,TouchableOpacity,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import  { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useRoute } from '@react-navigation/native';


const Accounttype = () => {
  const navigation = useNavigation(); 


  const navigateToLikesNComments = () => {
    navigation.navigate('LikesandShare');
  }

  const navigateToCategories = () => {
    navigation.navigate('Categories');
  }


return(
    <ScrollView>
      <SafeAreaView style={styles.container} >


      <View style={styles.section} >
        
        
        <View style={styles.sectionHeader1}>
       <Text style={styles.sectionHeaderText}>Account type</Text>
       </View>
     <View style={styles.sectionBody}>
         <View style={styles.rowWrapperFirst}>
         <View style={styles.rowFirst}>
             <TouchableOpacity onPress={navigateToCategories}>                   
               <View style={styles.row}>
                  <View style={styles.accountIconContainer}>
                 
                  
 
                   </View>
                   <Text style={styles.rowLabel}>Switch to proffessional account</Text>
                       <View style={styles.rowSpacer} />                      
                         <FeatherIcon
                           color="#ababab"
                           name="chevron-right"
                           size={22} onPress={navigateToCategories}
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
                       
                    
                     
             </View>
                       <Text style={styles.rowLabel}>Add new proffessional account</Text>
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
}


const styles = StyleSheet.create({
  
  container: {
  
  
    backgroundColor: '#121212',
   paddingVertical: 5,
   minHeight:815,
   
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



rowWrapperFirst: {
  paddingLeft:12,
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
sectionHeader: {
  padding: 8,
  paddingTop:10,
  paddingLeft: 12,
},

sectionHeader1: {
  
  padding: 8,
  paddingLeft: 12,
  },
sectionHeaderText: {
  fontSize: 16,
  fontFamily: 'Helvetica',
  fontWeight: '500',
  color: 'gray',
  textTransform: 'none',
  letterSpacing:0.2,

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
        rowLabel: {
fontSize: 17.6,
color: '#ffffff',
fontStyle:'normal',
marginTop:5,

},

rowLabel1: {
  fontSize: 17.6,
  color: '#4682B4',
  fontStyle:'normal',
  
  },
        rowSpacer: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
      },
});

export default Accounttype;