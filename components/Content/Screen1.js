import React from 'react';
import { Container, Header, Content, List, ListItem ,Body, Title, Footer} from 'native-base';
import { StyleSheet, Text, View, Button} from 'react-native';


export default function Screen1({navigation}){
    return(       
        <Container>            
            <Content>                
                <View >
                    <Text style={styles.content_text}>
                        Perfect, crisp, high definition icons and pixel ideal fonts powered by NativeBase to preserve matters very high first-rate. 
                        You will continually have pixel perfect icons on your initiatives.
                        Here is a repo that lists down icons of available react-native-vector-icons icon familie
                    </Text>
                </View>
                <View style={styles.content_title}>
                    <Text style={styles.content_title_text}>The first title in my phone</Text>
                </View>
                <View style={styles.content_boder_radius}>
                    <Text style={styles.content_boder_radius_text}>The first title in my phone</Text>
                </View> 

                <View style={styles.content_title}>
                    <Text style={styles.content_title_text}>The second title in my phone</Text>
                </View>
                <View style={styles.content_boder_radius}>
                    <Text style={styles.content_boder_radius_text}>The second title in my phone</Text>
                </View>          
                <View style={styles.content_footer}>
                    <Text style={styles.content_footer_text}>The third title in my phone</Text>
                </View>
            </Content>
            <Footer style={styles.footer_text}>
                <View style={styles.footer_view}>
                    <Text style={[styles.footer_btn, styles.footer_btn_left]} onPress={()=>navigation.navigate('Screen2')}>Buton1</Text>
                    <Text style={[styles.footer_btn, styles.footer_btn_right]}onPress={()=>alert(1)}>Buton1</Text>
                </View>
            </Footer>
        </Container>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#091046'
    },
    title_header:{
        alignItems:'center'
    },   
    content_text:{
        paddingTop: 10,
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 17,
        lineHeight: 25,
        color: "#9A9A9A",
    },
    content_title:{
        marginTop:5,
        borderBottomWidth:1,
        borderTopWidth:1,
        borderBottomColor: '#DFDFDF',
        borderTopColor:"#DFDFDF",
        marginBottom:5
    },
    content_title_text:{
        backgroundColor:'#FAFAFA',
        color: "#9A9A9A",
        fontSize: 17,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:5    
    },
    content_boder_radius:{
        marginTop: 5,
        marginLeft:10,
        marginRight:10,
        marginBottom:5,
        backgroundColor:'#F5F5F5',
        borderRadius:5
    },
    content_boder_radius_text:{
        padding: 10,
        color:'#C4C4C4'
    },
    content_footer:{
        borderBottomWidth:1,
        borderTopWidth:1,
        borderBottomColor: '#DFDFDF',
        borderTopColor:"#DFDFDF",
        alignItems:"center",
        marginTop:5
    },
    content_footer_text:{
        paddingTop:15,
        paddingBottom:15,
        color:"#4D91CD"
    },
    footer_text:{        
        backgroundColor:'white',
        height:50,
        borderTopColor:"#999999",
        borderTopWidth:1,       
    },
    footer_view:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height:30,
        margin:5,
        borderRadius:10,
        // elevation:1
       
    },
    footer_btn:{
        borderRadius:10,
        borderWidth:2,
        borderColor:'#F5F5F5',
        width:170,
        height: 45,
        textAlign:'center',
        textAlignVertical:'center'
    },
    footer_btn_left:{
        backgroundColor:'white',
        color:'black'
    },
    footer_btn_right:{
        backgroundColor:'#091046',
        color:'white',        
    }

  });
  