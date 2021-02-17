import React from 'react';
import { View, Text,StyleSheet,TouchableOpacity, Alert } from 'react-native';
import { Avatar, ListItem, Badge } from 'react-native-elements';
import {Button,Thumbnail} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';


const list1 = [
    {
        name: 'The first name',
    },
    {
        name: 'The second name',
    },
    {
        name: 'The third name',
    },
    {
        name: 'The four name',
    },
    {
        name: 'The five name',
    },
    {
        name: 'The six name',
    },
    
];

const list2 = [
    {
        name: 'The list2 first name',
    },
    {
        name: 'The list2 second name',
    },
    {
        name: 'The list2 third name',
    },
    {
        name: 'The list2 four name',
    },
    {
        name: 'The list2 five name',
    },
    {
        name: 'The list2 six name',
    },
    {
        name: 'The list2 five name',
    },
    {
        name: 'The list2 six name',
    },
];

export default function SettingScreen({navigation}){
    React.useLayoutEffect(()=>{
        navigation.setOptions({
            // title:'Setting Screen',
            headerStyle:{
                backgroundColor: '#091046'
            },
            headerTintColor: '#fff',
            headerTitleAlign:'center',
            headerTitleStyle:{
                fontWeight:'normal',
                fontSize:17
            }
        })
    },[navigation])
    return (
        <View style={styles.container}>
            <ScrollView>
            <View style={[styles.pd_5, styles.header]}>
                <View>
                    <Thumbnail large 
                        style={styles.avatar}
                        source={{ uri: 'https://www.freepngimg.com/download/logo/76396-logo-vector-fox-euclidean-free-png-hq.png' }}
                    />
                </View>
                <View style={styles.w_75}>
                    <Text style={styles.textColorHeader}>EVA Text demo</Text>
                    <Text style={styles.textColorHeader}>Name: name demo</Text>
                    <Text style={styles.textColorHeader}>Phone Number: 0909090909</Text>
                    <View style={{flexDirection:'row', marginTop:5, justifyContent:'flex-start',alignItems:'center'}}>
                        <Text style={styles.textColorHeader}>09-1929-1920</Text>
                        <Button block onPress={()=>Alert.alert('Show','sdsdsdsd')} style={styles.btnHeader}><Text style={{color:'white'}}>Profile</Text></Button>
                    </View>
                </View>                
            </View>
            {/* section second */}
            <View style={styles.content}>
            <ListItem bottomDivider containerStyle={[styles.headerListItem, styles.h_20]}>
                <Text style={styles.textWhite}>Title of list1 Item</Text>                    
            </ListItem>
            {
                list1.map((l, i) => (
                <ListItem key={i} bottomDivider containerStyle={styles.h_40}>
                    <View style={styles.listItem}>
                        <Text style={styles.colorTextItem}>{l.name}</Text>
                        {                    
                            i == 2 || i == 3 ? <TouchableOpacity
                                        style={styles.btnListItem}
                                        onPress={()=>Alert.alert('Show info', 'Info')}
                                    >
                                <Text style={styles.textGreen}>Text</Text>
                            </TouchableOpacity> : null                       
                        }
                    </View>                    
                </ListItem>
                ))
            }
            </View>         
            {/* section third */}
            <View style={styles.content}>
                <ListItem bottomDivider containerStyle={[styles.headerListItem, styles.h_20]}>
                    <Text style={styles.textWhite}>Title of list2 Item</Text>                    
                </ListItem>
                {
                    list2.map((l, i) => (
                    <ListItem key={i} bottomDivider containerStyle={styles.h_40}>
                        <View style={styles.listItem}>
                            <Text style={styles.colorTextItem}>{l.name}</Text>                        
                        </View>                    
                    </ListItem>
                    ))
                }
            </View>
            </ScrollView>    
        </View>
      );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        height:'100%',
        
    },
    pd_5:{
        padding: 5,
    },
    header:{
        flexDirection:'row',        
        width:'100%',
        justifyContent:'space-between',
        height:100
    },
    btnHeader:{
        backgroundColor:'#2CAEE7', 
        marginLeft:10, 
        marginRight:10,
        borderRadius:5, 
        width:100, 
        height:30
    },
    avatar:{      
        justifyContent:'center',
        alignItems:'center',
        marginTop:5,
        flexDirection:'column',       
    },
    w_75:{
        width:'75%',       
    },
    textColorHeader:{
        color:'#A3A3A3'
    },
    content:{        
        width:'100%',        
    },
    headerListItem:{
        backgroundColor:'#1FADEB',       
    },
    textWhite:{
        color:'#fff'
    },
    h_20:{
        height:20
    },
    h_40:{
        height:40,
    },
    colorTextItem:{
        color:'#BBBBBB'
    },
    btnListItem:{
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        minWidth:40,
        height:30,
        backgroundColor:'#FDD906',
        borderRadius:50,                            
    },
    textGreen:{
        color:'green'
    },
    listItem:{
        height:40,
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignItems:'center', 
        width:'100%'
    }

})
