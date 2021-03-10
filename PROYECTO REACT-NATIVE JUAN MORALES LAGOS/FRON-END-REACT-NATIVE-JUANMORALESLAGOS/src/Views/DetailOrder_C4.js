import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_C4Components from '../Components/DetailOrder_C4Components.js'

export default class DetailOrder_C4 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_C4Components></DetailOrder_C4Components>
            </View>
        );
    }
}