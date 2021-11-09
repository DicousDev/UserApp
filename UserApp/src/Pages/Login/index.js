import React, { createContext, useContext } from 'react';
import {View, Text, TouchableOpacity, TextInput} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { AuthContext } from '../../Context/AuthContext';

export default function Login({navigation}) {
    const { token } = useContext(AuthContext);

    return ( 
        <View>
            <Text>Login</Text>
            <TextInput placeholder="EMAIL"/>
            <TextInput placeholder="SENHA"/>
            <TouchableOpacity onPress={() => {navigation.navigate("Cadastro")}}>
                <Text>Faça seu cadastro</Text>
            </TouchableOpacity>
        </View>
    )
}