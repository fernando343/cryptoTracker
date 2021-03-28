import React from 'react';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';
import CoinScreen from './CoinScreen';
import CoinsDetailScreen from '../coinDatail/CoinDetailScreen';
import Colors from '../../res/colors';

const Stack = createStackNavigator();

const CoinsStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.blackPearl,
                    shadowColor: Colors.blackPearl,
                },
                headerTintColor: Colors.white
            }}>
            <Stack.Screen name="Coins" component={CoinScreen} />
            <Stack.Screen name="CoinDetail" component={CoinsDetailScreen} />
        </Stack.Navigator >
    );
}

export default CoinsStack;