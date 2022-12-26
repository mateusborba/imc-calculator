import { Text, TextInput, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ResultImc from "./ResultImc";
import styles from "./style";

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha o peso e altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");

  function validadorImc() {
    if (weight != null && height != null) {
      imcCalculator();
      setMessageImc("Seu imc é iguaL: ");
      setTextButton("Calcular novamente");
      setHeight(null);
      setWeight(null);
      return;
    }
    setImc(null);
    setTextButton("Calcular");
    setMessageImc("Preencha o peso e altura");
  }

  function imcCalculator() {
    return setImc((weight / (height * height)).toFixed(2));
  }
  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <TextInput
          style={styles.input}
          value={height}
          placeholder="Ex. 1.75"
          keyboardType="numeric"
          onChangeText={setHeight}
        ></TextInput>
        <Text style={styles.formLabel}>Peso</Text>
        <TextInput
          style={styles.input}
          value={weight}
          placeholder="Ex. 70.35"
          keyboardType="numeric"
          onChangeText={setWeight}
        ></TextInput>
        <TouchableOpacity
          style={styles.buttonCalculator}
          onPress={() => validadorImc()}
        >
          <Text style={styles.textButtonCalculator}>{textButton}</Text>
        </TouchableOpacity>
      </View>
      <ResultImc messageResultImc={messageImc} resultImc={imc} />
    </View>
  );
}
