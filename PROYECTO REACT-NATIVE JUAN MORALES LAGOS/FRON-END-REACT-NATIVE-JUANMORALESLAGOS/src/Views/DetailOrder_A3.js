import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_A3Components from '../Components/DetailOrder_A3Components.js'

export default class DetailOrder_A3 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_A3Components></DetailOrder_A3Components>
            </View>
        );
    }
}