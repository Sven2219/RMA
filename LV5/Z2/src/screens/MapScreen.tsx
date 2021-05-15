import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Location } from '../containers/MapContainer';

const DELTA = 8.5;

interface Props {
    userLocation: Location;
}

const MapScreen = (props: Props) => {
    return (
        <View style={styles.mainContainer}>
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
                    latitude: props.userLocation.latitude,
                    longitude: props.userLocation.longitude,
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
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
export default MapScreen;