import React from 'react';

import { View } from 'react-native';
import { styles } from '../Styles/Style.js';

import AddNotariasComponents from '../Components/AddNotariasComponents.js'

export default class AddNotarias extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <AddNotariasComponents></AddNotariasComponents>
            </View>
        );
    }
}