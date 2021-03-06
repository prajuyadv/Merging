import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/screens/splashscreen/SplashScreen';
import WelcomeScreen from './src/screens/welcomescreen/WelcomeScreen';
import LoginPage from './src/screens/loginpage/LoginPage';
import RegisterPage from './src/screens/registerpage/RegisterPage';
import Tabs from './src/screens/tabs/Tabs';
import Home from './src/screens/homescreen/Home';
import Order from './src/screens/order/Order';
import Cart from './src/screens/cartscreen/cart';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Register" component={RegisterPage} />
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
