import React, { useState } from 'react';
import {View, Text, TextInput} from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from "axios";

export default function Cadastro({ navigation }) {
    const [alert, setAlert] = useState("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    function cadastrar() {
        if(nome === "" || email === "" || senha === "" || confirmarSenha === "") {
            setAlert("Todos os campos são obrigatórios");
            return;
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
            setAlert(error.response.data.mensagem);
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
            {
                alert.length > 0 &&
                    <View style={{backgroundColor: "#ED4337", alignItems: 'center', paddingVertical: 5}}>
                        <Text style={{color: "white"}}>{alert}</Text>
                    </View>
            }

            <TextInput placeholder="NAME" value={nome} onChangeText={setNome}/>
            <TextInput placeholder="EMAIL" value={email} onChangeText={setEmail}/>
            <TextInput placeholder="SENHA" value={senha} onChangeText={setSenha} secureTextEntry={true}/>
            <TextInput placeholder="CONFIRMAR SENHA" value={confirmarSenha} onChangeText={setConfirmarSenha} secureTextEntry={true}/>
            <TouchableOpacity onPress={() => {cadastrar()}}>
                <Text>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {login()}}>
                <Text>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}