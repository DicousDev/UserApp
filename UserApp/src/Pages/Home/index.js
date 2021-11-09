import React, {useContext} from "react";
import {View, Text, TouchableOpacity} from "react-native";

import { AuthContext } from '../../Context/AuthContext';

export default function Home({navigation}) {
    const { setToken } = useContext(AuthContext);

    function alterarDados() {
        navigation.navigate("AlterarDados");
    }

    function sair() {
        setToken("");
        navigation.navigate("Login");
    }

    return (
        <View>
            <TouchableOpacity onPress={() => {alterarDados()}}>
                <Text>Alterar dados</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {sair()}}>
                <Text>Sair</Text>
            </TouchableOpacity>
        </View>
    );
}