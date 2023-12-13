import { TextProps as TextPropsNative } from "react-native";
import { ContainerText } from "./text.style";
import { textTypes } from "./textType";
import { useMemo } from "react";

interface TextProps extends TextPropsNative{
    color?: string;
    type?: string;
};

const Text = ({ color, type, ...props }: TextProps) => {

    const handleSize: string = useMemo(() => {
        switch (type) {
            case textTypes.TITLE:
                return '32px';
            default:
                return '16px';
        }
    }, [type]);

    return (
        <ContainerText $fontSize={handleSize} $color={color} {...props} />
    )

};

export default Text;