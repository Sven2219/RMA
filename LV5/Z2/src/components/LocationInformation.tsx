import React from 'react';
import { Text, View } from 'react-native';
import { Location } from '../containers/MapContainer';

interface Props {
    location: Location;
}

const LocationInformation = (props: Props) => {
    return (
        <View>
            <Text>
                Geografska sirina:{props.location.position.lat}
            </Text>
            <Text>
                Geografska dužina:{props.location.position.lng}
            </Text>
            <Text>
                Država:{props.location.country}
            </Text>
            <Text>
                Ulica:{props.location.streetName}
            </Text>
        </View>
    )
}

export default LocationInformation;