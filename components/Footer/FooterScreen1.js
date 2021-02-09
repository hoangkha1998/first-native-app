import { Button, Col, Content, Footer, FooterTab, Grid } from 'native-base';
import React from 'react';
import {Text, StyleSheet } from 'react-native';

export default function FooterScreen1({navigation}){
    return(
        <Footer>
             <FooterTab style={styles.footer}> 
                <Content style={{padding:5}}>  
                    <Grid>
                        <Col>
                            <Button block bordered style={styles.btn1} onPress={() => navigation.navigate('Screen2')}>                         
                                <Text style={styles.buttonText1}>八丈方言</Text> 
                            </Button>
                            
                        </Col>
                        <Col>
                            <Button block bordered style={styles.btn2} onPress={() => navigation.navigate('SettingScreen')}>                         
                                <Text style={styles.buttonText2}>琉球方言</Text> 
                            </Button>
                        </Col>
                    </Grid>
                </Content>
            </FooterTab>
        </Footer>
    )
}

const styles = StyleSheet.create({
    footer: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 12,
        backgroundColor:'white',
    },

    btn1: {
        borderColor: '#a9a9a9',
        flex:1,
        marginRight:5,
        borderRadius:5,
    },

    btn2: {
        backgroundColor: "#091046",
        flex:1,
        borderRadius:5,
    },
    buttonText1: {
        fontSize: 15,
        textAlign:'center',
        color: 'black',
        fontWeight: "bold",
    },
    buttonText2: {
        fontSize: 15,
        fontWeight: "bold",
        textAlign:'center',
        color: 'white',
    }
});