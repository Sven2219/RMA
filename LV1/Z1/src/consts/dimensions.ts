import { Dimensions } from "react-native"

const { width, height } = Dimensions.get("window");

export const dimensions = {
    width,
    height,
    modalWidth: width / 1.3,
    modalHeight: height / 4,
    playersIconWidth: width / 3,
    playerIconHeight: height / 5.2,
    diceWidth: width / 3.5,
    diceHeight: width / 3.5,
    statisticModalWidth: width / 1.2,
    statisticModalHeight: height / 2
}