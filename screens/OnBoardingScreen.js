import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';

export default function OnBoardingScreen({ navigation }) {
  const swiperRef = useRef(null); // Swiper reference
  const [index, setIndex] = useState(0); // Track the current index

  const handleSkip = () => {
    navigation.navigate('StartScreen'); // Navigate to Register screen
  };

  const handleNext = () => {
   
      swiperRef.current.scrollBy(1);
 
  };
  const handleGetStarted =()=>{
    navigation.navigate('StartScreen');

  }

  return (
    <Background>
      <Swiper
        ref={swiperRef} // Attach the swiper reference
        style={styles.wrapper}
        loop={false}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
        paginationStyle={styles.pagination} // Ensures dots stay at the bottom without affecting slides
        scrollEnabled // Enables smooth, swipe-only transitions without stacking
      
       
      >
        {/* Slide 1 */}
        <View style={styles.slide}>
          <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
          <Logo />
          <Header className="text-lg font-semibold text-gray-600 mb-4">Welcome to MutableTech POS</Header>
          <Paragraph>The easiest way to manage your sales and track products.</Paragraph>
          <Button style={styles.nextButton} mode="contained" onPress={handleNext}>Next</Button>
        </View>

        {/* Slide 2 */}
        <View style={styles.slide}>
          <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
          <Logo />
          <Header className="text-lg font-semibold text-gray-600 mb-4">Manage Products</Header>
          <Paragraph>Organize, track, and manage your inventory with ease.</Paragraph>
          <Button style={styles.nextButton} mode="contained" onPress={handleNext}>Next</Button>
        </View>

        {/* Slide 3 */}
        <View style={styles.slide}>
          <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
          <Logo />
          <Header className="text-lg font-semibold text-gray-600 mb-4">Get Started</Header>
          <Paragraph>Let's get you set up and ready to go in minutes.</Paragraph>
          <Button style={styles.nextButton} mode="contained" onPress={handleGetStarted}>Get Started</Button>
        </View>
      </Swiper>
    </Background>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  skipButton: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  skipText: {
    fontSize: 16,
    color: '#1d4ed8',
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: '#1d4ed8',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
    
  },
  nextButton: {
    marginTop: 20,
  },
});


