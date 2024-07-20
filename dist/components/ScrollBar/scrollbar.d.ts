export declare const ScrollBar: import('react').ForwardRefExoticComponent<{
    scale: number;
    startingPosition?: {
        x: number;
        y: number;
    };
    offset?: {
        x: number;
        y: number;
    };
    color?: string;
    thickness?: string;
    minSize?: string;
    verticalOffsetHeight: number;
    horizontalOffsetWidth: number;
    onScrollDeltaHandler: (scrollDelta: {
        deltaX: number;
        deltaY: number;
    }) => void;
    getContainerOffset: (isVertical: boolean) => number;
} & import('react').RefAttributes<unknown>>;
