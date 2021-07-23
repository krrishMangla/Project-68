import * as React from 'react';
import {Text,View} from 'react-native'; 
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import FaceBook from './Screen.js/fb';
import Insta from './Screen.js/insta';



export default class App extends React.Component
{
  render()
    {
      return <AppContainer/>;
      
    }
}

const TabNavigator = createBottomTabNavigator({
  Fb:{screen:FaceBook},
  Instagram:{screen:Insta},
  });
  
  const AppContainer = createAppContainer(TabNavigator);
  
  