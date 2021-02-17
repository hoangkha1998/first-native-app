import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Screen1 from '../Content/Screen1';
import Screen2 from '../Content/Screen2';
import HeaderTitleSc1 from '../Header/HeaderTitleSc1';
import { Image } from 'react-native-elements';
import TabNavigator from '../Navigator/TabNavigator';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Text, TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();

export default function MainStackNavigator(){
    return(
        <Stack.Navigator headerMode="screen">
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
                      options={({ navigation, route }) => ({
                        headerStyle: {
                          backgroundColor: '#091046',
                        },
                        headerTintColor: '#fff',
                        headerTitleAlign: 'center',
                        headerTitle: getHeaderTitle(route),
                        headerLeft: () => (
                            getHeaderIcon(route)
                        ),
                      })}
                      />

        </Stack.Navigator>
    )
}

function getHeaderIcon(route) {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName == 'Home') {
      return <Image style={{ width:20, height:20, margin: 10}} source={ require('../../assets/icon/search.png')}/>;
    }
}

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  switch (routeName) {
    case 'Home':
      return "Home";
    case 'News':
      return 'News';
    case 'Messages':
      return 'Messages';
    case 'Job List':
      return 'Job List';
    case 'Settings':
      return 'Settings';
  }
}
