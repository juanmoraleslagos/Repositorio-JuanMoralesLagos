import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import { styles, styleNotary } from '../Styles/Style.js';

import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

import * as NavigationService from '../Controller/NavigationService';

export default class AddNotarioComponents extends Component {

    constructor(props) {
        super(props)
        this.state = {
            rut_notary: '',
            first_name_notary: '',
            second_name_notary: '',
            surname_notary: '',
            second_surname_notary: '',
            code_gender: '',
            phone_notary: '',
            email_notary: '',
            password_notary: '',
            password_notary_confirm: '',
        }
    }

    handleAddNotario() {
        //Configurando Json a Enviar.
        var bodyEnviar = JSON.stringify({ "rut_notary": this.state.rut_notary, "first_name_notary": this.state.first_name_notary, "second_name_notary": this.state.second_name_notary, "surname_notary": this.state.surname_notary, "second_surname_notary": this.state.second_surname_notary, "code_gender": this.state.code_gender, "phone_notary":this.state.phone_notary,"email_notary": this.state.email_notary, "password_notary": this.state.password_notary })
        console.log(bodyEnviar);

        var code_gender = this.state.code_gender;

        console.log(code_gender);

        //Validando Campos Vacios.
        if (this.state.rut_notary == "") {
            Alert.alert("Ingrese Rut");
        }
        else if (this.state.first_name_notary == "") {
            Alert.alert("Ingrese Primer Nombre");
        }
        else if (this.state.second_name_notary == "") {
            Alert.alert("Ingrese Segundo Nombre");
        }
        else if (this.state.surname_notary == "") {
            Alert.alert("Ingrese Apellido Paterno");
        }
        else if (this.state.second_surname_notary == "") {
            Alert.alert("Ingrese Apellido Materno");
        }
        else if (this.state.code_gender == ""){
            Alert.alert("Presione Fuerte para Seleccionar Genero");
        }
        else if (this.state.phone_notary == "") {
            Alert.alert("Ingrese Telefono");
        }
        else if (this.state.email_notary == "") {
            Alert.alert("Ingrese E-Mail");
        }
        else if (this.state.password_notary == "") {
            Alert.alert("Ingrese Clave Secreta");
        }
        else if (this.state.password_notary_confirm == "") {
            Alert.alert("Confirme Contraseña");
        }
        else if (this.state.password_notary != this.state.password_notary_confirm) {
            Alert.alert("Contraseñas Deben Ser Iguales")
        }
        else {
            //Configurando Data y Enviando Valores
            let data = 
            {
                method: 'POST',
                headers:{Accept:'application/json','Content-Type':'application/json'},
                body:bodyEnviar
            }
            fetch('http://192.168.0.7:8300/notarys/store',data)
            .then((response) => response.json())
            .then(
                (responseJson) =>
                {
                    console.log(responseJson)
                    Alert.alert("Notario Registrado con Exito");
                    NavigationService.navigate('AdministratorsMenu');
                }
            )
            .catch(
                (error) => console.error(error)
            )
        }
    }

    render() {

        var gender = [
            { label: "Masculino   ", value: 1 },
            { label: "Femenino", value: 2 },
        ];

        return (
            <View style={styleNotary.containerNotary}>
                <Text style={styleNotary.TituloNotario}>
                    registrar NOTARIO
                </Text>

                <TextInput
                    style={styleNotary.InputNotario}
                    underlineColorAndroid="transparent"
                    placeholder="Rut 12345678-9"
                    placeholderTextColor="white"
                    autoCapitalize="none"
                    onChangeText={(text) => this.setState({ rut_notary: text })}
                />

                <TextInput
                    style={styleNotary.InputNotario}
                    underlineColorAndroid="transparent"
                    placeholder="Primer Nombre"
                    placeholderTextColor="white"
                    autoCapitalize="none"
                    onChangeText={(text) => this.setState({ first_name_notary: text })}
                />

                <TextInput
                    style={styleNotary.InputNotario}
                    underlineColorAndroid="transparent"
                    placeholder="Segundo Nombre"
                    placeholderTextColor="white"
                    autoCapitalize="none"
                    onChangeText={(text) => this.setState({ second_name_notary: text })}
                />

                <TextInput
                    style={styleNotary.InputNotario}
                    underlineColorAndroid="transparent"
                    placeholder="Apellido Paterno"
                    placeholderTextColor="white"
                    autoCapitalize="none"
                    onChangeText={(text) => this.setState({ surname_notary: text })}
                />

                <TextInput
                    style={styleNotary.InputNotario}
                    underlineColorAndroid="transparent"
                    placeholder="Apellido Materno"
                    placeholderTextColor="white"
                    autoCapitalize="none"
                    onChangeText={(text) => this.setState({ second_surname_notary: text })}
                />

                <RadioForm
                    style={styleNotary.RadioForm}
                    radio_props={gender}
                    onPress={(value) => this.setState({ code_gender: value })}
                    buttonColor={"black"}
                    labelStyle={{ fontSize: 15, color: 'white' }}
                    buttonSize={10}
                    buttonOuterSize={20}
                    selectedButtonColor={"white"}
                    selectedLabelColor={"black"}
                    formHorizontal={true}
                />

                <TextInput
                    style={styleNotary.InputNotario}
                    underlineColorAndroid="transparent"
                    placeholder="Telefóno"
                    placeholderTextColor="white"
                    autoCapitalize="none"
                    onChangeText={(text) => this.setState({ phone_notary: text })}
                />

                <TextInput
                    style={styleNotary.InputNotario}
                    underlineColorAndroid="transparent"
                    placeholder="E-Mail"
                    placeholderTextColor="white"
                    autoCapitalize="none"
                    onChangeText={(text) => this.setState({ email_notary: text })}
                />

                <TextInput
                    style={styleNotary.InputNotario}
                    underlineColorAndroid="transparent"
                    placeholder="Clave Secreta"
                    placeholderTextColor="white"
                    autoCapitalize="none"
                    secureTextEntry={true}
                    onChangeText={(text) => this.setState({ password_notary: text })}
                />

                <TextInput
                    style={styleNotary.InputNotario}
                    underlineColorAndroid="transparent"
                    placeholder="Confirme Clave Secreta"
                    placeholderTextColor="white"
                    autoCapitalize="none"
                    secureTextEntry={true}
                    onChangeText={(text) => this.setState({ password_notary_confirm: text })}
                />

                <TouchableOpacity
                    style={styleNotary.buttonNotario}
                    onPress={() => this.handleAddNotario()}
                >
                    <Text style={styleNotary.TextButtonNotario}>
                        Registar Notario
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }
}