import React from 'react';
import { View } from 'react-native';
import VehiculosComponents from '../Components/VehiculosComponents.js';
import { stylesTramites } from '../Styles/Style.js';

export default class Vehiculos extends React.Component {
    render(){
        return (
            <View style = {stylesTramites.containerFondo}>
                <VehiculosComponents ></VehiculosComponents>
            </View>
        );
    }
}