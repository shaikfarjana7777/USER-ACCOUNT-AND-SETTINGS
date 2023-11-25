import React from 'react';
import { View, ScrollView, Text, StyleSheet,Button,TouchableOpacity,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import  { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useRoute } from '@react-navigation/native';





export default function PasswordnSecurity ()  {


const navigation = useNavigation(); 


const navigateToChagePassword = () => {
  navigation.navigate('ChangePassword');
}
const navigateToLikesNComments = () => {
  navigation.navigate('LikesandShare');
}
    
  return(
    <ScrollView style={styles.container}>
      <SafeAreaView  >

      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Login & Recovery </Text>
      </View>

      <View style={styles.centeredTextContainer}>
  <Text style={styles.rowValue1}>
  Manage your passwords, login preferences and recovery methods.
  </Text>
</View>

           <View style={styles.section} >
         
      
        <View style={styles.sectionBody}>
           <View style={styles.rowWrapperFirst}>
           <View style={styles.rowFirst}>
        <TouchableOpacity onPress={navigateToChagePassword}>                   
                   <View style={styles.row}>
                  
                     <Text style={styles.rowLabel}>Change Password </Text>
                     <View style={styles.rowSpacer} /> 
                       <FeatherIcon
                         color="#ababab"
                         name="chevron-right"
                         size={22}  onPress={navigateToChagePassword}
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
                    
                      <Text style={styles.rowLabel}>Two-factor authentication</Text>
                      <View style={styles.rowSpacer} />      

                        {/* <Text style={styles.rowValue}>private/public</Text>  */}
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


           <View style={styles.headingContainer1}>
        <Text style={styles.heading}>Security Checks </Text>
      </View>

      <View style={styles.centeredTextContainer}>
  <Text style={styles.rowValue1}>
  Review security issues by running checks across apps, devices and emails sent.
  </Text>
</View>

           <View style={styles.section} >
         
      
        <View style={styles.sectionBody}>
           <View style={styles.rowWrapperFirst}>
           <View style={styles.rowFirst}>
        <TouchableOpacity onPress={navigateToLikesNComments}>                   
                   <View style={styles.row}>
                  
                     <Text style={styles.rowLabel}>Where you're logged in</Text>
                     <View style={styles.rowSpacer} /> 
                       <FeatherIcon
                         color="#ababab"
                         name="chevron-right"
                         size={22}  onPress={navigateToLikesNComments}
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

                    
                      <Text style={styles.rowLabel}>Login Alerts </Text>
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




















           
           <View style={styles.rowWrapperLast}>
            <View style={styles.rowFirst}>
         <TouchableOpacity  onPress={navigateToLikesNComments}>                   
                    <View style={styles.row}>
                    
                      <Text style={styles.rowLabel}>Recent emails</Text>
                      <View style={styles.rowSpacer} />      

                        {/* <Text style={styles.rowValue}>private/public</Text>  */}
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
   paddingVertical: 5,
   
   
 },
 profile: {
  marginTop:15,
  padding: 12,
  backgroundColor: '#121212',
  borderBottomWidth:0,
  borderColor:'#121212',
  // flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
},
profileAvatar: {
  position:'relative'
},
profileName: {
  fontSize: 18,
  fontWeight: '600',
  color: '#ffffff',
},
profileAddress:{
  marginTop:5,
  fontSize:16,
  color:'#858585',
  textAlign:'center',
},
btn:{
  marginTop:10,
  
},
button: {
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 5,
  paddingHorizontal: 13,
  borderRadius: 15,
  borderLeftWidth:0.5,
  borderTopWidth:0.5,
  borderBottomWidth:0.5,
  borderColor:'#595959',
  elevation: 3,
  backgroundColor: '#262626',
},
text: {
  fontSize: 14,
  lineHeight: 21,
  fontWeight:'500',
  letterSpacing: 0.25,
  color: 'white',
},
section: {
  paddingHorizontal: 14,
  paddingVertical: 14,
},
sectionHeader: {
  padding: 8,
  paddingTop:10,
  paddingLeft: 12,
},
sectionHeaderText: {
  fontSize: 16,
  fontFamily: 'Helvetica',
  fontWeight: '500',
  color: 'white',
  textTransform: 'none',
  letterSpacing:0.2,
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
  borderBottomWidth: 0, 
  borderLeftWidth: 1.2,
  borderRightWidth: 1.2,
  borderTopLeftRadius:18,
  borderTopRightRadius:18,
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
marginTop:9,

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
rowValue: {
fontSize: 14,
color: '#ababab',
letterSpacing:0.5,
},

rowValue1: {
  fontSize: 16,
  color: '#ffffff',
  letterSpacing:0.5,
  paddingBottom:5,
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
sectionHeader1: {
  
padding: 8,
paddingLeft: 12,
},
rowLast: {
borderBottomLeftRadius: 12,
borderBottomRightRadius: 12,
},
accountIconContainer1: {
color:'#666666',
marginRight: 8,
alignItems:'baseline',
justifyContent:'center',
 

},
accountIcon: {
marginLeft:0,
marginRight: 10,
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
profileActionText: {
marginRight: 8,
fontSize: 15,
fontWeight: '600',
color: '#fff',
},
profileAction: {
marginTop: 16,
paddingVertical: 10,
paddingHorizontal: 16,
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
backgroundColor: '#007bff',
borderRadius: 12,
},
profileHandle: {
marginTop: 2,
fontSize: 16,
fontWeight: '400',
color: '#858585',
},
subSection:{
  
paddingVertical: 0,
},
title: {
fontSize: 24,
fontWeight: 'bold',
color: '#1f1f1f',
},
text: {
fontSize: 14,
lineHeight: 21,
fontWeight:'500',
letterSpacing: 0.25,
color: 'white',
},

header: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
paddingTop: 5,
},


centeredTextContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#121212', // Optional background color
  paddingHorizontal: 20, // Optional horizontal padding
},


headingContainer: {
  flex: 1,
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  paddingLeft:25,
},
headingContainer1: {
  flex: 1,
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  paddingLeft:25,
  paddingTop:15,
},
heading: {
  fontSize: 20,
  fontWeight: 'bold',
  color:'white',
  marginBottom: 10,
  alignItems:'left',
},
profileAddress:{
  marginTop:0,
  fontSize:16,
  color:'#858585',
  paddingVertical: 6, // Optional horizontal padding

},

rowTextContainer: {
  flex: 5,
  marginLeft: 10, // Optional left margin
  flexDirection: 'column',
  justifyContent: 'center',
},


});


 
