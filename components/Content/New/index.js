import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';


const list = [
    {
      name: 'The first name',
      subtitle: '2021-02-08'
    },
    {
      name: 'The second name',
      subtitle: '2021-02-09'
    },
    
]

export default function NewList({navigation}){
    React.useLayoutEffect(()=>{
        navigation.setOptions({
            title: 'new list ',
            headerStyle: {
                backgroundColor: '#091046',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
                fontWeight: 'normal',
                fontSize: 17
            }, 
            headerTitle: "News"   
        })
    },[navigation])
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#032C7A', '#1594DA']}
                style={styles.backgroundGradient}
            />
            <ScrollView>
            {
                list.map((l, i) => (
                <ListItem key={i} bottomDivider containerStyle={{backgroundColor:'#2D5294'}} 
                onPress={()=>navigation.navigate('NewDetail', {titleNew:l.name,contentNew:l.subtitle})}>

                    <ListItem.Content style={{height:30}}>
                    <View style={{flexDirection:'row',marginTop:-40}}>
                            <Text style={styles.title}>{l.name}</Text>
                            <Text style={[styles.title, styles.textRight]}>{l.subtitle}</Text>
                    </View>
                    </ListItem.Content>
                    <ListItem.Chevron color="white" />
                </ListItem>
                ))
            }
            </ScrollView>
        </View>
      );
}

const styles = StyleSheet.create({
    container:{       
        height:'100%'
    },
    title:{
        width:'50%',
        color:'white',       
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
    }
})
