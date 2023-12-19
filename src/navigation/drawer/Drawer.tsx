// DrawerNavigator.tsx
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Home, About} from '@user/index';
import BottomTabs from '../bottom/BottomTabs';

const Drawer = createDrawerNavigator();

const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={BottomTabs} />
      {/* <Drawer.Screen name="About" component={About} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
