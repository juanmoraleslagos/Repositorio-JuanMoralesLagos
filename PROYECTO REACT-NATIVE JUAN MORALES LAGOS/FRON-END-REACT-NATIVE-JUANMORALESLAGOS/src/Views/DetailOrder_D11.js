import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_D11Components from '../Components/DetailOrder_D11Components.js'

export default class DetailOrder_D11 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_D11Components></DetailOrder_D11Components>
            </View>
        );
    }
}