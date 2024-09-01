import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import FuelConsumptionTable from '../components/FuelConsumptionTable';

const ResultScreen = ({ route, navigation }) => {
  const { media } = route.params;

  const classifyConsumption = () => {
    if (media > 12) return 'A';
    if (media <= 12 && media > 10) return 'B';
    if (media <= 10 && media > 8) return 'C';
    if (media <= 8 && media > 4) return 'D';
    return 'E';
  };

  const highlight = classifyConsumption();

  return (
    <View style={styles.container}>
      <View style={styles.tableContainer}>
        <FuelConsumptionTable highlight={highlight} />
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.title}>Resultado</Text>
        <Text style={styles.text}>Média de Consumo: {media.toFixed(2)} Km/L</Text>
        <Text style={styles.text}>Classificação: {highlight} - {getClassificationText(highlight)}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button 
          title="Voltar" 
          onPress={() => navigation.goBack()} 
          color="#007bff" // Cor do botão (ajuste conforme necessário)
        />
      </View>
    </View>
  );
};

const getClassificationText = (classification) => {
  switch (classification) {
    case 'A': return 'Excelente consumo';
    case 'B': return 'Bom consumo';
    case 'C': return 'Consumo razoável';
    case 'D': return 'Consumo baixo';
    case 'E': return 'Consumo muito baixo';
    default: return '';
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  tableContainer: {
    alignItems: 'center',
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  resultContainer: {
    alignItems: 'center',
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
  },
  buttonContainer: {
    marginTop: 20,
    padding: 15,
    alignItems: 'center',
  },
});

export default ResultScreen;
