import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import Destination from '../Types/Destination';
import MapView, { Marker } from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
    details: Destination;
    navigateBack: () => void;
}

const ViewDestinationScreen = (props: Props) => {
    const RenderMap = React.useMemo(() => {
        if (props.details.latitude !== undefined && props.details.longitude !== undefined) {
            return (
                <MapView
                    style={styles.mapContainer}
                    initialRegion={{
                        latitude: parseInt(props.details.latitude),
                        longitude: parseInt(props.details.longitude),
                        latitudeDelta: 8.5,
                        longitudeDelta: 8.5,
                    }}
                >
                    <Marker coordinate={{ latitude: parseInt(props.details.latitude), longitude: parseInt(props.details.longitude) }} />

                </MapView>
            )
        }
        return null;
    }, [props.details])

    const RenderImage = React.useMemo(() => {
        if (props.details.uri) {
            return (<View style={styles.imageContainer}>
                <Image source={{ uri: props.details.uri }} style={styles.imageContainer} />
            </View>)
        }
        return null;
    }, [props.details])

    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={props.navigateBack} style={styles.backButtonPosition}>
                    <Ionicons name="chevron-back" size={35} color="blue" />
                    <Text style={styles.backButtonText}>Moje Destinacije</Text>
                </TouchableOpacity>
            </View>
            {RenderMap}
            <View style={styles.infoContainer}>
                <Text style={styles.destinationText}>Destinacija</Text>
                <Text style={styles.descriptionText}>
                    Opis
                </Text>
                <Text>{props.details.description}</Text>
            </View>
            {RenderImage}
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    mapContainer: {
        width: "100%",
        height: 200
    },
    backButton: {
        bottom: 6,
        zIndex: 2,
    },
    backButtonPosition: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButtonText: {
        fontSize: 17,
        color: 'blue',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomWidth: 1,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#d3d3d3'
    },
    infoContainer: {
        padding: 20,
    },
    destinationText: {
        fontWeight: 'bold',
        fontSize: 17
    },
    descriptionText: {
        fontSize: 17,
        color: "#d3d3d3"
    },
    imageContainer: {
        width: "100%",
        height: 400,
    }
})

export default ViewDestinationScreen;