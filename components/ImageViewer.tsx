import { View, Text, Modal } from "react-native";
import {
  ImageViewer as ImageZoomViewer,
  ImageViewerPropsDefine,
} from "react-native-image-zoom-viewer";

const images: ImageViewerPropsDefine["imageUrls"] = [
  {
    url: "https://picsum.photos/200/300",
  },
];

type TProps ={
    visible:boolean
    onSwipeDown:()=>void
}

export default function ImageViewerComponent(props:TProps) {
  return (
    <View>
      <Modal visible={props.visible} transparent={false}>
        <ImageZoomViewer
          imageUrls={images}
          index={0}
          onSwipeDown={props.onSwipeDown}
          enableSwipeDown
        />
      </Modal>
    </View>
  );
}
