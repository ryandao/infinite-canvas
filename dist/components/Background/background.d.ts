export interface BackgroundProps {
    id?: string;
    size?: number;
    minSize?: number;
    maxZoom?: number;
    gap?: number;
    zoomTransform?: {
        scale: number;
        translateX: number;
        translateY: number;
    };
    className?: string;
    minOpacity?: number;
    maxOpacity?: number;
    elementColor?: string;
}
export declare const Background: ({ id, size, minSize, maxZoom, gap, zoomTransform, className, minOpacity, maxOpacity, elementColor, }: BackgroundProps) => import("react/jsx-runtime").JSX.Element;
