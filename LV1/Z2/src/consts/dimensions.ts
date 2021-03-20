import { Dimensions } from "react-native"

const { width } = Dimensions.get("window");

export const dimensions = {
    cardWidth: width / 5,
    cardHeight: 140
}