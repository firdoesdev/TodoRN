import { Image, StyleSheet, Platform, TouchableOpacity, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ImageViewer from '@/components/ImageViewer'
import { useState } from 'react';

export default function HomeScreen() {
    const [visible, setVisible] = useState(false)

    function toggleVisible(){
        setVisible(prevState => !prevState)
    }
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Preview Images</ThemedText>
        
      </ThemedView>
      <ImageViewer visible={visible} onSwipeDown={toggleVisible}/>
      <TouchableOpacity onPress={toggleVisible} style={styles.button}>
        <Text>Show Image</Text>
      </TouchableOpacity>
  
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  button:{
    padding: 15,
    backgroundColor: '#2196F3',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});
