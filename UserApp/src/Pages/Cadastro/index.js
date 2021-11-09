import React, { useContext } from 'react';
import {View, Text} from "react-native";
import { AuthContext } from '../../Context/AuthContext';

export default function Cadastro({ navigation }) {
    const { token } = useContext(AuthContext);

    return (
        <View>
            <Text>Cadastro {token}</Text>
        </View>
    )
}