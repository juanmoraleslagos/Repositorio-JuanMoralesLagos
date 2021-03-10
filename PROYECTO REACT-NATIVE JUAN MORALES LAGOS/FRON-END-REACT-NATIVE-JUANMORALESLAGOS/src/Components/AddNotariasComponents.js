import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Picker, Alert } from 'react-native';
import { styleAddNotaria } from '../Styles/Style.js';

import * as NavigationService from '../Controller/NavigationService';
export default class AddNotariasComponents extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number_notaria: '',
            name_notaria: '',
            code_region: '',
            code_commune: '',
            phone_notaria: '',
            email_notaria: '',
            code_notary: '',
            listRegions: '',
            searchItem: '',
            regionsValues: [],
            listCommunes: '',
            communesValues: [],
            listNotarys: '',
            notarysValues: [],
        }
    }
    componentDidMount() {
        this.getRegions()
        this.getCommunes()
        this.getNotarys()
    }
    //OBTENER REGIONES
    getRegions = () => {
        const url = 'http://192.168.0.7:8300/regions/index'
        let dataRegions =
        {
            method: 'POST',
            headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        }
        fetch(url, dataRegions).then((response) => response.json()).then((responseJson) => {
            console.log(responseJson)
            this.setState({ listRegions: responseJson })
            this.setState({ regionsValues: responseJson })
        })
    }
    //OBTENER COMUNAS
    getCommunes = () => {
        const url = 'http://192.168.0.7:8300/communes/index'
        let dataCommunes =
        {
            method: 'POST',
            headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        }
        fetch(url, dataCommunes).then((response) => response.json()).then((responseJson) => {
            console.log(responseJson)
            this.setState({ listCommunes: responseJson })
            this.setState({ communesValues: responseJson })
        })
    }
    //OBTENER NOTARIOS
    getNotarys = () => {
        const url = 'http://192.168.0.7:8300/notarys/index'
        let dataNotarys =
        {
            method: 'POST',
            headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        }
        fetch(url, dataNotarys).then((response) => response.json()).then((responseJson) => {
            console.log(responseJson)
            this.setState({ listNotarys: responseJson })
            this.setState({ notarysValues: responseJson })
        })
    }

    handleAddNotaria() {
        //Configurando Datos
        var bodyEnviar = JSON.stringify({ "number_notaria": this.state.number_notaria, "name_notaria": this.state.name_notaria, "code_region": this.state.code_region + 1, "code_commune": this.state.code_commune + 1, "phone_notaria": this.state.phone_notaria, "email_notaria": this.state.email_notaria, "code_notary": this.state.code_notary + 1 })
        console.log(bodyEnviar);
        //Igualar variables.
        var code_region = this.state.code_region;
        var code_commune = this.state.code_commune;
        var code_notary = this.state.code_notary;
        //
        console.log(code_region);
        console.log(code_commune);
        console.log(code_notary);

        //Verificando Campos Vacios
        if (this.state.number_notaria == "") {
            Alert.alert("Debe Ingresar Número de la Notaria");
        }
        else if (this.state.name_notaria == "") {
            Alert.alert("Debe Ingresar Nombre de la Notaria");
        }
        else if (this.state.code_region == "") {
            Alert.alert("Debe Ingresar Región");
        }
        else if (this.state.code_commune == "") {
            Alert.alert("Debe Ingresar Comuna");
        }
        else if (this.state.phone_notaria == "") {
            Alert.alert("Debe Ingresar Número Teléfono");
        }
        else if (this.state.email_notaria == "") {
            Alert.alert("Debe Ingresar E-mail");
        }
        else if (this.state.code_notary == "") {
            Alert.alert("Debe Ingresar Notario");
        }
        else {
            //Configurando Data y Enviando Valores
            let data =
            {
                method: 'POST',
                headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
                body: bodyEnviar
            }
            fetch('http://192.168.0.7:8300/notarias/store', data)
                .then((response) => response.json())
                .then(
                    (responseJson) => {
                        console.log(responseJson)
                        Alert.alert("Notaria Registrada con Éxito");
                        NavigationService.navigate('AdministratorsMenu');
                    }
                )
                .catch(
                    (error) => console.error(error)
                )
        }
    }
    render() {
        let myRegions = this.state.regionsValues.map((myValue, myIndex) => {
            return (
                <Picker.Item label={myValue.name_region} value={myIndex} key={myIndex}
                />
            );
        })
        let myCommunes = this.state.communesValues.map((myValue, myIndex) => {
            return (
                <Picker.Item label={myValue.name_commune} value={myIndex} key={myIndex}
                />
            );
        })
        let myNotarys = this.state.notarysValues.map((myValue, myIndex) => {
            return (
                <Picker.Item label={myValue.id_notary + ' ' + myValue.first_name_notary + '' + myValue.surname_notary} value={myIndex} key={myIndex}
                />
            );
        })
        return (
            <View style={styleAddNotaria.containerAddNotaria} >
                <Text style={styleAddNotaria.tituloAddNotaria}>
                    registrar NOTARIA
                </Text>
                <TextInput
                    style={styleAddNotaria.InputAddNotarias}
                    keyboardType="numeric"
                    underlineColorAndroid="transparent"
                    placeholder="Número Notaria"
                    placeholderTextColor="white"
                    autoCapitalize="none"
                    onChangeText={(text) => this.setState({ number_notaria: text })}
                />
                <TextInput
                    style={styleAddNotaria.InputAddNotarias}
                    underlineColorAndroid="transparent"
                    placeholder="Nombre Notaria"
                    placeholderTextColor="white"
                    autoCapitalize="none"
                    onChangeText={(text) => this.setState({ domicile_notaria: text })}
                />
                <View style={{ width: '80%', height: '20%', backgroundColor: 'white', marginTop: 15, borderWidth: 1, borderColor: 'white' }}>
                    <Picker selectedValue={this.state.code_region}
                        onValueChange={(value) => this.setState({ code_region: value })}
                    >
                        {myRegions}
                    </Picker>
                </View>
                <View style={{ width: '80%', height: '20%', backgroundColor: 'white', marginTop: 15, borderWidth: 1, borderColor: 'white' }}>
                    <Picker selectedValue={this.state.code_commune}
                        onValueChange={(value) => this.setState({ code_commune: value })}
                    >
                        {myCommunes}
                    </Picker>
                </View>
                <TextInput
                    style={styleAddNotaria.InputAddNotarias}
                    underlineColorAndroid="transparent"
                    keyboardType="numeric"
                    placeholder="Teléfono Notaria"
                    placeholderTextColor="white"
                    autoCapitalize="none"
                    onChangeText={(text) => this.setState({ phone_notaria: text })}
                />
                <TextInput
                    style={styleAddNotaria.InputAddNotarias}
                    underlineColorAndroid="transparent"
                    placeholder="E-mail Notaria"
                    placeholderTextColor="white"
                    autoCapitalize="none"
                    onChangeText={(text) => this.setState({ email_notaria: text })}
                />
                <View style={{ width: '80%', height: '20%', backgroundColor: 'white', marginTop: 15, borderWidth: 1, borderColor: 'white' }}>
                    <Picker selectedValue={this.state.code_notary}
                        onValueChange={(value) => this.setState({ code_notary: value })}
                    >
                        {myNotarys}
                    </Picker>
                </View>
                <TouchableOpacity
                    style={styleAddNotaria.buttonAddNotarias}
                    onPress={() => this.handleAddNotaria()}
                >
                    <Text style={styleAddNotaria.TextButtonAddNotarias}>
                        Registar Notaria
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
