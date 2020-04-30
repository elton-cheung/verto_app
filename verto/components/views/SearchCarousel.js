import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import {Card} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
//carousel element with search icons
function SearchCarousel() {
    return (
      <SafeAreaView style={styles.carousel}>
        <ScrollView
          style={styles.scrollView}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.searchIcon}>
            <Image
              source={require('verto/assets/search_icons/search_home.png')}
            />
            <Text style={styles.searchName}>Home</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.searchIcon}>
            <Image
              source={require('verto/assets/search_icons/search_clothing.png')}
            />
            <Text style={styles.searchName}>Clothing</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.searchIcon}>
            <Image
              source={require('verto/assets/search_icons/search_accessories.png')}
            />
            <Text style={styles.searchName}>Accessories</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.searchIcon}>
            <Image
              source={require('verto/assets/search_icons/search_entertainment.png')}
            />
            <Text style={styles.searchName}>Entertainment</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.searchIcon}>
            <Image
              source={require('verto/assets/search_icons/search_books.png')}
            />
            <Text style={styles.searchName}>Books</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.searchIcon}>
            <Image
              source={require('verto/assets/search_icons/search_electronics.png')}
            />
            <Text style={styles.searchName}>Electronics</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.searchIcon}>
            <Image
              source={require('verto/assets/search_icons/search_experiences.png')}
            />
            <Text style={styles.searchName}>Experiences</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.searchIcon}>
            <Image
              source={require('verto/assets/search_icons/search_sports.png')}
            />
            <Text style={styles.searchName}>Sports</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }