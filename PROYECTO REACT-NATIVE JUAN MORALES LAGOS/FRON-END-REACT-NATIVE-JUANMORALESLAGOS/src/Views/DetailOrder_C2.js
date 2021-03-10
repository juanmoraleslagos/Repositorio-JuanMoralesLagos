import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_C2Components from '../Components/DetailOrder_C2Components.js'

export default class DetailOrder_C2 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_C2Components></DetailOrder_C2Components>
            </View>
        );
    }
}