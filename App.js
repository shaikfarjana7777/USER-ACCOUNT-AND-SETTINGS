import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,TouchableOpacity ,View,ScrollView,SafeAreaView,Switch } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import SettingsScreen from './settings_screens/settings';
import LikesAndShare from './settings_screens/likesNdShare';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import YourPhotos from './settings_screens/yourPhotos';
import FirstPostNStories from './settings_screens/firstPostNStories';
import Editprofile from './settings_screens/Editprofile';
import Notifications from './settings_screens/notifications';
import Account from './settings_screens/Account';
import Profiles from './settings_screens/Profiles'
import Userdetails from './settings_screens/Userdetails';
import Name from './settings_screens/Name';
import Username from './settings_screens/Username';
import Connectedexperience from './settings_screens/Connectedexperience';
import Sharingacrossprofiles from './settings_screens/Sharingacrossprofiles';
import Loggingwithaccounts from './settings_screens/Loggingwithaccounts';
import AddNloginaccounts from './settings_screens/AddNloginaccounts';
import UrinfoNpermissions from './settings_screens/UrinfoNpermissions';
import Downloadinfo from './settings_screens/Downloadinfo';
import Transferinfo from './settings_screens/Tranferinfo';
import Uploadcontacts from './settings_screens/uploadcontacts';
import Accountprivacy from './settings_screens/Accountprivacy';
import Accounttype from './settings_screens/Accounttype';
import Categories from './settings_screens/Categories';
import Profiletype from './settings_screens/profiletype';
import PasswordnSecurity from './settings_screens/PasswordnSecurity';
import PersonalDetails from './settings_screens/PersonalDetails';
import ChangePassword from './settings_screens/changePassword';
import EnterPassword from './settings_screens/EnterPassword';
import ContactInfo from './settings_screens/ContactInfo';

const Stack = createStackNavigator();

export default function App() {
  return(
    

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={({ navigation }) => ({
            headerTitle: 'Settings',
            headerTitleStyle: {
              fontSize: 20,
              color:"#ffffff",
              
            },
            headerStyle: {
              backgroundColor: '#121212', 
              borderBottomWidth:0,
              
            },
            headerTitleAlign: 'center',
            

            headerLeft: () => (
              <Icon
                name="chevron-left"
                size={20}
                color="#ffffff"
                style={{ marginLeft: 15,fontWeight: 'normal' }}
                onPress={() => navigation.goBack()}
              />
            )
           
          })}
        />
        <Stack.Screen name="LikesandShare" component={LikesAndShare} />
        <Stack.Screen name="YourPhotos" component={YourPhotos} />
        <Stack.Screen name="FirstPostNStories" component={FirstPostNStories} />
        
        <Stack.Screen
          name="Account"
          component={Account}
          options={({ navigation }) => ({
            headerTitle: 'Account',
            headerTitleStyle: {
              fontSize: 20,
              color:"#ffffff",
              
            },
            headerStyle: {
              backgroundColor: '#121212', 
              borderBottomWidth:0,
              
            },
            headerTitleAlign: 'center',
            

            headerLeft: () => (
              <Icon
                name="chevron-left"
                size={20}
                color="#ffffff"
                style={{ marginLeft: 15,fontWeight: 'normal' }}
                onPress={() => navigation.goBack()}
              />
            )
           
          })}
        />
        
        
        <Stack.Screen
          name="Editprofile"
          component={Editprofile}
          options={({ navigation }) => ({
            headerTitle: 'Edit Profile',
            headerTitleStyle: {
              fontSize: 20,
              color:"#ffffff",
              
            },
            headerStyle: {
              backgroundColor: '#121212', 
              borderBottomWidth:0,
              
            },
            headerTitleAlign: 'center',
            

            headerLeft: () => (
              <Icon
                name="chevron-left"
                size={20}
                color="#ffffff"
                style={{ marginLeft: 15,fontWeight: 'normal' }}
                onPress={() => navigation.goBack()}
              />


              
            )
           
          })}
        />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={({ navigation }) => ({
            headerTitle: 'Notifications',
            headerTitleStyle: {
              fontSize: 20,
              color:"#666666",
              
            },
            headerStyle: {
              backgroundColor: '#121212', 
              borderBottomWidth:0,
              
            },
            headerTitleAlign: 'center',
            

            headerLeft: () => (
              <Icon
                name="chevron-left"
                size={20}
                color="#666666"
                style={{ marginLeft: 15,fontWeight: 'normal' }}
                onPress={() => navigation.goBack()}
              />
               )
           
          })}
        />
         <Stack.Screen
          name="Profiles"
          component={Profiles}
          options={({ navigation }) => ({
            headerTitle: '  ',
            headerTitleStyle: {
              fontSize: 20,
              color:"#ffffff",
              
            },
            headerStyle: {
              backgroundColor: '#121212', 
              borderBottomWidth:0,
              
            },
            headerTitleAlign: 'center',
            

            headerLeft: () => (
              <Icon
                name="chevron-left"
                size={20}
                color="#ffffff"
                style={{ marginLeft: 15,fontWeight: 'normal' }}
                onPress={() => navigation.goBack()}
              />
            )
           
          })}
        />
<Stack.Screen
          name="Userdetails"
          component={Userdetails}
          options={({ navigation }) => ({
            headerTitle: '  ',
            headerTitleStyle: {
              fontSize: 20,
              color:"#ffffff",
              
            },
            headerStyle: {
              backgroundColor: '#121212', 
              borderBottomWidth:0,
              
            },
            headerTitleAlign: 'center',
            

            headerLeft: () => (
              <Icon
                name="chevron-left"
                size={20}
                color="#ffffff"
                style={{ marginLeft: 15,fontWeight: 'normal' }}
                onPress={() => navigation.goBack()}
              />
            )
           
          })}
        />


<Stack.Screen
          name="Name"
          component={Name}
          options={({ navigation }) => ({
            headerTitle: '  ',
            headerTitleStyle: {
              fontSize: 20,
              color:"#ffffff",
              
            },
            headerStyle: {
              backgroundColor: '#121212', 
              borderBottomWidth:0,
              
            },
            headerTitleAlign: 'center',
            

            headerLeft: () => (
              <Icon
                name="chevron-left"
                size={20}
                color="#ffffff"
                style={{ marginLeft: 15,fontWeight: 'normal' }}
                onPress={() => navigation.goBack()}
              />
            )
           
          })}
        />

<Stack.Screen
          name="Username"
          component={Username}
          options={({ navigation }) => ({
            headerTitle: '  ',
            headerTitleStyle: {
              fontSize: 20,
              color:"#ffffff",
              
            },
            headerStyle: {
              backgroundColor: '#121212', 
              borderBottomWidth:0,
              
            },
            headerTitleAlign: 'center',
            

            headerLeft: () => (
              <Icon
                name="chevron-left"
                size={20}
                color="#ffffff"
                style={{ marginLeft: 15,fontWeight: 'normal' }}
                onPress={() => navigation.goBack()}
              />
            )
           
          })}
        />


<Stack.Screen
          name="Connectedexperience"
          component={Connectedexperience}
          options={({ navigation }) => ({
            headerTitle: '',
            headerTitleStyle: {
              fontSize: 20,
              color:"#ffffff",
              
            },
            headerStyle: {
              backgroundColor: '#121212', 
              borderBottomWidth:0,
              
            },
            headerTitleAlign: 'center',
            

            headerLeft: () => (
              <Icon
                name="chevron-left"
                size={20}
                color="#ffffff"
                style={{ marginLeft: 15,fontWeight: 'normal' }}
                onPress={() => navigation.goBack()}
              />
  )
           
          })}
        />


<Stack.Screen
          name="Sharingacrossprofiles"
          component={Sharingacrossprofiles}
          options={({ navigation }) => ({
            headerTitle: '',
            headerTitleStyle: {
              fontSize: 20,
              color:"#ffffff",
              
            },
            headerStyle: {
              backgroundColor: '#121212', 
              borderBottomWidth:0,
              
            },
            headerTitleAlign: 'center',
            

            headerLeft: () => (
              <Icon
                name="chevron-left"
                size={20}
                color="#ffffff"
                style={{ marginLeft: 15,fontWeight: 'normal' }}
                onPress={() => navigation.goBack()}
              />
  )
           
          })}
        />

<Stack.Screen
          name="Loggingwithaccounts"
          component={Loggingwithaccounts}
          options={({ navigation }) => ({
            headerTitle: '',
            headerTitleStyle: {
              fontSize: 20,
              color:"#ffffff",
              
            },
            headerStyle: {
              backgroundColor: '#121212', 
              borderBottomWidth:0,
              
            },
            headerTitleAlign: 'center',
            
           headerLeft: () => (
              <Icon
                name="chevron-left"
                size={20}
                color="#ffffff"
                style={{ marginLeft: 15,fontWeight: 'normal' }}
                onPress={() => navigation.goBack()}
              />
  )  
          })}
        />


<Stack.Screen
          name="AddNloginaccounts"
          component={AddNloginaccounts}
          options={({ navigation }) => ({
            headerTitle: '',
            headerTitleStyle: {
              fontSize: 20,
              color:"#ffffff",
              
            },
            headerStyle: {
              backgroundColor: '#121212', 
              borderBottomWidth:0,
              
            },
            headerTitleAlign: 'center',
            
           headerLeft: () => (
              <Icon
                name="chevron-left"
                size={20}
                color="#ffffff"
                style={{ marginLeft: 15,fontWeight: 'normal' }}
                onPress={() => navigation.goBack()}
              />
  )  
          })}
        />

<Stack.Screen
          name="UrinfoNpermissions"
          component={UrinfoNpermissions}
          options={({ navigation }) => ({
            headerTitle: '',
            headerTitleStyle: {
              fontSize: 20,
              color:"#ffffff",
              
            },
            headerStyle: {
              backgroundColor: '#121212', 
              borderBottomWidth:0,
              
            },
            headerTitleAlign: 'center',
            
           headerLeft: () => (
              <Icon
                name="chevron-left"
                size={20}
                color="#ffffff"
                style={{ marginLeft: 15,fontWeight: 'normal' }}
                onPress={() => navigation.goBack()}
              />
  )  
          })}
        />


<Stack.Screen
          name="Downloadinfo"
          component={Downloadinfo}
          options={({ navigation }) => ({
            headerTitle: '',
            headerTitleStyle: {
              fontSize: 20,
              color:"#ffffff",
              
            },
            headerStyle: {
              backgroundColor: '#121212', 
              borderBottomWidth:0,
              
            },
            headerTitleAlign: 'center',
            
           headerLeft: () => (
              <Icon
                name="chevron-left"
                size={20}
                color="#ffffff"
                style={{ marginLeft: 15,fontWeight: 'normal' }}
                onPress={() => navigation.goBack()}
              />
  )  
          })}
        />



<Stack.Screen
          name="Transferinfo"
          component={Transferinfo}
          options={({ navigation }) => ({
            headerTitle: '',
            headerTitleStyle: {
              fontSize: 20,
              color:"#ffffff",
              
            },
            headerStyle: {
              backgroundColor: '#121212', 
              borderBottomWidth:0,
              
            },
            headerTitleAlign: 'center',
            
           headerLeft: () => (
              <Icon
                name="chevron-left"
                size={20}
                color="#ffffff"
                style={{ marginLeft: 15,fontWeight: 'normal' }}
                onPress={() => navigation.goBack()}
              />
  )  
          })}
        />

<Stack.Screen
          name="Uploadcontacts"
          component={Uploadcontacts}
          options={({ navigation }) => ({
            headerTitle: '',
            headerTitleStyle: {
              fontSize: 20,
              color:"#ffffff",
              
            },
            headerStyle: {
              backgroundColor: '#121212', 
              borderBottomWidth:0,
              
            },
            headerTitleAlign: 'center',
            
           headerLeft: () => (
              <Icon
                name="chevron-left"
                size={20}
                color="#ffffff"
                style={{ marginLeft: 15,fontWeight: 'normal' }}
                onPress={() => navigation.goBack()}
              />
  )  
          })}
        />


<Stack.Screen
          name="Accountprivacy"
          component={Accountprivacy}
          options={({ navigation }) => ({
            headerTitle: 'Account privacy',
            headerTitleStyle: {
              fontSize: 20,
              color:"#ffffff",
              
            },
            headerStyle: {
              backgroundColor: '#121212', 
              borderBottomWidth:0,
              
            },
            headerTitleAlign: 'center',
            
           headerLeft: () => (
              <Icon
                name="chevron-left"
                size={20}
                color="#ffffff"
                style={{ marginLeft: 15,fontWeight: 'normal' }}
                onPress={() => navigation.goBack()}
              />
  )  
          })}
        />


<Stack.Screen
          name="Accounttype"
          component={Accounttype}
          options={({ navigation }) => ({
            headerTitle: 'Account type',
            headerTitleStyle: {
              fontSize: 20,
              color:"#ffffff",
              
            },
            headerStyle: {
              backgroundColor: '#121212', 
              borderBottomWidth:0,
              
            },
            headerTitleAlign: 'center',
            
           headerLeft: () => (
              <Icon
                name="chevron-left"
                size={20}
                color="#ffffff"
                style={{ marginLeft: 15,fontWeight: 'normal' }}
                onPress={() => navigation.goBack()}
              />
  )  
          })}
        />


<Stack.Screen
          name="Categories"
          component={Categories}
          options={({ navigation }) => ({
            headerTitle: ' ',
            headerTitleStyle: {
              fontSize: 20,
              color:"#ffffff",
              
            },
            headerStyle: {
              backgroundColor: '#121212', 
              borderBottomWidth:0,
              
            },
            headerTitleAlign: 'center',
            
           headerLeft: () => (
              <Icon
                name="chevron-left"
                size={20}
                color="#ffffff"
                style={{ marginLeft: 15,fontWeight: 'normal' }}
                onPress={() => navigation.goBack()}
              />
  )  
          })}
        />

<Stack.Screen
          name="Profiletype"
          component={Profiletype}
          options={({ navigation }) => ({
            headerTitle: ' ',
            headerTitleStyle: {
              fontSize: 20,
              color:"#ffffff",
              
            },
            headerStyle: {
              backgroundColor: '#121212', 
              borderBottomWidth:0,
              
            },
            headerTitleAlign: 'center',
            
           headerLeft: () => (
              <Icon
                name="chevron-left"
                size={20}
                color="#ffffff"
                style={{ marginLeft: 15,fontWeight: 'normal' }}
                onPress={() => navigation.goBack()}
              />
  )  
          })}
        />

<Stack.Screen
          name="PasswordnSecurity"
          component={PasswordnSecurity}
          options={({ navigation }) => ({
            headerTitle: ' Password and security',
            headerTitleStyle: {
              fontSize: 20,
              color:"#ffffff",
              
            },
            headerStyle: {
              backgroundColor: '#121212', 
              borderBottomWidth:0,
              
            },
            headerTitleAlign: 'center',
            
           headerLeft: () => (
              <Icon
                name="chevron-left"
                size={20}
                color="#ffffff"
                style={{ marginLeft: 15,fontWeight: 'normal' }}
                onPress={() => navigation.goBack()}
              />
  )  
          })}
        />

<Stack.Screen
          name="PersonalDetails"
          component={PersonalDetails}
          options={({ navigation }) => ({
            headerTitle: 'Personal Details ',
            headerTitleStyle: {
              fontSize: 20,
              color:"#ffffff",
              
            },
            headerStyle: {
              backgroundColor: '#121212', 
              borderBottomWidth:0,
              
            },
            headerTitleAlign: 'center',
            
           headerLeft: () => (
              <Icon
                name="chevron-left"
                size={20}
                color="#ffffff"
                style={{ marginLeft: 15,fontWeight: 'normal' }}
                onPress={() => navigation.goBack()}
              />
  )  
          })}
        />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={({ navigation }) => ({
            headerTitle: ' ChangePassword ',
            headerTitleStyle: {
              fontSize: 20,
              color:"#ffffff",
              
            },
            headerStyle: {
              backgroundColor: '#121212', 
              borderBottomWidth:0,
              
            },
            headerTitleAlign: 'center',
            
           headerLeft: () => (
              <Icon
                name="chevron-left"
                size={20}
                color="#ffffff"
                style={{ marginLeft: 15,fontWeight: 'normal' }}
                onPress={() => navigation.goBack()}
              />


              
  )  
          })}
        />

<Stack.Screen
          name="EnterPassword"
          component={EnterPassword}
          options={({ navigation }) => ({
            headerTitle: ' EnterPassword ',
            headerTitleStyle: {
              fontSize: 20,
              color:"#ffffff",
              
            },
            headerStyle: {
              backgroundColor: '#121212', 
              borderBottomWidth:0,
              
            },
            headerTitleAlign: 'center',
            
           headerLeft: () => (
              <Icon
                name="chevron-left"
                size={20}
                color="#ffffff"
                style={{ marginLeft: 15,fontWeight: 'normal' }}
                onPress={() => navigation.goBack()}
              />


              
  )  
          })}
        />

<Stack.Screen
          name="ContactInfo"
          component={ContactInfo}
          options={({ navigation }) => ({
            headerTitle: ' ContactInfo ',
            headerTitleStyle: {
              fontSize: 20,
              color:"#ffffff",
              
            },
            headerStyle: {
              backgroundColor: '#121212', 
              borderBottomWidth:0,
              
            },
            headerTitleAlign: 'center',
            
           headerLeft: () => (
              <Icon
                name="chevron-left"
                size={20}
                color="#ffffff"
                style={{ marginLeft: 15,fontWeight: 'normal' }}
                onPress={() => navigation.goBack()}
              />


              
  )  
          })}
        />
      </Stack.Navigator>


      
    </NavigationContainer>

  );
}


