import AsyncStorage from '@react-native-community/async-storage';

export const saveToAsyncStorage = async (key: string, value: any): Promise<void> => {
    try {
        await AsyncStorage.setItem(
            key,
            JSON.stringify(value),
        );
    } catch (error) { }
}

export const getFromAsyncStorage = async (key: string): Promise<number | undefined> => {
    try {
        const counter = await AsyncStorage.getItem(key);
        if (counter)
            return parseInt(counter);
        return undefined;
    } catch (error) {

    }
}
