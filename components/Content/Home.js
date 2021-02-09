import React, { version } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';

export default function Tabbar() {
    const dataTitleImage = [
        {
            title: 'String6', 
            image: 'briefcase'
        },
        {
            title: 'String7', 
            image: 'train'
        },
        {
            title: 'String8', 
            image: 'map'
        },
        {
            title: 'String9', 
            image: 'infinite-outline'
        },
        {
            title: 'String10', 
            image: 'time'
        },
        {
            title: 'String11', 
            image: 'calendar'
        },
        {
            title: 'String12', 
            image: 'card'
        },
    ];
    
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

                <View style={styles.infor2}>
                {dataTitleImage.map((data, i) => (
                    <View style={styles.projectRow}>
                        <View style={styles.icon}>
                            <Ionicons name={data.image} size={17} color="white" />
                        </View>
                        <View style={styles.titleInfo}>
                            <Text style={styles.titleItemList}>{data.title}</Text>
                        </View>
                        <View styles={{ marginLeft: 20 }}>
                            <Text style={{ color:"white"}}>2021/02/09</Text>
                        </View>
                    </View>
                ))}
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
        padding: 10,
        flexDirection: 'row',
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
        justifyContent: "space-between"
    },

    titleInfo: {
        paddingLeft: 10,
    },

    icon: {
        width: "6%",
        alignItems: "center",
        justifyContent: "center"
    },

    textSubmit: {
        fontSize:13,
        color: "#FFFFFF",
        fontWeight: "bold",
        textAlign: "center",
        paddingTop : 5,
    }
})