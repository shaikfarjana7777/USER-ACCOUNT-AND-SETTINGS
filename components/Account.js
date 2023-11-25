import React from 'react';
import { View, ScrollView, Text, StyleSheet,Button,TouchableOpacity,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import  { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useRoute } from '@react-navigation/native';









const Account = () => {
const route = useRoute();
const Email = route.params?.Email || 'shaikzoyafgd4563@gmail.com';
const Fullname = route.params?.Fullname || 'Default Fullname';

const navigation = useNavigation(); 


const navigateToLikesNComments = () => {
  navigation.navigate('LikesandShare');
}

const navigateToProfiles=()=>{
  navigation.navigate('Profiles',{Email,Fullname})
}

const navigateToConnectedexperience = () => {
  navigation.navigate('Connectedexperience');
}

const navigateToUrinfoNpermissions = () => {
  navigation.navigate('UrinfoNpermissions');
}

const navigateToAccountprivacy = () => {
  
navigation.navigate('Accountprivacy');
}

const navigateToAccounttype = () => {
  navigation.navigate('Accounttype');
}

const navigateToPasswordnSecurity = () => {
  navigation.navigate('PasswordnSecurity');
}


const navigateToPersonalDetails= () => {
  navigation.navigate('PersonalDetails');
}



    
  return(
    <ScrollView>
      <SafeAreaView style={styles.container} >

      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Accounts Center </Text>
      </View>


<View style={styles.spacing}>
  <Text style={styles.rowValue1}>
  Manage your connected experience and account {'\n'} 
  settings across Meta technologies such as{'\n'}   
     Synthiem, Facebook, and Instagram
  </Text>
</View>

      <View style={styles.section} >
        
        
 
    <View style={styles.sectionBody}>
        <View style={styles.rowWrapperFirst}>
        <View style={styles.rowFirst}>
            <TouchableOpacity onPress={navigateToProfiles}>                   
              <View style={styles.row}>
                 <View style={styles.accountIconContainer}>
                 <Image source={{uri:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"}}  
                 style={{  width: 50,
                 height: 50,
                 backgroundColor: 'white',
                 borderRadius: 9999,}} 
                 ></Image>

                  </View>
                  <View style={styles.rowTextContainer}>
              <Text style={styles.rowLabel}>Profiles</Text>
              <Text style={styles.profileAddress}>{Email}</Text>
            </View>
                      <View style={styles.rowSpacer} />                      
                        <FeatherIcon
                          color="#ababab"
                          name="chevron-right"
                          size={22} onPress={navigateToProfiles}
                        />      
                      </View>
                  </TouchableOpacity>
               </View>
           </View>
           
           
           <View style={styles.rowWrapperLast}>
            <View style={styles.rowFirst}>
         <TouchableOpacity onPress={navigateToConnectedexperience}>                   
                    <View style={styles.row}>
                    <View style={styles.accountIconContainer}>
                      
                    <Image
          source={require('../assets/connection.png')}
          style={{ width: 25, height: 25 }}
        />
                    
            </View>
                      <Text style={styles.rowLabel}>Connected Experience</Text>
                      <View style={styles.rowSpacer} />  

                        <FeatherIcon
                          color="#ababab"
                          name="chevron-right"
                          size={22} onPress={navigateToConnectedexperience}
                        />      
                      </View>
                                 
               </TouchableOpacity>
               </View>
           </View>
           </View>
           </View>

           <View style={styles.section} >
          <View style={styles.sectionHeader1}>
          <Text style={styles.sectionHeaderText}>Account settings</Text>
          </View>
      
        <View style={styles.sectionBody}>
           <View style={styles.rowWrapperFirst}>
           <View style={styles.rowFirst}>
        <TouchableOpacity onPress={navigateToPasswordnSecurity}>                   
                   <View style={styles.row}>
                   <View style={styles.accountIconContainer}>
                   <Image
                       source={require('../assets/security.png')}
                       style={{ width: 25, height: 25 }}
                       />
                   </View>
                     <Text style={styles.rowLabel}>Password and security</Text>
                     <View style={styles.rowSpacer} /> 
                       <FeatherIcon
                         color="#ababab"
                         name="chevron-right"
                         size={22}  onPress={navigateToPasswordnSecurity}
                         style={{ paddingRight: 7}}
                       />      
                     </View>
                     </TouchableOpacity>
               </View>
           </View>
           
           <View style={styles.rowWrapper}>
            <View style={styles.rowFirst}>
         <TouchableOpacity onPress={navigateToPersonalDetails}>                   
                    <View style={styles.row}>

                    <View style={styles.accountIconContainer}>
                    <Image
                       source={require('../assets/personaldetails.png')}
                       style={{ width: 25, height: 25 }}
                       />
                   
                      
              </View>
                      <Text style={styles.rowLabel}>Personal Details </Text>
                      <View style={styles.rowSpacer} />                      
                        <FeatherIcon
                          color="#ababab"
                          name="chevron-right"
                          size={22}
                          onPress={navigateToPersonalDetails}
                          style={{ paddingRight: 7}}
                        />       
                      </View>
                      </TouchableOpacity>
               </View>
           </View>
           <View style={styles.rowWrapper}>
            <View style={styles.rowFirst}>
         <TouchableOpacity  onPress={navigateToUrinfoNpermissions}>                   
                    <View style={styles.row}>
                    <View style={styles.accountIconContainer}>
                    <Image
                       source={require('../assets/info.png')}
                       style={{ width: 24, height: 24 }}
                       />
                      
                      
              </View>
                      <Text style={styles.rowLabel}>Your information and permissions</Text>
                      <View style={styles.rowSpacer} />      

                        <FeatherIcon
                          color="#ababab"
                          name="chevron-right"
                          size={22}
                          onPress={navigateToUrinfoNpermissions}
                          style={{ paddingRight: 7}}
                        />      
                      </View>          
                                </TouchableOpacity>
               </View>
           </View>

           <View style={styles.rowWrapper}>
            <View style={styles.rowFirst}>
         <TouchableOpacity  onPress={navigateToLikesNComments}>                   
                    <View style={styles.row}>
                    <View style={styles.accountIconContainer}>
                      
                    <Image
                       source={require('../assets/Adpreference.png')}
                       style={{ width: 24, height: 24 }}
                       />
              </View>
                      <Text style={styles.rowLabel}>Ad preference</Text>
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


           <View style={styles.rowWrapper}>
            <View style={styles.rowFirst}>
         <TouchableOpacity  onPress={navigateToLikesNComments}>                   
                    <View style={styles.row}>
                  <View style={styles.accountIconContainer1}>
                  <Image
                       source={require('../assets/payment.png')}
                       style={{ width: 25, height: 25 }}
                       />
              </View>  
     
              <Text style={styles.rowLabel}>Payments</Text>
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
         <TouchableOpacity  onPress={navigateToAccountprivacy}>                   
                    <View style={styles.row}>
                    <View style={styles.accountIconContainer}>
                    <Image
                       source={require('../assets/acprivacy.png')}
                       style={{ width: 25, height: 25 }}
                       />
                      
                      
              </View>
                      <Text style={styles.rowLabel}>Account privacy</Text>
                      <View style={styles.rowSpacer} />      

                        <Text style={styles.rowValue}>private/public</Text> 
                        <FeatherIcon
                          color="#ababab"
                          name="chevron-right"
                          size={22}
                          onPress={navigateToAccountprivacy}
                          style={{ paddingRight: 7}}
                        />      
                      </View>          
                                </TouchableOpacity>
               </View>
           </View>
           </View>
           </View>


          



           <View style={styles.section} >
        
        
           <View style={styles.sectionHeader1}>
          <Text style={styles.sectionHeaderText}>For proffessionals</Text>
          </View>
        <View style={styles.sectionBody}>
            <View style={styles.rowWrapperFirst}>
            <View style={styles.rowFirst}>
                <TouchableOpacity onPress={navigateToAccounttype}>                   
                  <View style={styles.row}>
                     <View style={styles.accountIconContainer}>
                     <Image
                       source={require('../assets/account.png')}
                       style={{ width: 25, height: 25 }}
                       />
                      
    
                      </View>
                      <Text style={styles.rowLabel}>Account types</Text>
                          <View style={styles.rowSpacer} />                      
                            <FeatherIcon
                              color="#ababab"
                              name="chevron-right"
                              size={22} onPress={navigateToAccounttype}
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
                          <Text style={styles.rowLabel1}>Add more accounts</Text>
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
  paddingVertical: 12,
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
marginTop:5,

},
rowLabel1: {
  fontSize: 17.6,
  color: '#4682B4',
  fontStyle:'normal',
  
  },
  spacing: {
    marginLeft:12,
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
  justifyContent: 'center',
  alignItems: 'center',
},
heading: {
  fontSize: 25,
  fontWeight: 'normal',
  color:'white',
  marginBottom: 10,
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


export default Account;
