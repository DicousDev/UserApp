import React, { createContext } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./src/Pages/Login";
import Cadastro from "./src/Pages/Cadastro";
import Home from "./src/Pages/Home";
import AuthContext from "./src/Context/AuthContext";

const Stack = createStackNavigator();

const Context = () => {
    return (
        <AuthContext>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen 
                        name="Login" 
                        component={Login}/>
                    <Stack.Screen 
                        name="Cadastro" 
                        component={Cadastro}
                    />
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{
                            headerLeft: null
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </AuthContext>
    )
}

export default Context;