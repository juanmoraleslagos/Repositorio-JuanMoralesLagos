import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_PB4Components from '../Components/DetailOrder_PB4Components.js'

export default class DetailOrder_PB4 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_PB4Components></DetailOrder_PB4Components>
            </View>
        );
    }
}