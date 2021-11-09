import React, { useState } from 'react';
import {View, Text, TextInput} from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from "axios";

export default function Cadastro({ navigation }) {
    const [alert, setAlert] = useState("Alert");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    function cadastrar() {
        if(nome === "" || email === "" || senha === "" || confirmarSenha === "") {
            setAlert("Preencha todos os campos.");
            return console.log("Preencha todos os campos.")
        }

        if(senha !== confirmarSenha) {
            setAlert("Senhas não confere.");
            return console.log("Senhas não confere.");
        }

        const data = {
            name: nome,
            email: email,
            password: senha
        }

        axios({
            method: 'POST',
            url: 'https://senaiuserapi.herokuapp.com/users',
            data: data,
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        })
        .then((response) => {
            login();
            setAlert("Cadastro realizado.")
            console.log("Cadastro realizado.");
        })
        .catch((error) => {
            setAlert("Error no servidor.");
            console.log(error);
            console.log("Erro ao tentar cadastrar usuário.");
        })
    }

    function login() {
        limpaInputs();
        navigation.navigate("Login");
    }

    function limpaInputs() {
        setAlert("");
        setNome("");
        setEmail("");
        setSenha("");
        setConfirmarSenha("");
    }

    return (
        <View>
            <Text>{alert}</Text>
            <Text>Cadastro</Text>
            <TextInput placeholder="NAME" value={nome} onChangeText={setNome}/>
            <TextInput placeholder="EMAIL" value={email} onChangeText={setEmail}/>
            <TextInput placeholder="SENHA" value={senha} onChangeText={setSenha}/>
            <TextInput placeholder="CONFIRMAR SENHA" value={confirmarSenha} onChangeText={setConfirmarSenha}/>
            <TouchableOpacity onPress={() => {cadastrar()}}>
                <Text>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {login()}}>
                <Text>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}