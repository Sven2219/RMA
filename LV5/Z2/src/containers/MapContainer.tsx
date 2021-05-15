import React from 'react';
import MapScreen from '../screens/MapScreen';
import Geolocation from 'react-native-geolocation-service';

export interface Location {
    latitude: number;
    longitude: number;
}

const MapContainer = () => {

    const [userLocation, setUserLocation] = React.useState<Location | undefined>();

    React.useEffect(() => {
        Geolocation.getCurrentPosition(
            async (position) => {
                const location = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }
                setUserLocation(location)
            },
            (error) => {
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 0, maximumAge: 0 }
        );
    }, [])

    if (userLocation) {
        return (
            <MapScreen userLocation={userLocation} />
        )
    }

    return null;
}


export default MapContainer;