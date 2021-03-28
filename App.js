import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CoinsStack from './src/components/coins/CoinstStack';
import FavoritesStack from './src/components/favorites/FavoritesStack';
import Colors from './src/res/colors'

const Tabs = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>

      <Tabs.Navigator
        tabBarOptions={{
          tintColor: "#fefefe",
          style: {
            backgroundColor: Colors.blackPearl,
          }
        }}>
        <Tabs.Screen
          name="Coins"
          component={CoinsStack}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Image
                style={{ tintColor: color, width: 30, height: 35 }}
                source={require('./src/assets/img/bank.png')} />
            )
          }}
        />
        <Tabs.Screen
          name="favorite"
          component={FavoritesStack}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Image
                style={{ tintColor: color, width: size, height: size }}
                source={require('./src/assets/img/star.png')} />
            )
          }}
        />
      </Tabs.Navigator>

    </NavigationContainer>
  );
};


export default App;
