import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_PB2Components from '../Components/DetailOrder_PB2Components.js'

export default class DetailOrder_PB2 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_PB2Components></DetailOrder_PB2Components>
            </View>
        );
    }
}