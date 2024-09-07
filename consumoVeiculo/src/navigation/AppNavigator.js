import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ResultScreen from '../screens/ResultScreen';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import AboutModal from '../components/AboutModal';  // Importando o modal

const Stack = createStackNavigator();

export default function AppNavigator() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            title: 'Home', 
            headerTitleAlign: 'center', 
            headerRight: () => (
              <TouchableOpacity style={styles.button} onPress={toggleModal}>
                <Text style={styles.buttonText}>Sobre</Text>
              </TouchableOpacity>
            ),
          }} 
        />
        <Stack.Screen 
          name="Result" 
          component={ResultScreen} 
          options={{ 
            title: 'Resultado', 
            headerTitleAlign: 'center', 
          }} 
        />
      </Stack.Navigator>
      <AboutModal isVisible={isModalVisible} onClose={toggleModal} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  button: {
    marginRight: 15,
    padding: 10,
  },
  buttonText: {
    color: '#007bff',
    fontSize: 16,
  },
});
