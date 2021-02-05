import React from 'react';
import {Header,Body, Title} from 'native-base';
import { StyleSheet, View, Text} from 'react-native';

export default function HeaderTitleSc1(){
    return(
        <Header style={styles.header} >            
            <Text style={styles.title_header}>Title App </Text>
        </Header>       
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#091046',        
        alignItems: 'center',
        margin:-20                
    },
    title_header:{
        color:'white', 
        fontSize:20
    },    
})