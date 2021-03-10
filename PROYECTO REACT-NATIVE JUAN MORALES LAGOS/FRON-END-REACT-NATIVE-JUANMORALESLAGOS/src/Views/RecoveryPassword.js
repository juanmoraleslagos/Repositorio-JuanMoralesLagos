import React from 'react';

import { View } from 'react-native';
import {styles} from '../Styles/Style.js';

import RecoveryPasswordComponent from '../Components/RecoveryPasswordComponent.js';

export default class RecoveryPassword extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <RecoveryPasswordComponent></RecoveryPasswordComponent>
            </View>
        );
    }
}