import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_V6Components from '../Components/DetailOrder_V6Components.js'

export default class DetailOrder_V6 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_V6Components></DetailOrder_V6Components>
            </View>
        );
    }
}