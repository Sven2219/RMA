import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import User from '../../data/model/User';

interface Props {
    item: User;
}

const OneUser = (props: Props) => {
    return (
        <View style={styles.userContainer}>
            <Image source={{ uri: props.item.avatar }} style={styles.imageSize} />
            <Text>{props.item.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    imageSize: {
        width: 200,
        height: 200,
        borderWidth: 1,
    },
    userContainer: {

    }
})

export default React.memo(OneUser, (curr, next) => {
    return curr.item === next.item;
});