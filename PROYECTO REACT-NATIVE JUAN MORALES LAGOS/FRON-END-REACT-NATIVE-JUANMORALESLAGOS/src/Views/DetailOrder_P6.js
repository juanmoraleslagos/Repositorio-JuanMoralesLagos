import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_P6Components from '../Components/DetailOrder_P6Components.js'

export default class DetailOrder_P6 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_P6Components></DetailOrder_P6Components>
            </View>
        );
    }
}