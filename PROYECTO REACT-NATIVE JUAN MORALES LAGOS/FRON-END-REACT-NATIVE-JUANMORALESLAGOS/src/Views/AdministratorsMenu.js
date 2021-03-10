import React from 'react';

import { View } from 'react-native';
import {styles} from '../Styles/Style.js';

import AdministratorsMenuComponents from '../Components/AdministratorsMenuComponents.js'

export default class AdministratorsMenu extends React.Component {   
    render(){
        return(
            <View style={styles.container}>
                <AdministratorsMenuComponents></AdministratorsMenuComponents>
            </View>
        );

    }
        
}