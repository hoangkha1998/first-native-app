import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';

export default function Tabbar({ navigation }) {
    return(     
        <View style={styles.container}>
            <View style={styles.formInput}>
                <View style={styles.itemForm}>
                    <View style={styles.line}>
                        <View>
                            <Text style={styles.textLabel}>String1:</Text>
                        </View>
                        <View style={styles.textBox}>
                            <TextInput style={styles.inputText}/>
                        </View>
                    </View>
                    <View style={styles.line}>
                        <View>
                            <Text style={styles.textLabel}>String2:</Text>
                        </View>
                        <View style={styles.textBox}>
                            <TextInput style={styles.inputText}/>
                        </View>
                    </View>
                    <View style={styles.line}>
                        <View>
                            <Text style={styles.textLabel}>String3:</Text>
                        </View>
                        <View style={styles.textBox}>
                            <TextInput style={styles.inputText} value="    02/09 (古)"/>
                        </View>
                    </View>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity
                            style={styles.btnSubmit}
                    >
                    <Text style={styles.textSubmit} >Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.infor}>
                <View style={styles.infor1}>
                    <View style={styles.btnInfor2}>
                        <TouchableOpacity
                            style={styles.btnClickMe}
                        >
                        <Text style={styles.textClickMe} >String4</Text>
                        </TouchableOpacity>
                        <View>
                            <Text style={styles.textBtnInfor}>String5</Text>
                        </View>
                    </View>
                    <View style={{ position: 'relative' , width:"25%"}}>
                        <View style={{ position: 'absolute', zIndex:0  }}>
                            <Text style={styles.textDatetime}>2021/02/09</Text>
                        </View>
                        <View style={{ paddingLeft:50 }}>
                            <Image style={{ width:20, height:20 }} source={ require('../../assets/icon/sea-star.png')}/>
                        </View>
                    </View>
                </View>

                <View style={ styles.borderBottom }>
                    <View style={ styles.borderLine }/>
                </View>

                <View style={styles.infor1}>
                    <View style={styles.btnInfor2}>
                        <View style={styles.icon}>
                            <Ionicons name="briefcase" size={17} color="white" />
                        </View>
                        <View style={styles.titleInfo}>
                            <Text style={styles.titleItemList}>String6</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.infor1}>
                    <View style={styles.btnInfor2}>
                        <View style={styles.icon}>
                            <Ionicons name="train" size={17} color="white" />
                        </View>
                        <View style={styles.titleInfo}>
                            <Text style={styles.titleItemList}>String7</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.infor1}>
                    <View style={styles.btnInfor2}>
                        <View style={styles.icon}>
                            <Ionicons name="map" size={17} color="white" />
                        </View>
                        <View style={styles.titleInfo}>
                            <Text style={styles.titleItemList}>String8</Text>
                        </View>
                    </View>
                    <View style={styles.moreContainer}>
                        <Icon name="chevron-right" size={15} color="white" style={styles.moreIcon} />
                    </View>
                </View>

                <View style={styles.infor1}>
                    <View style={styles.btnInfor2}>
                        <View style={styles.icon}>
                            <Ionicons name="infinite-outline" size={17} color="white" />
                        </View>
                        <View style={styles.titleInfo}>
                            <Text style={styles.titleItemList}>String9</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.infor1}>
                    <View style={styles.btnInfor2}>
                        <View style={styles.icon}>
                            <Ionicons name="time" size={17} color="white" />
                        </View>
                        <View style={styles.titleInfo}>
                            <Text style={styles.titleItemList}>String10</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.infor1}>
                    <View style={styles.btnInfor2}>
                        <View style={styles.icon}>
                            <Ionicons name="calendar" size={17} color="white" />
                        </View>
                        <View style={styles.titleInfo}>
                            <Text style={styles.titleItemList}>String11</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.infor1}>
                    <View style={styles.btnInfor2}>
                        <View style={styles.icon}>
                            <Ionicons name="card" size={17} color="white" />
                        </View>
                        <View style={styles.titleInfo}>
                            <Text style={styles.titleItemList}>String12</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#022B77',
    },
    
    formInput: {
        backgroundColor: "#2D5698",
        flexDirection: "row",
        marginTop: 15
    },

    itemForm: {
        width: "75%",
        alignItems: 'center',
    },

    btnContainer: {
        justifyContent: "flex-end",
        paddingBottom: 10,
        width: "20%",
    },

    line: {
        flexDirection: 'row',
        alignItems: 'center',
        padding:10,
    },
    
    textLabel: {
      fontSize:13,
      color: "#FFFFFF",
      fontWeight: "bold",
      width: 60,
      marginRight: 10,
    },

    textBox: {
        height: 30,
        backgroundColor: '#FFFFFF',
        flexGrow: 1,
        borderRadius: 6,
    },

    infor: {
        backgroundColor: "#2D5698",
        flexDirection: "column",
        marginTop: 8
    },

    infor1: {
        flexDirection: "row",
        justifyContent: 'space-between'
    },

    infor2: {
        borderBottomWidth: 0,
    },

    btnInfor2: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingBottom: 0,
        paddingTop: 10
    },

    btnClickMe: {
        backgroundColor: "#FDD906",
        width: 50,
        height: 50,
        borderRadius: 6
    },

    btnSubmit: {
        backgroundColor: "#2CAEE7",
        height: 30,
        borderRadius: 6
    },

    textClickMe: {
        fontSize:13,
        color: "#4C887F",
        fontWeight: "bold",
        textAlign: "center",
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop : 15,
    },

    textBtnInfor: {
        fontSize:13,
        color: "#FFFFFF",
        fontWeight: "bold",
        marginLeft: 10,
    },

    textDatetime: {
        fontSize: 13,
        color: "#FFFFFF",
        zIndex: 2,
        paddingTop: 10,
        paddingRight: 20,
    },

    titleItemList: {
      fontSize: 15,
      color: "#FFFFFF",
    },

    projectRow: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingLeft: 10,
    },

    titleInfo: {
        paddingLeft: 10,
    },

    icon: {
        justifyContent: "center"
    },

    moreContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    moreIcon: {
        paddingRight: 20
    },

    textSubmit: {
        fontSize:13,
        color: "#FFFFFF",
        fontWeight: "bold",
        textAlign: "center",
        paddingTop : 5,
    },

    borderBottom: {
        justifyContent: "center", 
        alignItems: "center"
    },
    borderLine: {
        width: '90%',
        borderBottomColor: 'white',
        borderBottomWidth: 0.2, 
        padding: 5
    }
})