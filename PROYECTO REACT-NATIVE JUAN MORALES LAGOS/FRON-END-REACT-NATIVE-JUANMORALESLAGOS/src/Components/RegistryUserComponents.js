import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import { styleRegistryUsers } from '../Styles/Style.js';

import * as NavigationService from '../Controller/NavigationService.js';



export default class RegistryUserComponents extends Component {
        constructor(props) {
                super(props)
                this.state = {
                        user_name: '',
                        email_user: '',
                        password_user_confirm: '',
                        password_user: '',
                }
        }

        handleSubmit() {

                var bodyGuardar = JSON.stringify({ "user_name": this.state.user_name, "email_user": this.state.email_user, "password_user": this.state.password_user })
                console.log(bodyGuardar);


                //Validando Campos vacios.
                var aux_user_name = this.state.user_name;
                var aux_email_user = this.state.email_user;
                var aux_password_user = this.state.password_user;

                if (this.state.user_name == "") {
                        Alert.alert("Debe Ingresar Su Nombre de Usuario");
                }
                else if (this.state.email_user == "") {
                        Alert.alert("Debe Ingresar Su E-mail");

                }
                else if (this.state.password_user == "") {
                        Alert.alert("Debe Ingresar Su Contraseña");
                }
                else if (this.state.password_user_confirm == "") {
                        Alert.alert("Debe Confirmar su Contraseña");
                }

                else if (this.state.password_user != this.state.password_user_confirm) {
                        Alert.alert("Contraseñas Deben Ser Iguales");
                }

                else {
                        //Definiendo Data :
                        let data =
                        {
                                method: 'POST',
                                headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
                                body: bodyGuardar
                        }
                        fetch('http://192.168.0.7:8300/users/store', data)
                                .then((response) => response.json())
                                .then(
                                        (responseJson) => {
                                                console.log(responseJson)
                                                Alert.alert("Usuario Registrado con Exito");
                                                NavigationService.navigate('Login');
                                        }
                                )
                                .catch(
                                        (error) => console.error(error)
                                )
                }
        }

        render() {

                return (
                        <View style={styleRegistryUsers.container}>
                                <Text style={styleRegistryUsers.Titulo}>
                                        registro USUARIO
                </Text>

                                <TextInput
                                        style={styleRegistryUsers.InputRegistryUser}
                                        underlineColorAndroid="transparent"
                                        placeholder="Tu User Name"
                                        placeholderTextColor="white"
                                        autoCapitalize="none"
                                        onChangeText={(text) => this.setState({user_name:text})}
                                />

                                <TextInput
                                        style={styleRegistryUsers.InputRegistryUser}
                                        underlineColorAndroid="transparent"
                                        placeholder="Tu E-Mail"
                                        placeholderTextColor="white"
                                        autoCapitalize="none"
                                        onChangeText={(text) => this.setState({email_user:text})} 
                                />

                                <TextInput
                                        style={styleRegistryUsers.InputRegistryUser}
                                        underlineColorAndroid="transparent"
                                        placeholder="Tu  Contraseña"
                                        placeholderTextColor="white"
                                        autoCapitalize="none"
                                        secureTextEntry={true}
                                        onChangeText={(text) => this.setState({password_user:text})} 
                                />

                                <TextInput
                                        style={styleRegistryUsers.InputRegistryUser}
                                        underlineColorAndroid="transparent"
                                        placeholder="Confirma Contraseña"
                                        placeholderTextColor="white"
                                        autoCapitalize="none"
                                        secureTextEntry={true}
                                        onChangeText={(text) => this.setState({password_user_confirm:text})} 
                                />

                                <TouchableOpacity
                                        onPress={() => this.handleSubmit()}
                                        style={styleRegistryUsers.SubmitButtonRegistryUser}>
                                        <Text style={styleRegistryUsers.SubmitButtonTextRegistryUser}>ENVIAR DATOS</Text>
                                </TouchableOpacity>
                        </View>

                );
        }

}

