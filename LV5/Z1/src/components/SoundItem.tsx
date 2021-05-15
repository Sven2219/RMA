import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Playlist } from '../helpers/playlist';

interface Props {
    item: Playlist;
    playSound: (item: Playlist) => void;
}

const SoundItem = (props: Props) => {
    return (
        <TouchableOpacity style={styles.itemContainer} onPress={() => props.playSound(props.item)}>
            <Image source={props.item.image} style={styles.imageSize} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    imageSize: {
        width: "80%",
        height: 200,
        resizeMode: 'stretch'
    }
})


export default SoundItem;