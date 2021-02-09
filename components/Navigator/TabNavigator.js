import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import Home from '../Content/Home';

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
                component={ Home } 
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
                component={Home} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                    <Icon name="list" color={color} size={size} />
                    ),
                }}        
            />
        <Tab.Screen 
                name="Settings" 
                component={Home} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                    <Icon name="settings" color={color} size={size} />
                    ),
                }}    
        />
        </Tab.Navigator>
    )
}