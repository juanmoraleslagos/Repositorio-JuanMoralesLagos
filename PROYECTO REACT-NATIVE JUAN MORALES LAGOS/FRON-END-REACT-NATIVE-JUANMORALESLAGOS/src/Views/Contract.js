import React from 'react';
import { View } from 'react-native';
import {stylesTramites} from '../Styles/Style.js';

import ContractComponents from '../Components/ContractComponents.js'

export default class Contract extends React.Component {
    render(){
        return(
            <View style={stylesTramites.containerFondo}>
                <ContractComponents></ContractComponents>
            </View>
        );

    }
        
}