import React from 'react';
import {Header,Body, Title} from 'native-base';
import { StyleSheet, View, Text} from 'react-native';

export default function HeaderTitleSc1(){
    return(
        <View style={styles.header}>            
            <Text style={styles.title_header}>Title App </Text>
        </View> 
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#091046',        
        alignItems: 'center',        
    },
    title_header:{
        color:'white', 
        fontSize:20
    },
})