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
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Calculadora de Consumo de Combustível</Text>
      </View>
      <View style={styles.inputContainer}>
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
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Calcular"
          onPress={calcularMedia}
          color="#007bff" // Cor do botão (ajuste conforme necessário)
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputContainer: {
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 20,
    fontSize: 18,
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
});

export default HomeScreen;
