import React from 'react';
import { View } from 'react-native';
import {styles} from '../Styles/Style.js';

import NotarySelectionComponents from '../Components/NotarySelectionComponents.js';

export default class NotarySelection extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <NotarySelectionComponents></NotarySelectionComponents>
            </View>
        );

    }
        
}