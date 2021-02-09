import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Screen1 from '../Content/Screen1';
import Screen2 from '../Content/Screen2';
import Home from '../Content/Home';
import HeaderTitleSc1 from '../Header/HeaderTitleSc1';
import { Image } from 'react-native-elements';
import TabNavigator from '../Navigator/TabNavigator';

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

