import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../consts/colors';
import Feather from 'react-native-vector-icons/Feather'

interface Props{
    deleteAction:()=>void;
}

const DeleteAction = (props:Props) => {
    return (<View style={styles.rightActionContainer}>
        <Feather name="x" size={30} color={colors.white} onPress={props.deleteAction}/>
    </View>)
}


const styles = StyleSheet.create({
    rightActionContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: colors.fireBrick,
        width: 100,
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: colors.white
    }
})

export default DeleteAction