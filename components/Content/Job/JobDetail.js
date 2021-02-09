import React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';

export default function JobDetail({route, navigation}){
    React.useLayoutEffect(()=>{
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity 
                  onPress={() => navigation.goBack()}
                  style={{marginLeft: 10,}}>
                  <Icon name='arrow-back-circle-outline' style={{color:'white'}}/>
                </TouchableOpacity>
              ),
            title: 'Job detail',
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
            <Text style={[styles.textWhite, styles.mt_10]}> {route.params.titleJob}--{route.params.contentJob} </Text>
            <View style={styles.mt_20}>
                <Text style={styles.textWhite}> this is title of JobDetail </Text>
                <Text style={styles.textWhite}> this is title of JobDetail </Text>
            </View>
            <View style={styles.mt_20}>
                <Text style={styles.textWhite}> this is title of JobDetail </Text>
                <Text style={styles.textWhite}> this is title of JobDetail </Text>
                <Text style={styles.textWhite}> this is title of JobDetail </Text>
                <Text style={styles.textWhite}> this is title of JobDetail </Text>
                <Text style={styles.textWhite}> this is title of JobDetail </Text>
            </View>
            <View style={styles.mt_20}>
                <Text style={styles.textWhite}> this is title of JobDetail </Text>
                <Text style={styles.textWhite}> this is title of JobDetail </Text>
                <Text style={styles.textWhite}> this is title of JobDetail </Text>
                <Text style={styles.textWhite}> this is title of JobDetail </Text>
            </View>
            <View >
                <Text style={[styles.textWhite, styles.textRight]}> this is title of JobDetail </Text>                
            </View>          
        </View>
      );
}

const styles = StyleSheet.create({
    container:{
        height:'100%',
        paddingLeft:5,
        paddingRight:5,
        flexDirection:'column'
    },
    textWhite:{
        color:'white',
        fontSize:20
    },
    mt_20:{
        marginTop:20
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

