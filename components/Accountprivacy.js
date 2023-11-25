import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, Switch, TouchableOpacity,Image } from 'react-native';
import Modal from 'react-native-modal';
const Accountprivacy = () => {
  const [Privacy, setPrivacy] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showSwitchToPublicPopup, setShowSwitchToPublicPopup] = useState(false); // Corrected variable name
 
  const togglePrivacy = () => {
    if (!Privacy) {
      setShowPopup(true);
    } else {
        setShowSwitchToPublicPopup(true);    }
  };

  const switchToPrivate = () => {
    
    setShowPopup(false);
    setPrivacy(true);
  };


  const switchToPublic = () => {
    // You can add your logic to switch to a public account here
    // For now, let's just close the popup and toggle the switch
    setShowSwitchToPublicPopup(false);
    setPrivacy(false);
  };


  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.settingRow}>
          <Text style={styles.settingText}>Private account</Text>
          <Switch
            value={Privacy}
            onValueChange={togglePrivacy}
            trackColor={{
              false: 'grey',
              true: 'white',
            }}
            thumbColor={Privacy ? 'green' : 'gray'}
          />
        </View>
        <View style={styles.spacing}>
          <Text style={styles.rowValue1}>
            When your account is public, your profile and posts can be seen by anyone, on or off Instagram, even if they don't have an Instagram account.
          </Text>
        </View>
        <View style={styles.spacing}>
          <Text style={styles.rowValue1}>
            When your account is private, only the followers you approve can see what you share, including your photos, videos, hashtags, location pages, and your followers and following lists.
          </Text>
        </View>
      </View>

      {/* Popup */}
      <Modal
        isVisible={showPopup}
        onBackdropPress={() => setShowPopup(false)}
        swipeDirection="down"
        animationIn="slideInUp"
        animationOut="slideOutDown"
        backdropOpacity={0.1}

       
      >
        <View style={styles.popupContainer}>
        <View style={styles.popupContent}>

          <Text style={styles.popupTitle}>Switch to private account?</Text>

          <View style={styles.separatorLine} />
 <View>
    
     <View style={styles.imageRow}>
        <Image
          source={require('../assets/instareels.png')}
          style={{ width: 25, height: 25, marginRight: 10 }}
        />
        <Text style={styles.imageText}>Only your followers will be able to see your photos {'\n'} and videos</Text>
      </View>
            
      <View style={styles.imageRow}>
        <Image
          source={require('../assets/at-sign.png')}
          style={{ width: 25, height: 25, marginRight: 10 }}
        />
        <Text style={styles.imageText}>This won't change who can message , tag or{'\n'} @mention you won't be able to tag {'\n'}people who don't follow you</Text>
      </View>
     
     
     

          </View>

          <View style={styles.separatorLine} />


          <TouchableOpacity onPress={switchToPrivate} style={styles.popupButton}>
            <Text style={styles.popupButtonText}>Switch to private</Text>
          </TouchableOpacity>
        </View>
        </View>
      </Modal>

      <Modal
        isVisible={showSwitchToPublicPopup}
        onBackdropPress={() => setShowSwitchToPublicPopup(false)}
        swipeDirection="down"
        animationIn="slideInUp"
        animationOut="slideOutDown"
        backdropOpacity={0.1}
      >
        <View style={styles.popupContainer}>
          <View style={styles.popupContent}>
            <Text style={styles.popupTitle}>Switch to public account?</Text>
            <View style={styles.separatorLine} />

            <View>
    
    <View style={styles.imageRow}>
       <Image
         source={require('../assets/instareels.png')}
         style={{ width: 25, height: 25, marginRight: 10 }}
       />
       <Text style={styles.imageText}>Any one can see your posts,reels and stories {'\n'} and can use your original audio and text.</Text>
     </View>
           
     <View style={styles.imageRow}>
       <Image
         source={require('../assets/at-sign.png')}
         style={{ width: 25, height: 25, marginRight: 10 }}
       />
       <Text style={styles.imageText}>This won't change who can message , tag or{'\n'} @mention you .</Text>
     </View>
    
    
     <View style={styles.imageRow}>
       <Image
         source={require('../assets/sync-settings.png')}
         style={{ width: 25, height: 25, marginRight: 10 }}
       />
       <Text style={styles.imageText}>People can remix  your reels and download them{'\n'}
       as a part of a remix .you can change this settings
       </Text>
       
     </View>

    
         </View>
         <View style={styles.separatorLine} />


            <TouchableOpacity onPress={switchToPublic} style={styles.popupButton}>
              <Text style={styles.popupButtonText}>Switch to public</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    paddingVertical: 20,
    minHeight: 815,
  },
  rowValue1: {
    fontSize: 12,
    color: '#ffffff',
    letterSpacing: 0.5,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 0,
    marginLeft: 12,
    marginRight: 19,
  },
  settingText: {
    fontSize: 17,
    color: 'white',
  },
  spacing: {
    marginTop: 2,
    marginLeft: 12,
  },
  
  spacing2: {
    marginTop: 10,
  },
  popupContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop:500,
  },
  popupTitle: {
    fontSize: 20,
    color: 'white',
    marginVertical: 20,
  },
  popupButton: {
    backgroundColor: 'skyblue',
    padding: 10,
    width:'100%',
    borderRadius:10,
  },
  popupButtonText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  popupContent: {
    backgroundColor: '#262626',
    borderColor:'white',
    borderColor:'blue',
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    padding: 30,
    alignItems: 'center',
    width: '108%',
  },
  separator: {
    height: 0,
    marginBottom:10,

  },
  separatorLine: {
  width: '110%', 
  height: 0.5, 
  backgroundColor: 'white',
  marginBottom:20,

},

imageRow: {
    flexDirection: 'row',
    marginBottom:10,
  },
  imageText: {
    fontSize: 14,
    color: 'white',
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  
 
  
});

export default Accountprivacy;
