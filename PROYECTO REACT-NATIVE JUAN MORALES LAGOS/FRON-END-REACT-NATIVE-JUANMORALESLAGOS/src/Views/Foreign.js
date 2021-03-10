import React from 'react';
import { View } from 'react-native';
import {stylesTramites} from '../Styles/Style.js';

import ForeignComponents from '../Components/ForeignComponents.js';

export default class Foreign extends React.Component {
    render(){
        return(
            <View style={stylesTramites.containerFondo}>
                <ForeignComponents></ForeignComponents>
            </View>
        );

    }
}