import { Pressable, TextInput, View, StyleSheet } from 'react-native';

export default function PrimaryButton({ children }) {
  function pressHandler() {
    console.log('Pressed!');
  }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={styles.buttonInnerContainer}
        onPress={pressHandler}
        android_ripple={{ color: '#640233' }}
      >
        <TextInput style={styles.buttonText}>{children}</TextInput>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: { borderRadius: 28, margin: 4, overflow: 'hidden' },
  buttonInnerContainer: {
    backgroundColor: '#72063c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
