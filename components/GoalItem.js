import { Pressable, StyleSheet } from 'react-native';
import { View, Text } from 'react-native';

export default function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: 'red' }}
        onPress={() => props.deleteCoalHanlder(props.id)}
        style={({ pressed }) => {
          pressed && styles.pressedItem;
        }}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,

    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
  pressedItem: {
    color: 'red',
    opacity: 0.5,
  },
});
