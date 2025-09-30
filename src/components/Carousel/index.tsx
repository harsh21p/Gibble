import React from 'react'
import { Image, StyleProp, View, ViewStyle } from 'react-native';
import { SharedValue } from 'react-native-reanimated';
import Carousel, {
    CarouselRenderItem,
    ICarouselInstance,
    Pagination,
} from "react-native-reanimated-carousel";
import Images from '../../assets/images';
import carouselStyles from './styles';
interface CarouselProps {
    onProgressChange: SharedValue<number>;
    height: number;
    width: number;
    data: any[]; // Ideally you should type this better
    renderItem: CarouselRenderItem<any>;
    onPressPagination: (index: number) => void;
    style?: StyleProp<ViewStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    dotStyle?: StyleProp<ViewStyle>;
    activeDotStyle?: StyleProp<ViewStyle>;
    paginationContainerStyle?: StyleProp<ViewStyle>;
    dotSize?: number;
    ref: React.Ref<ICarouselInstance>
}
function CarouselComponent(props: CarouselProps) {
    const { style, containerStyle,renderItem, ref, onProgressChange, height, width, onPressPagination, data, dotSize, dotStyle, activeDotStyle, paginationContainerStyle } = props
    return (
        <>
            <Carousel
                style={style}
                containerStyle={containerStyle}
                ref={ref}
                onProgressChange={onProgressChange}
                mode='horizontal-stack'
                modeConfig={{
                    snapDirection: 'left',
                    stackInterval: 10,
                }}
                width={width}
                height={height}
                data={data}
                renderItem={renderItem}
            />
            <Pagination.Basic
                progress={onProgressChange}
                data={data}
                dotStyle={dotStyle ?? carouselStyles.defaultDotStyle}
                containerStyle={paginationContainerStyle}
                onPress={onPressPagination}
                activeDotStyle={activeDotStyle ?? carouselStyles.activeDotStyle}
                size={dotSize}
            />
        </>
    )
}

export default CarouselComponent
