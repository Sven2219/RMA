import AsyncStorage from '@react-native-community/async-storage';
import Destination from '../types/Destination';

export const saveToAsyncStorage = async (key: string, value: any): Promise<void> => {
    try {
        await AsyncStorage.setItem(
            key,
            JSON.stringify(value),
        );
    } catch (error) { }
}

export const getFromAsyncStorage = async (key: string): Promise<Destination[] | undefined> => {
    try {
        const destination = await AsyncStorage.getItem(key);
        if (destination) {
            const parsed = JSON.parse(destination);
            if (parsed)
                return parsed;
        }
        return undefined;
    } catch (error) {

    }
}