import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_D12Components from '../Components/DetailOrder_D12Components.js'

export default class DetailOrder_D12 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_D12Components></DetailOrder_D12Components>
            </View>
        );
    }
}