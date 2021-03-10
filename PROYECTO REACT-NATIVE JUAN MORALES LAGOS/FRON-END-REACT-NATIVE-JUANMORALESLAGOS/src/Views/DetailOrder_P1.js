import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_P1Components from '../Components/DetailOrder_P1Components.js'

export default class DetailOrder_P1 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_P1Components></DetailOrder_P1Components>
            </View>
        );
    }
}