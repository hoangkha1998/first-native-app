import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Screen1 from '../Content/Screen1';
import Screen2 from '../Content/Screen2';
import HeaderTitleSc1 from '../Header/HeaderTitleSc1';
import { Image } from 'react-native-elements';
import TabNavigator from '../Navigator/TabNavigator';

import JobList from '../Content/Job';
import JobDetail from '../Content/Job/JobDetail';
import SettingScreen from '../Content/Setting';
import NewList from '../Content/New';
import NewDetail from '../Content/New/NewDetail';

const Stack = createStackNavigator();

export default function MainStackNavigator(){
    return(
        <Stack.Navigator>
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

                
            <Stack.Screen name="Home" 
                      component={ TabNavigator }
                      options={{
                        headerStyle: {
                          backgroundColor: '#091046',
                        },
                        headerTintColor: '#fff',
                        headerTitleAlign: 'center',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 17
                        },
                        headerLeft: (props) => (
                          <Image source={ require('../../assets/icon/search.png')} 
                          style={{ margin: 10, width:20, height:20 }}
                          />
                        ),
                      }}
                      />
        </Stack.Navigator>
    )
}

