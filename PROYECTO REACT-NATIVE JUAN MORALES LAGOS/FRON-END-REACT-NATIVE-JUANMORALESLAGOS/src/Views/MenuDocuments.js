import React from 'react';

import { View } from 'react-native';
import {styles} from '../Styles/Style.js';

import MenuDocumentsComponents from '../Components/MenuDocumentsComponents.js';

export default class MenuDocuments extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <MenuDocumentsComponents></MenuDocumentsComponents>
            </View>
        );
    }
}