import React, { useContext, useState } from 'react';
import {View, Text, TouchableOpacity, TextInput} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

import { AuthContext } from '../../Context/AuthContext';

export default function Login({navigation}) {
    const { setToken } = useContext(AuthContext);

    const [alert, setAlert] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function login() {
        if(email === "" || senha === "") {
            setAlert("Preencha todos os campos.");
            return;
        }

        const data = {
            email: email,
            password: senha
        }

        axios({
            method: 'POST',
            url: "https://senaiuserapi.herokuapp.com/sessions",
            data: data,
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        })
        .then((response) => {
            setToken(response.data.token);
            home();
        })
        .catch((error) => {
            setAlert("Usuário não encontrado.");
            console.log("Usuário não encontrado.");
        })
    }

    function cadastro() {
        limpaInputs();
        navigation.navigate("Cadastro");
    }

    function home() {
        setAlert("Home");
        limpaInputs();
        navigation.navigate("Home");
    }

    function limpaInputs() {
        setAlert("");
        setEmail("");
        setSenha("");
    }

    return ( 
        <View>
            <Text>Teste: {alert}</Text>
            <Text>Login</Text>
            <TextInput placeholder="EMAIL" value={email} onChangeText={setEmail}/>
            <TextInput placeholder="SENHA"value={senha} onChangeText={setSenha}/>
            <TouchableOpacity onPress={() => {login()}}>
                <Text>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {cadastro()}}>
                <Text>Faça seu cadastro</Text>
            </TouchableOpacity>
        </View>
    )
}