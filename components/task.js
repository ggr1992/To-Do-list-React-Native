import React from "react";
import { View,StyleSheet, Text, TouchableOpacity } from "react-native";

const Task = (props) => {


    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
            <View style={styles.line}></View>
            <Text style={styles.itemText}>
                {props.text}
            </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    line: {
        width: 10,
        height: 2,
        backgroundColor: '#0f233b',
        marginRight: 15,
        borderRadius: 5
    },
    itemText: {
        maxWidth: '80%',
        fontSize: 16,
        fontWeight: '400'
    },
   
});

export default Task