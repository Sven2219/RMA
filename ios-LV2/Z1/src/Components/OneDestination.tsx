import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Destination from '../Types/Destination';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import DeleteAction from './DeleteAction';
import ViewAction from './ViewAction';

interface Props {
    item: Destination;
    navigateToDetails: (id: number) => void;
    openDeleteModal: (id: number) => void;
}

const OneDestination = (props: Props) => {
    const renderRightActions = React.useCallback(() => {
        return (
            <DeleteAction deleteAction={() => props.openDeleteModal(props.item.id)} />
        )
    }, [props.openDeleteModal])

    const renderLeftActions = React.useCallback(() => {
        return (
            <ViewAction viewAction={() => props.navigateToDetails(props.item.id)} />
        )
    }, [props.navigateToDetails])

    const DestinationImage = React.useMemo(() => {
        if (props.item.uri) {
            return (
                <Image source={{ uri: props.item.uri }} style={styles.imageSize} />
            )
        } else {
            return <View style={styles.imageSize} />
        }
    }, [props.item])

    return (
        <Swipeable renderRightActions={renderRightActions} renderLeftActions={renderLeftActions}>
            <View style={styles.destinationContainer}>
                {DestinationImage}
                <View>
                    <Text style={styles.titleStyle}>
                        {props.item.name}
                    </Text>
                    <Text style={styles.descriptionStyle}>
                        {props.item.description}
                    </Text>
                </View>
            </View>
        </Swipeable>
    )
}

const styles = StyleSheet.create({

    destinationContainer: {
        borderBottomWidth: 1,
        backgroundColor: 'white',
        padding: 20,
        flexDirection: 'row'
    },
    titleStyle: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    descriptionStyle: {
        fontSize: 16
    },
    imageSize: {
        width: 60,
        height: 60,
        marginRight: 20
    }
})

export default React.memo(OneDestination, (curr, next) => {
    return curr.item === next.item;
});