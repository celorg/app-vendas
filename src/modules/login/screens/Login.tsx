import { Text, TextInput, View } from "react-native";
import { ContainerLogin } from "../styles/login.style";
import Input from "../../../shared/components/input/input";
import Button from "../../../shared/components/button/button";

const Login = () => {

    const handleOnPress = () => {
        console.log('clicou')
    }

    return (
        <View>
            <ContainerLogin>
                <Text>Ver teste</Text>
                <Input />
                <Button title="Entrar" margin='16px' onPress={handleOnPress} />
            </ContainerLogin>
        </View>
    )
};

export default Login;
