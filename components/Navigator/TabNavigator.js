import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import Home from '../Content/Home';

import JobList from '../Content/Job';
import JobDetail from '../Content/Job/JobDetail';
import Setting from '../Content/Setting';
import NewList from '../Content/New';
import NewDetail from '../Content/New/NewDetail';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const NewStack = createStackNavigator();
const JobStack = createStackNavigator();
const SettingStack = createStackNavigator();

export default function BottomTabNavigator(){
    return(
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#091046',
            }}
        >
        <Tab.Screen 
            name="Home" 
            component={ HomeScreen } 
            options={{
                tabBarIcon: ({ color, size }) => (
                <Icon name="home" color={color} size={size} />
                ),
            }}
        />
        <Tab.Screen 
                name="News" 
                component={ NewScreen } 
                options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon name="add" color={color} size={size} />
                ),
            }}
        />
        <Tab.Screen 
                name="Messages" 
                component={HomeScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                    <Icon name="message" color={color} size={size} />
                    ),
                }}    
            />
        <Tab.Screen 
                name="Job List" 
                component={JobScreen} 
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

const HomeScreen = ({navigation})=>{
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen 
                name="Home"
                component={Home}
                options={{
                    headerLeft:null
                }}
            />
        </HomeStack.Navigator>
    )
}

const NewScreen = ({navigation})=>{
    return(
        <NewStack.Navigator>
            <NewStack.Screen
                name="NewList"
                component={NewList}
                options={{
                    headerLeft:null
                }}
            />

            <NewStack.Screen
                name="NewDetail"
                component={NewDetail}
            />
        </NewStack.Navigator>
    )
}

const JobScreen = ({navigator})=>{
    return(
        <JobStack.Navigator>
            <JobStack.Screen
                name="JobList"
                component={JobList}
                options={{
                    headerLeft:null
                }}
            />

            <JobStack.Screen
                        name="JobDetail"
                        component={JobDetail}
                    />
        </JobStack.Navigator>
    )
}

const SettingScreen = ({navigator}) => {
    return(
        <SettingStack.Navigator>
            <SettingStack.Screen
                name="Setting"
                component={Setting}
                options={{
                    headerLeft:null
                }}
            />
        </SettingStack.Navigator>
    )
}