import React from 'react';

import { View } from 'react-native';
import { styles } from '../Styles/Style.js';

import ListedGeneralOfUsersComponents from '../Components/ListedGeneralOfUsersComponents.js'

export default class ListedGeneralOfUsers extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ListedGeneralOfUsersComponents></ListedGeneralOfUsersComponents>
            </View>
        );
    }
}