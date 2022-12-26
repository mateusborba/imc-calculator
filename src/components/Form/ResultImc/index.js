import { Text, View } from "react-native";
import React from "react";
import styles from "./styles";

export default function ResultImc({ resultImc, messageResultImc }) {
  return (
    <View style={styles.imcContent}>
      <Text style={styles.information}>{messageResultImc}</Text>
      <Text style={styles.resultImc}>{resultImc}</Text>
    </View>
  );
}
