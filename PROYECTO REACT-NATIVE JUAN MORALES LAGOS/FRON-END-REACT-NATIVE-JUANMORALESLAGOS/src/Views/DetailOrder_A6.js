import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_A6Components from '../Components/DetailOrder_A6Components.js'

export default class DetailOrder_A6 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_A6Components></DetailOrder_A6Components>
            </View>
        );
    }
}