import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_A18Components from '../Components/DetailOrder_A18Components.js'

export default class DetailOrder_A18 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_A18Components></DetailOrder_A18Components>
            </View>
        );
    }
}