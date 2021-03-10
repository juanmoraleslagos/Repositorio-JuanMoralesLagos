import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_L2Components from '../Components/DetailOrder_L2Components.js'

export default class DetailOrder_L2 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_L2Components></DetailOrder_L2Components>
            </View>
        );
    }
}