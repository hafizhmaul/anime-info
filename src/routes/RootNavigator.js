import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TableList } from '../components';
import { PRIMARY_GRAY, PRIMARY_WHITE, SECONDARY_BLACK } from '../constants/color';

//Screens
import { DetailMenu, Home } from '../screens';
import { Styles } from '../styles/RootNavigator.style';

const Tab = createMaterialBottomTabNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor={PRIMARY_WHITE}
        inactiveColor={PRIMARY_GRAY}
        barStyle={Styles.containerBar}
        screenOptions={({ route }) => ({
          // tabBarLabel: false,
          tabBarIcon: ({ focused, color, size = 20 }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name={'Home'} component={Home} />
        <Tab.Screen name={'Search'} component={TableList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
