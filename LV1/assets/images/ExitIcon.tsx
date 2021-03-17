import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

interface Props {
    size?: number;
}

const ExitIcon = (props: Props) => {
    return (
        <Svg
            width={props.size ? props.size : 20}
            height={props.size ? props.size : 20}
            viewBox="0 0 12 12"
            {...props}
        >
            <G
                stroke="#111"
                strokeWidth={1.5}
                fill="none"
                fillRule="evenodd"
                strokeLinecap="square"
            >
                <Path d="M1.5 1.5l9 9M10.5 1.5l-9 9" />
            </G>
        </Svg>
    )
}

export default ExitIcon;
