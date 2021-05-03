import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Props {
    bird: { color: string }
    title: string;
    onPress: () => void;
}

const Bird = (props: Props) => {

    return (
        <TouchableOpacity onPress={props.onPress} style={[styles.birdContainer, { backgroundColor: props.bird.color }]}>
            <Text>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    birdContainer: {
        width: 75,
        height: 75,
        borderRadius: 75 / 2,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Bird