import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_A15Components from '../Components/DetailOrder_A15Components.js'

export default class DetailOrder_A15 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_A15Components></DetailOrder_A15Components>
            </View>
        );
    }
}