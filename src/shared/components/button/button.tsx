import { TouchableOpacityProps } from "react-native";
import { ButtonContainer } from "./button.style";
import Text from "../text/text";
import { theme } from "../../themes/theme";
import { textTypes } from "../text/textType";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    margin?: string;
}

const Button = ({title, margin, ...props}: ButtonProps) => {
    return (
        <ButtonContainer $margin={margin} {...props} >
            <Text type={textTypes.BUTTON_BOLD} color={theme.colors.neutralTheme.white} >{title}</Text>
        </ButtonContainer>
    )
};

export default Button;
