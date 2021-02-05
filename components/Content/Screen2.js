import { Container, Content, Text, View } from 'native-base';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { List } from 'react-native-paper';
import Footer2 from '../Footer/FooterScreen2';

export default function Screen2() {
  const dataAccordion = [
    {
        title: 'おばあさん', 
        content: [
            {text: "123 紹介 （ じこしょうかい ）自己紹介 （ じこしょうかい ）自己紹介 （ じこしょうかい ）自己紹介 （ じこしょうかい ）"},
            {text: "456 紹介 （ じこしょうかい ）自己紹介 （ じこしょうかい ）自己紹介 （ じこしょうかい ）自己紹介 （ じこしょうかい ）"},
            {text: "789 紹介 （ じこしょうかい ）自己紹介 （ じこしょうかい ）自己紹介 （ じこしょうかい ）自己紹介 （ じこしょうかい ）"}
        ]
    },
    { 
        title: 'マイケルです。', 
        content: [
            {text: "123自己紹介じこしょうかい ）自己紹介じこしょうかい ）自己紹介じこしょうかい ）自己紹介"},
            {text: "456自己紹介じこしょうかい ）自己紹介じこしょうかい ）自己紹介じこしょうかい ）自己紹介"},
            {text: "789自己紹介じこしょうかい ）自己紹介じこしょうかい ）自己紹介じこしょうかい ）自己紹介"}
        ]
    },
    { 
        title: 'のマイケ',
        content: [
            {text: "123じこしょうかい ）自己紹介じこしょうかい ）自己紹介じこしょうかい ）自己紹介 （ じこしょうかい ）自己紹介 （ じこ"},
            {text: "456じこしょうかい ）自己紹介じこしょうかい ）自己紹介じこしょうかい ）自己紹介 （ じこしょうかい ）自己紹介 （ じこ"},
            {text: "789じこしょうかい ）自己紹介じこしょうかい ）自己紹介じこしょうかい ）自己紹介 （ じこしょうかい ）自己紹介 （ じこ"}
        ]
    },
  ];

  return (
    <Container>
      <Content>
        <List.Section>
          {dataAccordion.map((data, i) => (
            <List.Accordion key={i}
                style={styles.accordion}
                title={<Text style={styles.titleText}>{data.title}</Text>}
            >
            {
                data.content.map((dataContent, k) => 
                    {
                        return(
                            <Text key={k} style={styles.dataContent}>
                                {dataContent.text}
                            </Text>
                        )
                    }
                )
            }
            </List.Accordion>
          ))}

      </List.Section>
      </Content>
      <Footer2/>
    </Container>
  );
}
const styles = StyleSheet.create({
  accordion: {
    borderStyle: 'solid',
    borderColor: "#C1C1C1",
    borderWidth: 0,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor:'#EEEEEE', 
  },
  titleText: {
    fontSize:17, 
    fontWeight:"bold"
  },
  dataContent: {
    paddingLeft:15, 
    paddingRight:15,
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight:"bold", 
    color:"#848484"
  }
});