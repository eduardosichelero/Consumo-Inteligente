import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FuelConsumptionTable from '../components/FuelConsumptionTable';

export default function ResultScreen({ route, navigation }) {
  const { media } = route.params;

  const classifyConsumption = () => {
    if (media > 12) return 'A';
    if (media <= 12 && media > 10) return 'B';
    if (media <= 10 && media > 8) return 'C';
    if (media <= 8 && media > 4) return 'D';
    return 'E';
  };

  const highlight = classifyConsumption();
  const { text: classificationText, color: classificationColor } = getClassificationDetails(highlight);

  const classificationColors = {
    A: '#28a745',
    B: '#17a2b8',
    C: '#ffc107',
    D: '#fd7e14',
    E: '#dc3545',
  };

  const buttonColor = classificationColors[highlight] || '#007bff';

  return (
    <View style={styles.container}>
      <View style={styles.tableContainer}>
        <FuelConsumptionTable highlight={highlight} />
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.title}>Resultado</Text>
        <Text style={styles.text}>Média de Consumo: {media.toFixed(2)} Km/L</Text>
        <Text style={[styles.text, { color: classificationColor }]}>
          Classificação: {highlight} - {classificationText}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, { backgroundColor: buttonColor }]} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const getClassificationDetails = (classification) => {
  switch (classification) {
    case 'A': return { text: 'Excelente consumo', color: '#28a745' };
    case 'B': return { text: 'Bom consumo', color: '#17a2b8' };
    case 'C': return { text: 'Consumo razoável', color: '#ffc107' };
    case 'D': return { text: 'Consumo baixo', color: '#fd7e14' };
    case 'E': return { text: 'Consumo muito baixo', color: '#dc3545' };
    default: return { text: '', color: '#000' };
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
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  resultContainer: {
    alignItems: 'center',
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
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
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
