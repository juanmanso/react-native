import React, { useState } from 'react';
import { LayoutChangeEvent, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { TColor } from 'src/types';

interface ILoadingGradient {
  color?: TColor;
  opacity?: number;
}

const DEFAULT_COLOR = '#E9FFE0';
const DEFAULT_OPACITY = 0.2;

export const LoadingGradient: React.FC<ILoadingGradient> = ({
  color = DEFAULT_COLOR,
  opacity = DEFAULT_OPACITY,
}) => {
  const [height, setHeight] = useState(1);
  const [width, setWidth] = useState(1);
  const aspectRatio = width / height;
  const x_static = 0.3;
  const y_static = -aspectRatio * x_static + 0.1;

  // Colors to be used in the gradient
  const colors = [
    color + '00',
    color + 'D0', // Opacity 81,25%
    color + 'E0', // Opacity 87,50%
    color + '00',
  ];

  // Callback functions
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
        colors={colors}
        style={[styles.loadingGradient, { opacity }]}
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
  },
});
