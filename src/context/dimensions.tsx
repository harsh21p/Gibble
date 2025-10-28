import { createContext, useContext, useState } from "react";
import { Dimensions } from "react-native";


interface IScreenDimensions {
    screenHeight: number;
    screenWidth: number
}
const DimensionsContext = createContext({
    screenDimensions: { screenHeight: Dimensions.get("screen").height, screenWidth: Dimensions.get("screen").width },
    setScreenDimensions(arg: IScreenDimensions) { }
})
export const DimensionsContextProvider = (props: React.PropsWithChildren) => {
    const [screenDimensions, setScreenDimensions] = useState({
        screenHeight: Dimensions.get("screen").height, screenWidth: Dimensions.get("screen").width
    });
    return (
        <DimensionsContext.Provider value={{ screenDimensions, setScreenDimensions }}>
            {props.children}
        </DimensionsContext.Provider>
    )
}

export const useDimensionsContext = () => {
    return useContext(DimensionsContext)
}