import React from 'react';

import { View } from 'react-native';
import {stylesBank} from '../Styles/Style.js';

import PowerBankComponents from '../Components/PowerBankComponents.js'

export default class PowerBank extends React.Component {
    render(){
        return(
            <View style={stylesBank.containerBank}>
                <PowerBankComponents></PowerBankComponents>
            </View>
        );

    }
        
}