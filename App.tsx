// In App.js in a new project

import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './views/Home';
import Itanhaem from './views/Itanhaem';
import Gaivota from './views/gaivota';
import Peruibe from './views/peruibe';
import Saopaulo from './views/saopaulo';


const RootStack = createNativeStackNavigator({
  screens: {
    Home: Home,
    Itanhaem:Itanhaem,
    Gaivota:Gaivota,
    Peruibe:Peruibe,
    Saopaulo:Saopaulo8 

  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation/>;
}