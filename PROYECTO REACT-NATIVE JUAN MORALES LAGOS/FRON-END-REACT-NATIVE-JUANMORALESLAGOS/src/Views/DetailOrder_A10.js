import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_A10Components from '../Components/DetailOrder_A10Components.js'

export default class DetailOrder_A10 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_A10Components></DetailOrder_A10Components>
            </View>
        );
    }
}