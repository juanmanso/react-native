import { StyleSheet, Pressable, PressableProps, Text } from 'react-native';

export const PlaygroundButton: React.FC<PressableProps> = ({
  children,
  style,
  ...props
}) => {
  return (
    <Pressable {...props} style={[styles.playgroundButton, style]}>
      <Text style={styles.playgroundButtonLabel}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  playgroundButton: {
    backgroundColor: '#558FFF',
    borderRadius: 4,
    justifyContents: 'center',
    alignItems: 'center',
    padding: 10,
  },
  playgroundButtonLabel: {
    color: '#fff',
  },
});
