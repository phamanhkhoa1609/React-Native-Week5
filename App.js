import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Lab03 from './components/VSmart';
import ColorPicker from './components/ColorPicker';
import RedPhoneScreen from './components/RedPhoneScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Lab03">
        <Stack.Screen name="Lab03" component={Lab03}/>
        <Stack.Screen name="ColorPicker" component={ColorPicker}/>
        <Stack.Screen name="RedPhoneScreen" component={RedPhoneScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );

  
}