import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../consts/colors';

interface Props {
    title: string;
    handleClick: () => void;
}

const CustomButton = (props: Props) => {
    return (
        <TouchableOpacity
            onPress={props.handleClick}
            activeOpacity={0.4}
            style={styles.mainContainer}
        >
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor:colors.dark,
        paddingVertical:15,
        paddingHorizontal:30,
        borderRadius:8,
    },
    title:{
        alignSelf:'flex-start',
        fontSize:20,
        color:colors.white,
    }
})


export default CustomButton;