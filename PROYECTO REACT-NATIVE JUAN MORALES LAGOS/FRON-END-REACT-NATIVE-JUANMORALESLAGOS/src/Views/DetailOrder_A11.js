import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_A11Components from '../Components/DetailOrder_A11Components.js'

export default class DetailOrder_A11 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_A11Components></DetailOrder_A11Components>
            </View>
        );
    }
}