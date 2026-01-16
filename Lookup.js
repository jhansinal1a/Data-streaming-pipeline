// Lookup.js
import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const Lookup = ({ term, setTerm, onTermSubmit }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter city"
        style={styles.input}
        value={term}
        onChangeText={setTerm}
      />
      <Button title="Get Weather" onPress={onTermSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginRight: 10,
  },
});

export default Lookup;

