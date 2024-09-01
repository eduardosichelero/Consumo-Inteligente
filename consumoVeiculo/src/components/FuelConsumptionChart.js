import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Rect, Text as SvgText } from 'react-native-svg';

const FuelConsumptionChart = () => {
  return (
    <View style={{ alignItems: 'center', marginTop: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Consumo de Combustível</Text>
      <Svg height="200" width="300">
        {/* Faixa de consumo A */}
        <Rect x="10" y="20" width="280" height="30" fill="#00a859" />
        <SvgText x="15" y="40" fill="#fff" fontSize="16">A</SvgText>

        {/* Faixa de consumo B */}
        <Rect x="10" y="60" width="280" height="30" fill="#00afc9" />
        <SvgText x="15" y="80" fill="#fff" fontSize="16">B</SvgText>

        {/* Faixa de consumo C */}
        <Rect x="10" y="100" width="280" height="30" fill="#ffd300" />
        <SvgText x="15" y="120" fill="#fff" fontSize="16">C</SvgText>

        {/* Faixa de consumo D */}
        <Rect x="10" y="140" width="280" height="30" fill="#fe9500" />
        <SvgText x="15" y="160" fill="#fff" fontSize="16">D</SvgText>

        {/* Faixa de consumo E */}
        <Rect x="10" y="180" width="280" height="30" fill="#d91e0b" />
        <SvgText x="15" y="200" fill="#fff" fontSize="16">E</SvgText>
      </Svg>
    </View>
  );
};

export default FuelConsumptionChart;
