import React from 'react';
import FooterScreen2 from './components/Footer/FooterScreen2';
import HeaderScreen2 from './components/Header/HeaderScreen2';
import Screen2 from './components/Content/Screen2';
import { Container } from 'native-base';

export default function App() {
  return (
    <Container>  
        <HeaderScreen2/>     
        <Screen2/>
        <FooterScreen2/>
    </Container>
  );
}

