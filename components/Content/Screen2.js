import { Content, Text } from 'native-base';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { List } from 'react-native-paper';

export default function Screen2() {
  const dataAccordion = [
      {
         title: 'おばあさん', 
         text: "自己紹介 （ じこしょうかい ）自己紹介 （ じこしょうかい ）自己紹介 （ じこしょうかい ）自己紹介 （ じこしょうかい ）" 
      },
      { 
        title: 'マイケルです。', 
        text: "じこしょうかい ）自己紹介じこしょうかい ）自己紹介じこしょうかい ）自己紹介じこしょうかい ）自己紹介" 
      },
      { 
        title: 'のマイケ',
        text: "じこしょうかい ）自己紹介じこしょうかい ）自己紹介じこしょうかい ）自己紹介 （ じこしょうかい ）自己紹介 （ じこ" 
      },
  ];

  return (
    <Content>
      <List.Section>
        {dataAccordion.map((data) => (
           <List.Accordion
              style={styles.accordion}
              title={<Text style={styles.titleText}>{data.title}</Text>}
            >
            <Text style={styles.titleContent}>
                {data.text}
            </Text>
          </List.Accordion>
        ))}
    </List.Section>
    </Content>
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
  titleContent: {
    paddingLeft:15, 
    paddingRight:15, 
    fontWeight:"bold", 
    color:"#848484"
  }
});