import React from 'react';

import { View } from 'react-native';
import { styles } from '../Styles/Style.js';

import DeleteNotaryComponents from '../Components/DeleteNotaryComponents';

export default class DeleteNotary extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <DeleteNotaryComponents></DeleteNotaryComponents>
            </View>
        );
    }
}