import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Rect, Text as SvgText } from 'react-native-svg';

export default function FuelConsumptionTable({ highlight }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tabela de Consumo</Text>
      <Svg height="340" width="320">
        {/* Faixa de consumo A */}
        <Rect x="15" y="20" width="260" height="40" rx="8" fill={highlight === 'A' ? '#2ecc71' : '#9b9b9b'} />
        <SvgText x="25" y="45" fill="#fff" fontSize="18" fontWeight="600">A</SvgText>
        {highlight === 'A' && (
          <SvgText x="50" y="45" fill="#333" fontSize="16">Mais de 12 Km/l</SvgText>
        )}

        {/* Faixa de consumo B */}
        <Rect x="15" y="70" width="270" height="40" rx="8" fill={highlight === 'B' ? '#9da626' : '#9b9b9b'} />
        <SvgText x="25" y="95" fill="#fff" fontSize="18" fontWeight="600">B</SvgText>
        {highlight === 'B' && (
          <SvgText x="50" y="95" fill="#333" fontSize="16">Até 12 Km/l</SvgText>
        )}

        {/* Faixa de consumo C */}
        <Rect x="15" y="120" width="280" height="40" rx="8" fill={highlight === 'C' ? '#f1c40f' : '#9b9b9b'} />
        <SvgText x="25" y="145" fill="#fff" fontSize="18" fontWeight="600">C</SvgText>
        {highlight === 'C' && (
          <SvgText x="50" y="145" fill="#333" fontSize="16">Até 10 Km/l</SvgText>
        )}

        {/* Faixa de consumo D */}
        <Rect x="15" y="170" width="290" height="40" rx="8" fill={highlight === 'D' ? '#e67e22' : '#9b9b9b'} />
        <SvgText x="25" y="195" fill="#fff" fontSize="18" fontWeight="600">D</SvgText>
        {highlight === 'D' && (
          <SvgText x="50" y="195" fill="#333" fontSize="16">Até 8 Km/l</SvgText>
        )}

        {/* Faixa de consumo E */}
        <Rect x="15" y="220" width="300" height="40" rx="8" fill={highlight === 'E' ? '#e74c3c' : '#9b9b9b'} />
        <SvgText x="25" y="245" fill="#fff" fontSize="18" fontWeight="600">E</SvgText>
        {highlight === 'E' && (
          <SvgText x="50" y="245" fill="#333" fontSize="16">Até 4 Km/l</SvgText>
        )}
      </Svg>
    </View>
  );
}

const styles = {
  container: {
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
    color: '#333',
    marginBottom: 10,
  },
};
