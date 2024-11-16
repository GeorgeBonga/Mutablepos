import React from 'react';
import { Image } from 'react-native';

export default function Logo() {
  return (
    <Image
      source={require('../assets/logo.png')}
      className="w-28 h-28 mb-2 md:w-32 md:h-32 lg:w-40 lg:h-40"
      resizeMode="contain"
    />
  );
}
