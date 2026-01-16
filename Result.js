// Result.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Result = ({ data }) => {
  if (!data) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.city}>{data.name}</Text>
      <Text>{data.weather[0].description}</Text>
      <Text>🌡️ Temp: {data.main.temp}°C</Text>
      <Text>💧 Humidity: {data.main.humidity}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  city: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default Result;

