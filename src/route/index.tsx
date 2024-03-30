import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, InputExpenditureScreen, SplashScreen} from '../screen';
import { StackNavigationProp } from "@react-navigation/stack";
import ProfileScreen from '../screen/ProfileScreen';
import MyTabsBar from './MyTabsBar';
import RegisterScreen from '../screen/RegisterScreen';
import { UserProp } from '../interface/user.type';

export type MyRoute = 'HomeScreen' | 'SplashScreen';

export type RootStackParamList = {
  MainApp: undefined;
  InputExpenditureScreen:UserProp;
  RegisterScreen:undefined;
};

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <MyTabsBar {...props} />}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false, title: 'Home' }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Route = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='SplashScreen'
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InputExpenditureScreen"
        component={InputExpenditureScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Route;
