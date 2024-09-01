import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import FuelConsumptionChart from '../components/FuelConsumptionChart';

const ResultScreen = ({ route, navigation }) => {
  const { media } = route.params;

  const classifyConsumption = () => {
    if (media > 12) return 'A - Excelente consumo';
    if (media <= 12 && media > 10) return 'B - Bom consumo';
    if (media <= 10 && media > 8) return 'C - Consumo razoável';
    if (media <= 8 && media > 4) return 'D - Consumo baixo';
    return 'E - Consumo muito baixo';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultado</Text>
      <Text style={styles.text}>Média de Consumo: {media.toFixed(2)} Km/L</Text>
      <Text style={styles.text}>Classificação: {classifyConsumption()}</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
        
    </View>


  );
};


const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default ResultScreen;
