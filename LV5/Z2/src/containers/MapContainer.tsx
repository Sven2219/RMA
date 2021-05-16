import React from 'react';
import MapScreen from '../screens/MapScreen';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoder';
import Camera from '../components/Camera';
export interface Location {
    position: {
        lat: number;
        lng: number;
    }
    country: string;
    streetName: string;
}

const MapContainer = () => {
    const [isCameraOpen, setIsCameraOpen] = React.useState<boolean>(false);
    const [userLocation, setUserLocation] = React.useState<Location | undefined>();



    React.useEffect(() => {
        Geolocation.getCurrentPosition(
            async (position) => {
                const location = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }
                const decoded = await Geocoder.geocodePosition({ lat: location.latitude, lng: location.longitude });
                setUserLocation(decoded[0])
            },
            (error) => {
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 0, maximumAge: 0 }
        );
    }, [])

    if (userLocation && !isCameraOpen) {
        return (
            <MapScreen userLocation={userLocation} openCamera={() => setIsCameraOpen(true)} />
        )
    }
    if (isCameraOpen) {
        return (<Camera path={`${userLocation?.country}`} />)
    }

    return null;
}


export default MapContainer;