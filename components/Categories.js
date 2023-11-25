import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Categories = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCategories, setFilteredCategories] = useState([]);

  useEffect(() => {
    // Filter categories based on the search query
    const filtered = categories.filter((category) =>
      category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCategories(filtered);
  }, [searchQuery]);

  const navigateToProfiletype = () => {
    navigation.navigate('Profiletype');
  };

  const handleCategoryChange = (newValue) => {
    setSelectedCategory(newValue);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const categories = [
    'Artist',
    'Musician/band',
    'Blogger',
    'Clothing(Brand)',
    'Community',
    'Digital creator',
    'Education',
    'Entrepreneur',
    'Health/Beauty',
    'Editor',
    'Writer',
    'Personal blog',
    'Product/Service',
    'Gamer',
    'Restaurant',
    'Beauty, cosmetic & personal care',
    'Grocery store',
    'Photographer',
    'Shopping & retail',
    'Video creator',
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>What best describes you?</Text>
      </View>

      <View style={styles.spacing}>
        <Text style={styles.rowValue1}>
          Categories help people find accounts like yours {'\n'}
          you can change this at any time
        </Text>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionBody}>
          <View style={styles.spacing}>
            <View style={styles.rowWrapperFirst}>
              <View style={styles.rowFirst}>
                <View style={styles.row}>
                  <View style={styles.accountIconContainer}>
                    <Image source={require('../assets/Search.png')} style={{ width: 25, height: 25 }} />
                  </View>
                  <View style={styles.rowTextContainer}>
                    <TextInput
                      placeholder="Search categories"
                      style={styles.searchInput}
                      value={searchQuery}
                      onChangeText={handleSearch}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.sectionHeader1}>
        <Text style={styles.sectionHeaderText}>Suggested</Text>
      </View>

      <ScrollView>
        <View style={styles.radioContainer}>
          <RadioButton.Group onValueChange={handleCategoryChange} value={selectedCategory}>
            {filteredCategories.map((option, index) => (
              <View key={index} style={styles.radioButton}>
                <Text style={styles.radioButtonText}>{option}</Text>
                <RadioButton value={option} color="#ffffff" />
              </View>
            ))}
          </RadioButton.Group>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.Button, { backgroundColor: selectedCategory ? 'skyblue' : 'gray' }]}
          disabled={!selectedCategory}
          onPress={navigateToProfiletype}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // ... Other styles
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingVertical: 20,
  },
  headingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 25,
    fontWeight: 'normal',
    color: 'white',
  },
  rowValue1: {
    fontSize: 14,
    color: '#ffffff',
    letterSpacing: 0.5,
    justifyContent: 'center',
    textAlign: 'center',
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
    marginTop: 10,
  },
  rowWrapperFirst: {
    paddingLeft: 15,
    borderTopWidth: 1.2,
    borderColor: '#4C4C4C',
    backgroundColor: '#262626',
    borderBottomWidth: 1.2,
    borderLeftWidth: 1.2,
    borderRightWidth: 1.2,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomRightRadius: 18,
    borderBottomLeftRadius: 18,
  },
  rowFirst: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  row: {
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 13,
    paddingRight: 12,
    paddingBottom: 13,
    paddingLeft: 0,
  },
  accountIconContainer: {
    color: '#666666',
    marginRight: 8,
    alignItems: 'center',
  },
  rowTextContainer: {
    flex: 5,
    marginLeft: 10,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  profileAddress1: {
    marginTop: 0,
    fontSize: 16,
    color: 'gray',
    paddingVertical: 6,
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  sectionHeader1: {
    padding: 8,
    paddingLeft: 18,
  },
  sectionHeaderText: {
    fontSize: 16,
    fontFamily: 'Helvetica',
    fontWeight: '500',
    color: 'white',
    textTransform: 'none',
    letterSpacing: 0.2,
  },
  radioContainer: {
    paddingHorizontal: 16,
    marginTop: 10,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  radioButtonText: {
    fontSize: 16,
    color: '#ffffff',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },

  Button: {
    backgroundColor: 'skyblue',
    padding: 10,
    width: '90%',
    borderRadius: 10,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },

  searchInput: {
    color: '#ffffff',
    fontSize: 16,
    flex: 1,
  },
});

export default Categories;
