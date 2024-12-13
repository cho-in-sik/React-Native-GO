import { StyleSheet, TextInput, View, Button, Modal } from 'react-native';
import { useState } from 'react';

export default function GoalInput({ setCourseGoals, visible }) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };
  const addGoalHandler = () => {
    setCourseGoals((currentCouseGoals) => [
      ...currentCouseGoals,
      { text: enteredGoalText, id: Date.now().toString() },
    ]);
    setEnteredGoalText('');
  };
  return (
    <Modal visible={visible} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <Button title="Add Goal" onPress={addGoalHandler} />
          <Button title="Cancel" />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});
