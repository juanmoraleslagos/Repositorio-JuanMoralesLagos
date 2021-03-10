import React from 'react';

import { View } from 'react-native';
import {styles} from '../Styles/Style.js';

import AddNotarioComponents from '../Components/AddNotarioComponents';

export default class AddNotario extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <AddNotarioComponents></AddNotarioComponents>
            </View>
        );
    }        
}