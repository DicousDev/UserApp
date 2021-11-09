import React from 'react';
import {View, Text, TextInput} from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Cadastro({ navigation }) {

    return (
        <View>
            <Text>Cadastro</Text>
            <TextInput placeholder="NAME"/>
            <TextInput placeholder="EMAIL"/>
            <TextInput placeholder="SENHA"/>
            <TextInput placeholder="CONFIRMAR SENHA"/>
            <TouchableOpacity onPress={() => {navigation.navigate("Login")}}>
                <Text>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}