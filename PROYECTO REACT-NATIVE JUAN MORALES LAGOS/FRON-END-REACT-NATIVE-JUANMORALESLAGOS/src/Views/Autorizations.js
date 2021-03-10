import React from 'react';
import { View } from 'react-native';
import AutorizationsComponents from '../Components/AutorizationsComponents.js';

import {stylesTramites} from '../Styles/Style.js';

export default class Autorizations extends React.Component {
    render(){
        return (
            <View style = {stylesTramites.containerFondo}>
                <AutorizationsComponents></AutorizationsComponents>
            </View>
        );
    }
}