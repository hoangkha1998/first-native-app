import React from 'react';
import { View, Text,StyleSheet} from 'react-native';
import { ListItem } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';

const list = [
    {
      name: 'The first job list',
      subtitle: '2021-02-08'
    },
    {
      name: 'The second job list',
      subtitle: '2021-02-09'
    },
    {
      name: 'The third job list',
      subtitle: '2021-02-10'
    },
    {
        name: 'The four job list',
        subtitle: '2021-02-09'
    },
    {
        name: 'The five job list',
        subtitle: '2021-02-08'
    },
    {
        name: 'The six job list',
        subtitle: '2021-02-09'
    },
    {
        name: 'The seven job list',
        subtitle: '2021-02-08'
    },
    {
        name: 'The eight job list',
        subtitle: '2021-02-09'
    },
    {
        name: 'The nine job list',
        subtitle: '2021-02-08'
    },
    {
        name: 'The ten job list',
        subtitle: '2021-02-09'
    },
    {
        name: 'The seven job list',
        subtitle: '2021-02-08'
    },
    {
        name: 'The eight job list',
        subtitle: '2021-02-09'
    },
    {
        name: 'The nine job list',
        subtitle: '2021-02-08'
    },
    {
        name: 'The ten job list',
        subtitle: '2021-02-09'
    },
    
]

export default function JobList({navigation}){
    React.useLayoutEffect(()=>{        
        navigation.setOptions({
            title: 'Job List ',
            headerStyle: {
                backgroundColor: '#091046',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
                fontWeight: 'normal',
                fontSize: 17
            },
            headerTitle: "JobList" 
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
                    <ListItem key={i} bottomDivider containerStyle={styles.listItem}
                            onPress={()=>navigation.navigate('JobDetail', 
                                {titleJob:l.name,contentJob:l.subtitle})}
                            >
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
    listItem:{
        backgroundColor:'#2D5294', 
        marginBottom:5,
        borderWidth:0,
        borderColor:'#2D5294'
    },    
    backgroundGradient:{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height:'100%'
    }
})

