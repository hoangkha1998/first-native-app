import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';

export default function  NewDetail({route, navigation}){
    React.useLayoutEffect(()=>{
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity 
                  onPress={() => navigation.goBack()}
                  style={{marginLeft: 10,}}>
                  <Icon name='arrow-back-circle-outline' style={{color:'white'}}/>
                </TouchableOpacity>
              ),
            title: 'new detail',
            headerStyle: {
            backgroundColor: '#091046',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
                fontWeight: 'normal',
                fontSize: 17
            },    
        })
    },[navigation])

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#032C7A', '#1594DA']}
                style={styles.backgroundGradient}
            />
            <View style={styles.mt_10}>
                <Text style={styles.textWhite}>this is detail of screen 2</Text>
                <Text style={[styles.textWhite, styles.textRight]}> {route.params.titleNew}-{route.params.contentNew} </Text>
            </View>
        </View>
      );
}

const styles = StyleSheet.create({
    container:{        
        height:'100%',        
        paddingLeft:5,
        paddingRight:5,
    },
    textWhite:{
        color:'white'
    },
    textRight:{
        textAlign:'right'
    },    
    backgroundGradient:{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height:'100%'
    },
    mt_10:{
        marginTop:10
    }
})    