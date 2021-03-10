import React from 'react';
import { View } from 'react-native';
import {stylesTramites} from '../Styles/Style.js';

import LaborComponents from '../Components/LaborComponents.js';

export default class Labor extends React.Component {
    render(){
        return(
            <View style={stylesTramites.containerFondo}>
                <LaborComponents></LaborComponents>
            </View>
        );

    }
        
}