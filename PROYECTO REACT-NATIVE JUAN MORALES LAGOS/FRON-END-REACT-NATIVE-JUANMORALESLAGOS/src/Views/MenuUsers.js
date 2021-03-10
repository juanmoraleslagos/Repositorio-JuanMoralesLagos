import React from 'react';
import { View } from 'react-native';
import { stylesMenuUsers} from '../Styles/Style.js';

import MenuUsersComponents from '../Components/MenuUsersComponents.js';

export default class MenuUsers extends React.Component {
    render() {
        return (
            <View style={stylesMenuUsers.containerMenuUsers} >
                <MenuUsersComponents></MenuUsersComponents>
            </View>
        );
    }
}
