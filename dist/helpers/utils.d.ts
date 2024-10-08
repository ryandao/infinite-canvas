export declare const useOnScreen: (ref: {
    current: Element;
}, { rootMargin, triggerOnce }?: {
    rootMargin?: string | undefined;
    triggerOnce?: boolean | undefined;
}) => boolean;
export declare const clampValue: ({ value, min, max, }: {
    value: number;
    min?: number;
    max: number;
}) => number;
export declare const getUpdatedNodePosition: ({ position, svgBounds, nodeBounds, currentTranslateX, currentTranslateY, currentScale, updatedScale, customOffset }: {
    position: string;
    svgBounds: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    nodeBounds: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    currentTranslateX: number;
    currentTranslateY: number;
    currentScale: number;
    updatedScale: number;
    customOffset: {
        x: number;
        y: number;
    };
}) => {
    updatedX: number;
    updatedY: number;
};
export declare const getScrollSize: (scale: number) => number[];
export declare const onScrollHandler: ({ isVertical, state, scrollDelta, scrollLength, }: {
    isVertical?: boolean;
    state: {
        verticalPos: number;
        horizontalPos: number;
        verticalSize: number;
        horizontalSize: number;
        verticalSizeDecrease: number;
        horizontalSizeDecrease: number;
    };
    scrollDelta: {
        deltaX: number;
        deltaY: number;
    };
    scrollLength: number;
}) => number[];
