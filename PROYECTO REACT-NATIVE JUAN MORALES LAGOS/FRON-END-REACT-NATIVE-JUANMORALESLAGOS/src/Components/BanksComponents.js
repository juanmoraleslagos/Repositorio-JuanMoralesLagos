import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { stylesTramites } from '../Styles/Style.js';

export default class BanksComponents extends Component {

    render() {
        return (

            <View style={stylesTramites.containerFondo}>
                <Text style={stylesTramites.tituloTramites}>escoja BANCO</Text>

                <TouchableOpacity style={stylesTramites.buttonTramitesMenu}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Banco Chile</Text>
                </TouchableOpacity>

                <TouchableOpacity style={stylesTramites.buttonTramitesMenu}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Banco Internacional</Text>
                </TouchableOpacity>

                <TouchableOpacity style={stylesTramites.buttonTramitesMenu}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Scokiabank Chile</Text>
                </TouchableOpacity>

                <TouchableOpacity style={stylesTramites.buttonTramitesMenu}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Banco de Crédito e Inversiones</Text>
                </TouchableOpacity>

                <TouchableOpacity style={stylesTramites.buttonTramitesMenu}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Banco Bice</Text>
                </TouchableOpacity>

                <TouchableOpacity style={stylesTramites.buttonTramitesMenu}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Hsbc Bank (Chile)</Text>
                </TouchableOpacity>

                <TouchableOpacity style={stylesTramites.buttonTramitesMenu}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Banco Santander-Chile</Text>
                </TouchableOpacity>

                <TouchableOpacity style={stylesTramites.buttonTramitesMenu}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Itaú Corbanca</Text>
                </TouchableOpacity>

                <TouchableOpacity style={stylesTramites.buttonTramitesMenu}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Banco Securyty</Text>
                </TouchableOpacity>

                <TouchableOpacity style={stylesTramites.buttonTramitesMenu}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Banco Falabella</Text>
                </TouchableOpacity>

                <TouchableOpacity style={stylesTramites.buttonTramitesMenu}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Banco Ripley</Text>
                </TouchableOpacity>

                <TouchableOpacity style={stylesTramites.buttonTramitesMenu}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Banco Consorcio</Text>
                </TouchableOpacity>

                <TouchableOpacity style={stylesTramites.buttonTramitesMenu}>
                    <Text style={stylesTramites.TextButtonTramitesMenu}>Banco Estado</Text>
                </TouchableOpacity>

            </View>
        );
    }
}