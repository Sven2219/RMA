import { Dimensions } from "react-native"

const { width, height } = Dimensions.get("window");
export default {
    width,
    height,
    quoteWidth:width/3.4,
    quoteHeight:200,
    imageWidth:200,
    imageHeight:200,
    itemWidth:"100%",
    itemHeight:height/5
}