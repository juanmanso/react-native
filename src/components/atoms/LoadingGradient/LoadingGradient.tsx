import React, { useState } from 'react';
import { LayoutChangeEvent, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const LoadingGradient: React.FC = () => {
  const [height, setHeight] = useState(1);
  const [width, setWidth] = useState(1);
  const aspectRatio = width / height;
  const x_static = 0.3;
  const y_static = -aspectRatio * x_static + 0.1;

  const getLayout = (event: LayoutChangeEvent) => {
    const h = event.nativeEvent.layout.height;
    const w = event.nativeEvent.layout.width;
    setHeight(h);
    setWidth(w);
  };

  return (
    <View onLayout={getLayout} style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: x_static, y: y_static }}
        colors={[
          styles.loadingGradientTheme.color + '00',
          styles.loadingGradientTheme.color + 'D0', // Opacity 81,25%
          styles.loadingGradientTheme.color + 'E0', // Opacity 87,50%
          styles.loadingGradientTheme.color + '00',
        ]}
        style={styles.loadingGradient}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  loadingGradient: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.2,
  },
  loadingGradientTheme: {
    color: '#E9FFE0',
  },
});
