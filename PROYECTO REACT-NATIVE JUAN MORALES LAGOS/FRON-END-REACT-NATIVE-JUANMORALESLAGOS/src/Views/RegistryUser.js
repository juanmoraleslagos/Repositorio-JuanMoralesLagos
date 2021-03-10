import React from 'react';
import { View } from 'react-native';
import {styles} from '../Styles/Style.js';
import RegistryUserComponents from '../Components/RegistryUserComponents.js';



export default class RegistryUser extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <RegistryUserComponents></RegistryUserComponents>
            </View>
        );

    }
        
}