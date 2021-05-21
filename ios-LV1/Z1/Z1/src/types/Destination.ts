class Destination {
    id: number;
    name: string;
    description: string;
    uri: string;
    latitude: number;
    longitude: number;

    constructor(
        id: number,
        name: string,
        description: string,
        uri: string,
        latitude: number,
        longitude: number,

    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.uri = uri;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}

export default Destination;
