import React from 'react';
import { StyleSheet, FlatList, View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons'
import OneDestination from '../Components/OneDestination';
import Destination from '../Types/Destination';

interface Props {
    destinations: Destination[];
    activeItem: number;
    navigateToDetails: (id: number) => void;
    deleteDestination: () => void;
    closeDeleteModal: () => void;
    openDeleteModal: (id: number) => void;
    goToAddNewDestination: () => void;
}

const DestinationsScreen = (props: Props) => {

    const MemoizedListOfDestinations = React.useMemo(() => {
        return (
            <FlatList
                data={props.destinations}
                keyExtractor={(item, index) => index.toString() + `${item.id}`}
                renderItem={({ item }) => {
                    return <OneDestination navigateToDetails={props.navigateToDetails} item={item} openDeleteModal={props.openDeleteModal} />
                }}
            />
        )
    }, [props.destinations, props.openDeleteModal])

    const DeleteModal = React.useMemo(() => {
        return (
            <Modal style={styles.positionCenter} isVisible={props.activeItem !== -1 ? true : false} animationIn={'flipInY'} animationOut={'flipOutY'} useNativeDriver={true}>
                <View style={styles.modalContainer}>
                    <View style={[styles.positionCenter, styles.titleDecorationContainer]}>
                        <Text style={styles.modalTitle}>
                            Obrisi destinaciju?
                        </Text>
                    </View>
                    <View style={styles.comandsContainer}>
                        <View style={styles.rightCommand}>
                            <TouchableOpacity onPress={props.closeDeleteModal}>
                                <Text style={[styles.commandText, { color: 'blue' }]}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.leftCommand}>
                            <TouchableOpacity onPress={props.deleteDestination}>
                                <Text style={[styles.commandText, { color: 'red' }]}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }, [props.closeDeleteModal, props.openDeleteModal, props.activeItem])

    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    Moje destinacije
                </Text>
            </View>
            <TouchableOpacity style={styles.addButtonContainer} onPress={props.goToAddNewDestination}>
                <Text>Plus</Text>
            </TouchableOpacity>
            {MemoizedListOfDestinations}
            {DeleteModal}
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderBottomWidth: 1,
        backgroundColor: '#d3d3d3'
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    addButtonContainer: {
        position: 'absolute',
        right: 0,
        top: 50
    },
    modalContainer: {
        width: 250,
        height: 120,
        borderRadius: 20,
        backgroundColor: 'white',

    },
    positionCenter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalTitle: {
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold'
    },
    titleDecorationContainer: {
        borderBottomWidth: 0.6,
        padding: 10
    },
    comandsContainer: {
        flexDirection: 'row',
        height: "50%",
        alignItems: 'center',

    },
    leftCommand: {
        width: "50%",
        alignItems: 'center'
    },
    rightCommand: {
        width: "50%",
        alignItems: 'center',
    },
    commandText: {
        fontSize: 17,
    }
})


export default DestinationsScreen;