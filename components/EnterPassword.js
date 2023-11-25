import React from 'react';
import { View, ScrollView, Text, StyleSheet,Button,TouchableOpacity,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import  { useState } from 'react';
import { TextInput} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useRoute } from '@react-navigation/native';





export default function EnterPassword ()  {

    const route = useRoute();
    const Email = route.params?.Email || 'shaikzoyafgd4563@gmail.com';
const navigation = useNavigation(); 

const [Fullname, setFullName] = useState('');
const [Firstname, setFirstName] = useState('');
const [DOB, setDob] = useState('');


const handleFullNameChange = (text) => {
    setFullName(text);
  };

  const handleFirstNameChange = (text) => {
    setFirstName(text);
  };

  const handleDobChange = (text) => {
    setDob(text);
  };

    
  return(
    <ScrollView style={styles.container}>
      <SafeAreaView >
     

      <View style={styles.centeredTextContainer}>
  <Text style={styles.rowValue1}>
  You'll be logged out of all sessions except this one to protect your account if anyone is trying to gain access.



  </Text>
</View>
<View style={styles.centeredTextContainer}>
  <Text style={styles.rowValue1}>
  Your password must be at least six characters and should include a combination of numbers, letters and special characters (!$@%).
  </Text>
</View>
<View style={styles.scrollContent}>
<View style={styles.inputContainer}>
          <TextInput
            label="Current Password"
            style={styles.input}
            theme={{ colors: { text: 'white', primary: 'white' } }}
            value={Fullname}
            onChangeText={handleFullNameChange}
          />
        </View>

        

        <View style={styles.inputContainer}>
          <TextInput
            label="New Password"
            style={styles.input}
            theme={{ colors: { text: 'white', primary: 'white' } }}
            value={Firstname}
            onChangeText={handleFirstNameChange}
          />
        </View>

        
        <View style={styles.inputContainer}>
          <TextInput
            label="Retype New Password"
            style={styles.input}
            theme={{ colors: { text: 'white', primary: 'white' } }}
            value={DOB}
            onChangeText={handleDobChange}
          />
        </View>
        


           
</View>
      
<TouchableOpacity
  style={styles.button}
  
>
  <Text style={styles.buttonText}>Submit</Text>
</TouchableOpacity>
       


      </SafeAreaView>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  
  container: {
  
    flex: 1,
    
    backgroundColor: '#121212',
   paddingVertical: 5,
   
   
 },input: {
    backgroundColor: 'rgba(0, 0, 0, 2)',
  },

 scrollContent: {
    padding: 20,
    margin: 10,
    marginTop: 10,
  },
 inputContainer: {
    marginVertical: 10,
  },
  input: {
    backgroundColor: 'rgba(0, 0, 0, 2)',
  },
  button: {
    marginVertical: 20,
    marginHorizontal:30,
    backgroundColor: '#FF7966',
    borderRadius: 20,
    height: 50,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    marginTop:12,
    textAlign: 'center',
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
// button: {
//   alignItems: 'center',
//   justifyContent: 'center',
//   paddingVertical: 5,
//   paddingHorizontal: 13,
//   borderRadius: 15,
//   borderLeftWidth:0.5,
//   borderTopWidth:0.5,
//   borderBottomWidth:0.5,
//   borderColor:'#595959',
//   elevation: 3,
//   backgroundColor: '#262626',
// },
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
  borderBottomRightRadius: 18, 
  borderBottomLeftRadius: 18, 
  borderLeftWidth: 1.2,
  borderRightWidth: 1.2,
  borderTopLeftRadius:18,
  borderTopRightRadius:18,
 },
 rowFirst: {
  borderTopLeftRadius: 12,
  borderTopRightRadius: 12,
  padding:9,
  
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
marginTop:12,



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


 
