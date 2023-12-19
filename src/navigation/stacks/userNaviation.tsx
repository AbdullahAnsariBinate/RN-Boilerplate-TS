import React from 'react';
import {Home, User, About} from '@user/index';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from '../drawer/Drawer';

type RootStackParamList = {
  Home: React.ComponentProps<typeof Home>;
  User: React.ComponentProps<typeof User>;
  About: React.ComponentProps<typeof About>;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const UserNavigator = () => (
  <RootStack.Navigator initialRouteName='Drawers'>
    <RootStack.Screen name="Drawers" component={DrawerNavigator} />
    <RootStack.Screen name="About" component={About} />
    <RootStack.Screen name="User" component={User} />
  </RootStack.Navigator>
);

export default UserNavigator;
