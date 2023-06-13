import { Camera, CameraType } from "expo-camera";
import { useRef, useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  Button,
  View,
} from "react-native";
import IconButton from "./IconButton";
import { Colors } from "../constants/colors";

const ImagePicker = () => {
  const cameraRef = useRef();
  const [photo, setPhoto] = useState();
  const [cameraPermission, requestCameraPermission] =
    Camera.useCameraPermissions();

  if (!cameraPermission) {
    return <View />;
  }

  if (!cameraPermission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestCameraPermission} title="grant permission" />
      </View>
    );
  }

  const getCameraSettings = async (camera) => {
    const aspectRatios = await camera.getSupportedRatiosAsync(); // Android
    let aspectRatio = null;
    if (aspectRatios?.length > 0) {
      aspectRatios.forEach((r) => console.log("ratio", r));
      aspectRatio = aspectRatios[0];
    }
    const pictureSizes = await camera.getAvailablePictureSizesAsync(
      aspectRatio
    );
    pictureSizes.forEach((s) => console.log("size", s));
  };

  const takePic = async () => {
    if (cameraRef.current) {
      await getCameraSettings(cameraRef.current); // testing
      const cameraOptions = {
        quality: 1,
        exif: false,
      };
      const takenPhoto = await cameraRef.current.takePictureAsync(
        cameraOptions
      );
      console.log(takenPhoto);
      setPhoto(takenPhoto);
    }
  };

  let preview = <Text>No image take yet.</Text>;

  if (photo) {
    preview = <Image source={{ uri: photo.uri }} style={styles.image} />;
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={cameraRef} type={CameraType.back}>
        <IconButton
          icon="camera"
          size={32}
          color="white"
          pressHandler={takePic}
        />
      </Camera>
      <View style={styles.preview}>{preview}</View>
    </View>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    width: width,
    height: height / 2.5,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  preview: {
    width: "100%",
    height: 225,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImagePicker;
