import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { University } from '../types/University';

interface Props {
    item: University;
}

const OneUniversity = (props: Props) => {
    return (
        <View style={styles.itemContainer}>
            <Text>{props.item.name}</Text>
            <Text>{props.item.country}</Text>
            <Text>{props.item.url}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        borderBottomWidth: 0.5
    }
})

export default React.memo(OneUniversity, (curr, next) => {
    return curr.item === next.item;
});