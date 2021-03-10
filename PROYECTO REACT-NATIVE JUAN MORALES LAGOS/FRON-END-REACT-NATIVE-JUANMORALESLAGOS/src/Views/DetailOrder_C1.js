import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_C1Components from '../Components/DetailOrder_C1Components.js'

export default class DetailOrder_C1 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_C1Components></DetailOrder_C1Components>
            </View>
        );
    }
}