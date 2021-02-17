import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import Home from '../Content/Home';


import JobList from '../Content/Job';
import JobDetail from '../Content/Job/JobDetail';
import SettingScreen from '../Content/Setting';
import NewList from '../Content/New';
import NewDetail from '../Content/New/NewDetail';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator(){
    return(
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#091046',
            }}
        >
        <Tab.Screen 
            name="Home" 
            component={ Home } 
            options={{
                tabBarIcon: ({ color, size }) => (
                <Icon name="home" color={color} size={size} />
                ),
            }}
        />
        <Tab.Screen 
                name="News" 
                component={ NewList } 
                options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon name="add" color={color} size={size} />
                ),
            }}
        />
        <Tab.Screen 
                name="Messages" 
                component={Home} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                    <Icon name="message" color={color} size={size} />
                    ),
                }}    
            />
        <Tab.Screen 
                name="Job List" 
                component={JobList} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                    <Icon name="list" color={color} size={size} />
                    ),
                }}        
            />
        <Tab.Screen 
                name="Settings" 
                component={SettingScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                    <Icon name="settings" color={color} size={size} />
                    ),
                }}    
        />
        </Tab.Navigator>
    )
}