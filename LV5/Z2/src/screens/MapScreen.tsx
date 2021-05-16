import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import LocationInformation from '../components/LocationInformation';
import { Location } from '../containers/MapContainer';

const DELTA = 8.5;

interface Props {
    userLocation: Location;
    openCamera: () => void;
}

const MapScreen = (props: Props) => {
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity onPress={props.openCamera} style={styles.saveImageButton}>
                <Text style={styles.saveImageText}>Snimi fotografiju</Text>
            </TouchableOpacity>
            <LocationInformation location={props.userLocation} />
            <MapView
                zoomEnabled={true}
                showsBuildings={false}
                showsCompass={false}
                showsUserLocation={true}
                showsMyLocationButton={true}
                rotateEnabled={true}
                showsTraffic={false}
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={{
                    latitude: props.userLocation.position.lat,
                    longitude: props.userLocation.position.lng,
                    latitudeDelta: DELTA,
                    longitudeDelta: DELTA,
                }}
            >
            </MapView>
        </View>
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        ...StyleSheet.absoluteFillObject,
        height: "100%",
        width: "100%",
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    map: {
        width: "100%",
        height: "80%"
    },
    saveImageButton: {
        backgroundColor: 'green',
        width: "80%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    saveImageText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        padding: 10
    }
});
export default MapScreen;