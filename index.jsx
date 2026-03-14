/*
Program Name: Aquarium Water Change Reminder
Description: A simple React Native app that allows aquarium owners to enter the last
water change date and calculates when the next water change should occur.
Author: Nathan Reid
Date Created: March 14, 2026
*/

import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, Button, StyleSheet } from "react-native";
import ReminderCalculator from "./components/ReminderCalculator";

export default function App() {
  const [lastChange, setLastChange] = useState("");
  const [nextChange, setNextChange] = useState("");

  const calculateNextChange = () => {
    const result = ReminderCalculator(lastChange);
    setNextChange(result);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Aquarium Water Change Reminder</Text>

      <Text>Enter Last Water Change Date:</Text>
      <TextInput
        style={styles.input}
        placeholder="YYYY-MM-DD"
        value={lastChange}
        onChangeText={setLastChange}
      />

      <Button title="Calculate Next Water Change" onPress={calculateNextChange} />

      {nextChange !== "" && (
        <Text style={styles.result}>Next Water Change: {nextChange}</Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  title: {
    fontSize: 24,
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10
  },
  result: {
    marginTop: 20,
    fontSize: 18
  }
});
