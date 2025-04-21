import { View, Text } from "react-native";
import { ImageViewer as ImageZoomViewer } from "react-native-image-zoom-viewer";

const images = [
  {
    // Simplest usage.
    url: "https://avatars2.githubusercontent.com/u/7970947?v=3&s=460",

    // width: number
    // height: number
    // Optional, if you know the image size, you can set the optimization performance

    // You can pass props to <Image />.
    props: {
      // headers: ...
    },
  },
  // , {
  //     url: '',
  //     props: {
  //         // Or you can set source directory.
  //         source: require('../background.png')
  //     }
  // }
];

export default function ImageViewerComponent() {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Text style={{ color: "white", fontSize: 20, marginBottom: 10 }}>
        Image Viewer
      </Text>
      <ImageZoomViewer
        imageUrls={images}
        index={0}
        onSwipeDown={() => {}}
        enableSwipeDown
      />
    </View>
  );
}
