import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [km, setKm] = useState('');
  const [litros, setLitros] = useState('');

  const calcularMedia = () => {
    const media = parseFloat(km) / parseFloat(litros);
    navigation.navigate('Result', { media });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Quilometragem (KM):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={km}
        onChangeText={setKm}
      />
      <Text style={styles.label}>Litros de Gasolina:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={litros}
        onChangeText={setLitros}
      />
      <Button title="Calcular" onPress={calcularMedia} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  label: { fontSize: 18, marginBottom: 8 },
  input: { borderWidth: 1, padding: 10, marginBottom: 20, fontSize: 18 },
});

export default HomeScreen;
