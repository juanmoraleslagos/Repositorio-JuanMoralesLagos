import React from 'react';

import { View } from 'react-native';
import { styles } from '../Styles/Style.js';

import LoginComponents from '../Components/LoginComponents.js'

export default class Login extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <LoginComponents></LoginComponents>
            </View>
        );
    }
}