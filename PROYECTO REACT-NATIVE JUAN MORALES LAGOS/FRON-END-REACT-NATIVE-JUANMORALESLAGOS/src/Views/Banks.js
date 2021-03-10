import React ,{Component}from 'react';
import { View } from 'react-native';
import {stylesTramites} from '../Styles/Style.js';

import BanksComponents from '../Components/BanksComponents.js';

export default class Banks extends React.Component {
    render() {
        return(
            <View style={stylesTramites.containerFondo}>
                <BanksComponents></BanksComponents>
            </View>
        );
    }
}