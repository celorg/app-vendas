import { SafeAreaView, Text, View } from "react-native";
import styled from "styled-components/native";

const TextNew = styled.Text`
    color: #ff8800;
    font-size: 24px;
`

const App = () => {

    return (
        <SafeAreaView>
            <View>
                <Text>Testando</Text>
                <TextNew title="Titutlo teste" >Novo Teste</TextNew>
            </View>
        </SafeAreaView>
    )
};

export default App;
