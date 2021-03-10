import React from 'react';

import { View } from 'react-native';
import {stylesTramites} from '../Styles/Style.js';

import PowerComponents from '../Components/PowerComponents.js';

export default class Power extends React.Component {
    render(){
        return(
            <View style={stylesTramites.containerFondo}>
                <PowerComponents></PowerComponents>
            </View>
        );

    }
        
}