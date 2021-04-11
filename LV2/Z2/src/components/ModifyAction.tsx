import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../consts/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

interface Props{
    modifyAction:()=>void;
}

const ModifyAction=(props:Props)=>{
    return(<View style={styles.leftActionContainer}>
        <FontAwesome name="pencil-square-o" size={30} color={colors.dark} onPress={props.modifyAction}/>
    </View>)
}


const styles = StyleSheet.create({
    leftActionContainer:{
        justifyContent:'center',
        backgroundColor:colors.updateColor,
        width:100,
        alignItems:'center'
    },
    text:{
        fontSize:20,
        fontWeight:"bold",
        color:colors.white
    }
})

export default ModifyAction