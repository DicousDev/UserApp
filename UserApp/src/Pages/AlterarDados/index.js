import React, {useContext, useState} from "react";
import { View, TouchableOpacity, TextInput, Text } from "react-native";
import axios from "axios";

import { AuthContext } from '../../Context/AuthContext';

export default function AlterarDados({navigation}) {
    const { token } = useContext(AuthContext);
    
    const [alert, setAlert] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    function alterar() {
        if(senha === "" || confirmarSenha === "") {
            setAlert("Preencha todos os campos.");
            return;
        }

        if(senha !== confirmarSenha) {
            setAlert("Senhas não confere.");
            return;
        }

        const data = {
            password: senha
        }

        const auth = `Bearer ${token}`;

        axios({
            method: 'PATCH',
            url: "https://senaiuserapi.herokuapp.com/users",
            data: data,
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Authorization': auth
            }
        })
        .then((response) => {
            setAlert("Conta atualizada com sucesso");
            console.log("Conta atualizada com sucesso");
            voltar();
        })
        .catch((error) => {
            setAlert("Error de servidor.");
        })
    }

    function voltar() {
        limpaInputs();
        navigation.navigate("Home");
    }
    
    function limpaInputs() {
        setAlert("");
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
            <TextInput placeholder="SENHA" value={senha} onChangeText={setSenha} secureTextEntry={true}/>
            <TextInput placeholder="CONFIRMAR SENHA" value={confirmarSenha} onChangeText={setConfirmarSenha} secureTextEntry={true}/>

            <TouchableOpacity onPress={() => {alterar()}}>
                <Text>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {voltar()}}>
                <Text>Sair</Text>
            </TouchableOpacity>
        </View>
    );
}