import React from 'react';

import { View } from 'react-native';
import {styles} from '../Styles/Style.js';

import RevocacionComponents from '../Components/RevocacionComponents.js';

export default class extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <RevocacionComponents></RevocacionComponents>
            </View>
        );
    }
}