import * as React from 'react';
import { Body, Container, Header, Left, Right, Title } from 'native-base';
import { StyleSheet } from 'react-native';

export default function HeaderScreen2() {
  return (
      <Header style={styles.header}>
          <Left style={{flex:1}}/>
            <Body style={{flex:1}}>
              <Title style={{alignSelf:'center'}}>東日本方言</Title>
          </Body>
          <Right style={{flex:1}}/>
      </Header>
  );
}

const styles = StyleSheet.create({
  header: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 12,
    backgroundColor:"#091046"
  },
});