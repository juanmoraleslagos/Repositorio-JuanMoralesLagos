import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_C6Components from '../Components/DetailOrder_C6Components.js'

export default class DetailOrder_C6 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_C6Components></DetailOrder_C6Components>
            </View>
        );
    }
}