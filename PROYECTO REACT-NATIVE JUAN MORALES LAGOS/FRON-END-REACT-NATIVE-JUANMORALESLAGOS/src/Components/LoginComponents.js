import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import { styles } from '../Styles/Style.js';

import * as GlobalValues from '../Controller/GlobalValues';

import * as NavigationService from '../Controller/NavigationService';
import AsyncStorage from '@react-native-community/async-storage';

export default class LoginComponents extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user_name: '',
            password_user: '',

        }
    }

    //MANEJO DE FUNCIONES :
    almacenar = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {
            console.log('error:' + error);
        }
    };


    handleStartSeccion() {
        var body = JSON.stringify({ "user_name": this.state.user_name, "password_user": this.state.password_user })
        var auxiliar = this.state.user_name;
        console.log(body);

        if (this.state.user_name == "") {
            Alert.alert("Debe Ingresar Su Nombre de Usuario");
        }

        else if (this.state.password_user == "") {
            Alert.alert("Debe Ingresar Su Contraseña");
        }

        else {
            //Definiendo la data
            let data =
            {
                method: 'POST',
                headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
                body: body
            }
            fetch('http://192.168.0.7:8300/users/login', data)
                .then((response) => response.json())
                .then(
                    (responseJson) => {
                        console.log(responseJson)
                        console.log(responseJson.cantUsers)
                        console.log(responseJson.user_name)
                        
                        GlobalValues.almacenar('user_name',this.state.user_name)
                        if (responseJson.cantUsers == "1" && responseJson.user_name == auxiliar) {
                            GlobalValues.almacenar('user_name', auxiliar)
                            Alert.alert("Login Con Exito");
                            NavigationService.navigate('MenuUsers');
                        }
                        else {
                            Alert.alert("Usuario No Registrado");
                            NavigationService.navigate('Login');
                        }
                    }
                )
                .catch(
                    (error) => console.error(error)
                )
        }
    }


    handleSignup() {
        NavigationService.navigate('RegistryUser');
    }

    handleForgot() {
        NavigationService.navigate('RecoveryPassword');
    }

    handleSignupAdministrator() {
        NavigationService.navigate('Administrators');
    }


    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.Titulo}>
                    Login PRINCIPAL
                    </Text>

                <TextInput style={styles.InputUser}
                    underlineColorAndroid="transparent"
                    placeholder="User Name"
                    placeholderTextColor="white"
                    autoCapitalize="none"
                    onChangeText={(text) => this.setState({ user_name: text })}
                />

                <TextInput style={styles.InputPassword}
                    underlineColorAndroid="transparent"
                    placeholder="Clave Secreta"
                    placeholderTextColor="white"
                    autoCapitalize="none"
                    secureTextEntry={true}
                    onChangeText={(text) => this.setState({ password_user: text })}
                />

                <TouchableOpacity
                    style={styles.SubmitButton}
                    onPress={() => this.handleStartSeccion()}>
                    <Text style={styles.SubmitButtonText}>INICIAR SECCIÓN</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => this.handleSignup()}>
                    <Text style={styles.Signup}>REGISTRARSE </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.AdministratorsButton}
                    onPress={() => this.handleSignupAdministrator()}>
                    <Text style={styles.AdministratorsButtonText}>Ingreso Administradores</Text>
                </TouchableOpacity>

            </View>

        );
    }
}


