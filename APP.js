// App.js or index.tsx
import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Lookup from './Lookup';
import Result from './Result';
import useAPIresponse from './CustomHooks/useAPIresponse';

const App = () => {
  const [data, searchAPI, term, setTerm] = useAPIresponse('New York');

  return (
    <SafeAreaView style={styles.container}>
      <Lookup term={term} setTerm={setTerm} onTermSubmit={() => searchAPI(term)} />
      <Result data={data} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
});

export default App;

