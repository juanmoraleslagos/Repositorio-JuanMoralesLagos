import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_L1Components from '../Components/DetailOrder_L1Components.js'

export default class DetailOrder_L1 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_L1Components></DetailOrder_L1Components>
            </View>
        );
    }
}