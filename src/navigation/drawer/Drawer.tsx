// DrawerNavigator.tsx
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Home, About} from '@user/index';
import BottomTabs from '../bottom/BottomTabs';
import {Text, View} from 'react-native';

const Drawer = createDrawerNavigator();

const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator
      initialRouteName="BottomTabs"
      // drawerContent={props => <Comp {...props} />}
    >
      <Drawer.Screen name="BottomTabs" component={BottomTabs} />
      {/* <Drawer.Screen name="About" component={About} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
