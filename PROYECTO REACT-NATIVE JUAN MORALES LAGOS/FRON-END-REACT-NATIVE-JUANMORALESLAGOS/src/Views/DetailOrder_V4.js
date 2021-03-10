import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_V4Components from '../Components/DetailOrder_V4Components.js'

export default class DetailOrder_V4 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_V4Components></DetailOrder_V4Components>
            </View>
        );
    }
}