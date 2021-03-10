import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_A4Components from '../Components/DetailOrder_A4Components.js'

export default class DetailOrder_A4 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_A4Components></DetailOrder_A4Components>
            </View>
        );
    }
}