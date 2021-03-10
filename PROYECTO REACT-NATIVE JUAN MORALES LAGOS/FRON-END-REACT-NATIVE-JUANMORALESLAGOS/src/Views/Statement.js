import React from 'react';
import { View } from 'react-native';
import {stylesTramites} from '../Styles/Style.js';

import StatementComponents from '../Components/StatementComponents.js';

export default class Statement extends React.Component {
    render(){
        return(
            <View style={stylesTramites.containerFondo}>
                <StatementComponents></StatementComponents>
            </View>
        );

    }
}