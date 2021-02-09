import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Screen1 from '../Content/Screen1';
import Screen2 from '../Content/Screen2';
import HeaderTitleSc1 from '../Header/HeaderTitleSc1';
import HeaderScreen2 from '../Header/HeaderScreen2';
import NewList from '../Content/New';
import NewDetail from '../Content/New/NewDetail';
import { Button, Icon } from 'native-base';
import JobList from '../Content/Job';
import JobDetail from '../Content/Job/JobDetail';
import SettingScreen from '../Content/Setting';

const Stack = createStackNavigator();

export default function Navigator(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Screen1">
                <Stack.Screen name="Screen1" 
                              component={Screen1}
                              options={{                                
                                headerTitle:props=><HeaderTitleSc1 {...props}/>,
                              }}
                              />
                <Stack.Screen name="Screen2" 
                              component={Screen2}
                              options={{
                                title: '東日本方言',
                                headerStyle: {
                                  backgroundColor: '#091046',
                                },
                                headerTintColor: '#fff',
                                headerTitleAlign: 'center',
                                headerTitleStyle: {
                                    fontWeight: 'bold',
                                    fontSize: 17
                                },
                              }}
                              />
                <Stack.Screen name="NewList" 
                              component={NewList}                              
                              />
                <Stack.Screen name="NewDetail" 
                              component={NewDetail}                              
                              />
                <Stack.Screen name="JobList" 
                              component={JobList}                              
                              />
                <Stack.Screen name="JobDetail" 
                              component={JobDetail}                              
                              />
                <Stack.Screen name="SettingScreen" 
                              component={SettingScreen}                              
                              />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

