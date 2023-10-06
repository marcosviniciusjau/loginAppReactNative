import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AuthContext from "./contexts/auth";
import {AuthProvider} from './contexts/auth';
import Routes from "./routes"

const App: React.FC = () => {
  
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes/>
        </AuthProvider>
    </NavigationContainer>
  );
};

export default App;


