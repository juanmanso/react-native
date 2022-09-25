import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import { LoadingGradient, PlaygroundButton } from 'src/components/atoms';
import { LoadingPressable } from 'src/components/molecules';

interface IMainScreen extends NativeStackScreenProps<any, any> {}

export const MainScreen: React.FC<IMainScreen> = ({ navigation }) => {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(withTiming(1, { duration: 5000 }), -1);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Button components</Text>
      <View style={styles.separator} />
      <PlaygroundButton onPress={() => alert('PlaygroundButton pressed')}>
        <Text>PlayGroundButton</Text>
      </PlaygroundButton>
      <View style={styles.separator} />
      <View style={styles.buttonLikeContainer}>
        <LoadingGradient progress={progress} />
        <Text style={styles.label}>LoadingGradient</Text>
      </View>
      <View style={styles.separator} />
      <LoadingPressable
        onPress={() => alert('LoadingPressable pressed')}
        style={styles.loadingPressable}
      >
        <Text style={styles.label}>LoadingPressable</Text>
      </LoadingPressable>
      <View style={styles.separator} />
      <View style={styles.separator} />
      <Text style={styles.header}>Screens</Text>
      <View style={styles.separator} />
      <PlaygroundButton onPress={() => navigation.navigate('AuroraScreen')}>
        <Text>AuroraScreen</Text>
      </PlaygroundButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
    textAlign: 'center',
  },
  separator: {
    marginVertical: 8,
  },
  label: {
    color: '#fff',
  },
  buttonLikeContainer: {
    width: 200,
    height: 70,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#113A77',
  },
  loadingPressable: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 58,
    borderRadius: 20,
    padding: 10,
  },
});
