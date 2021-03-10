import React from 'react';

import { View } from 'react-native';
import {styles} from '../Styles/Style.js';

import DeleteUserComponents from '../Components/DeleteUserComponents.js'

export default class DeleteUser extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <DeleteUserComponents></DeleteUserComponents>
            </View>
        );

    }
        
}