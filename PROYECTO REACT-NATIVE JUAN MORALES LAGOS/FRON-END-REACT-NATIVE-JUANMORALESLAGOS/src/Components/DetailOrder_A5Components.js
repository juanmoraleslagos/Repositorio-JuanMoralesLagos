import React, { Component } from 'react';
import { View, Text, Picker, Alert, TouchableOpacity } from 'react-native';
import { stylesDetailOrder } from '../Styles/Style.js';

import * as GlobalValues from '../Controller/GlobalValues';
import AsyncStorage from '@react-native-community/async-storage';

import * as NavigationService from '../Controller/NavigationService';

export default class DetailOrder_A5Components extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user_name: '',
            username_detailorder: '',
            code_document: '',
            code_dateTime: '',

            code_Notarias: '',
            listNotarias: '',
            notariasValues: [],

            code_Date: '',
            listDates: '',
            datesValues: [],

            code_Time: '',
            listTimes: '',
            timesValues: [],

        }
    }

    //Declarando Funciones: 
    componentDidMount = async () => {
        user_name = await GlobalValues.obtener('user_name');
        this.setState({ user_name: user_name });
        console.log(this.props);

        //Metodos para obtener las notarias, las Fecha y las Horas.
        this.getNotarias()
        this.getDates()
        this.getTimes()
    }

    //Obteniendo Notarias:
    getNotarias = () => {
        const url = 'http://192.168.0.7:8300/notarias/index'
        let dataNotarias =
        {
            method: 'POST',
            headers: { Accept: 'application/json', 'Content-Type': 'application/json' },

        }
        fetch(url, dataNotarias).then((response) => response.json()).then((responseJson) => {
            console.log(responseJson)
            this.setState({ listNotarias: responseJson })
            this.setState({ notariasValues: responseJson })
        })
    }

    //Obteniendo Fechas:
    getDates = () => {
        const url = 'http://192.168.0.7:8300/dates/index'
        let dataDates =
        {
            method: 'POST',
            headers: { Accept: 'application/json', 'Content-Type': 'application/json' },

        }
        fetch(url, dataDates).then((response) => response.json()).then((responseJson) => {
            console.log(responseJson)
            this.setState({ listDates: responseJson })
            this.setState({ datesValues: responseJson })
        })
    }

    //Obteniendo Horas.
    getTimes = () => {
        const url = 'http://192.168.0.7:8300/times/index'
        let dataTimes =
        {
            method: 'POST',
            headers: { Accept: 'application/json', 'Content-Type': 'application/json' },

        }
        fetch(url, dataTimes).then((response) => response.json()).then((responseJson) => {
            console.log(responseJson)
            this.setState({ listTimes: responseJson })
            this.setState({ timesValues: responseJson })
        })
    }

    //Función para Agendar Notaria:
    handleSubmit() {

        //Igualando Variables:
        var code_Notarias = this.state.code_Notarias + 1;
        var code_Date = this.state.code_Date + 1;
        var code_Time = this.state.code_Time + 1;

        //Configurando Datos a Enviar:        
        var body = JSON.stringify({ "username_detailorder": this.state.user_name, "code_document": 1, "code_datetime": 11 })

        //Mostrando Variables 
        console.log(body);
        console.log(user_name);
        console.log(code_Notarias);
        console.log(code_Date);
        console.log(code_Time);


        //Verificación de Campos Vacios.
        if (this.state.code_Notarias == "") {
            Alert.alert("Debe Seleccionar Notaria");
        }
        else if (this.state.code_Date == "") {
            Alert.alert("Debe Seleccionar Fecha");
        }
        else if (this.state.code_Time == "") {
            Alert.alert("Debe Seleccionar Hora");
        }
        else {
            //Configurando Data y Enviando Valores
            let data =
            {
                method: 'POST',
                headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
                body: body
            }
            fetch('http://192.168.0.7:8300/detailorder/store', data)
                .then((response) => response.json())
                .then(
                    (responseJson) => {
                        console.log(responseJson)
                        console.log(responseJson.username_detailorder)
                        console.log(responseJson.code_document)
                        console.log(responseJson.code_dateTime)
                        Alert.alert("Tramite Agendado con Éxito");
                        NavigationService.navigate('MenuUsers');
                    }
                )
                .catch(
                    (error) => console.error(error)
                )
        }

    }

    //Definiendo Las Variables para los Picker
    render() {
        let myNotarias = this.state.notariasValues.map((myValue, myIndex) => {
            return (
                <Picker.Item label={myValue.name_notaria} value={myIndex} key={myIndex}
                />
            );
        })

        let myDates = this.state.datesValues.map((myValue, myIndex) => {
            return (
                <Picker.Item label={myValue.date_name} value={myIndex} key={myIndex}
                />
            );
        })

        let myTimes = this.state.timesValues.map((myValue, myIndex) => {
            return (
                <Picker.Item label={myValue.time_name} value={myIndex} key={myIndex}
                />
            );
        })

        //Definiendo Estilo del Formulario.
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <Text style={stylesDetailOrder.tituloDetailOrder}>
                    solicitar TRAMITE
                </Text>

                <Text style={stylesDetailOrder.textDetailOrder}>
                    USUARIO : {this.state.user_name}
                </Text>

                <Text style={stylesDetailOrder.textDetailOrder}>
                    DOCUMENTO : Un padre / Un menor
                </Text>

                <View style={{ width: '80%', height: '20%', backgroundColor: 'white', marginTop: 50, borderWidth: 2, borderColor: 'black' }}>
                    <Picker
                        selectedValue={this.state.code_Notarias}
                        onValueChange={(value) => this.setState({ code_Notarias: value })}
                    >
                        {myNotarias}
                    </Picker>
                </View>

                <View style={{ width: '80%', height: '20%', backgroundColor: 'white', marginTop: 50, borderWidth: 2, borderColor: 'black' }}>
                    <Picker
                        selectedValue={this.state.code_Date}
                        onValueChange={(value) => this.setState({ code_Date: value })}
                    >
                        {myDates}
                    </Picker>
                </View>

                <View style={{ width: '80%', height: '20%', backgroundColor: 'white', marginTop: 50, borderWidth: 2, borderColor: 'black' }}>
                    <Picker
                        selectedValue={this.state.code_Time}
                        onValueChange={(value) => this.setState({ code_Time: value })}
                    >
                        {myTimes}
                    </Picker>
                </View>

                <TouchableOpacity
                    style={stylesDetailOrder.buttonDetailOrder}
                    onPress={() => this.handleSubmit()}
                >
                    <Text style={stylesDetailOrder.textButtonDetailOrder}>
                        Agendar Solicitud
                    </Text>
                </TouchableOpacity>


            </View>
        );
    }
}