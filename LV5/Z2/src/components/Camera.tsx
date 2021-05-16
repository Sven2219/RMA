import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Ionicons from 'react-native-vector-icons/Ionicons'
import RNFetchBlob from 'rn-fetch-blob';
import CameraRoll from "@react-native-community/cameraroll";

interface Props {
    path: string;
}

const Camera = (props: Props) => {
    const cameraRef = React.useRef<any>();

    const takePicture = async () => {
        if (cameraRef.current) {
            const options = { quality: 0.5, base64: true };
            const data = await cameraRef.current.takePictureAsync(options);
            CameraRoll.save(data.uri);
        }
    };
    return (
        <View style={styles.mainContainer}>
            <RNCamera
                ref={ref => cameraRef.current = ref}
                style={styles.mainContainer}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.on}
                androidCameraPermissionOptions={{
                    title: 'Permission to use camera',
                    message: 'We need your permission to use your camera',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}

            >
                <View style={styles.iconContainer}>
                    <Ionicons name="camera-outline" size={50} onPress={takePicture} style={styles.icon} />
                </View>
            </RNCamera>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    iconContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1,
        bottom: 20,
    },
    icon: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 5
    }
})

export default Camera;