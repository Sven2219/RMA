import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import User from '../../data/model/User';

interface Props {
    item: User;
}

const OneUser = (props: Props) => {
    console.log(props.item)
    return (
        <View style={styles.userContainer}>
            <View style={styles.imageSize}>
                <Image source={{ uri: props.item.avatar }} />
            </View>
            <View style={styles.userInfoContainer}>
                <Text style={styles.textStyle}>{props.item.name}</Text>
                <Text style={styles.textStyle}>{props.item.email}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageSize: {
        width: 150,
        height: 150,
        borderWidth: 1,
        borderRadius: 4,
    },
    userContainer: {
        flexDirection: 'row',
        padding: 10
    },
    userInfoContainer: {
        padding: 10,

    },
    textStyle: {
        fontSize: 14,
        flexWrap: 'wrap',
    }
})

export default React.memo(OneUser, (curr, next) => {
    return curr.item === next.item;
});