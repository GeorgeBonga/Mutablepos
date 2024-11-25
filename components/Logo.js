import React from 'react';
import { Image } from 'react-native';

export default function Logo() {
  return (
    <Image
      source={require('../assets/mlogo.png')}
      className="w-64 h-64 mb-2 md:w-48 md:h-48 lg:w-56 lg:h-56"
      resizeMode="contain"
    />
  );
}
