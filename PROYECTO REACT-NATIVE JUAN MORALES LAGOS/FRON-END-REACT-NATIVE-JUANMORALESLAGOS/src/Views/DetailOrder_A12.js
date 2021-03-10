import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_A12Components from '../Components/DetailOrder_A12Components.js'

export default class DetailOrder_A12 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_A12Components></DetailOrder_A12Components>
            </View>
        );
    }
}