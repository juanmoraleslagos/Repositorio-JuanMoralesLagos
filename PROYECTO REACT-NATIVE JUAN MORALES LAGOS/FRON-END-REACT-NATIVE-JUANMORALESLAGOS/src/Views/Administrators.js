import React from 'react';

import { View } from 'react-native';
import {styles} from '../Styles/Style.js';

import AdministratorsComponents from '../Components/AdministratorsComponents.js'

export default class Administrators extends React.Component {   
    render(){
        return(
            <View style={styles.container}>
                <AdministratorsComponents></AdministratorsComponents>
            </View>
        );

    }
        
}