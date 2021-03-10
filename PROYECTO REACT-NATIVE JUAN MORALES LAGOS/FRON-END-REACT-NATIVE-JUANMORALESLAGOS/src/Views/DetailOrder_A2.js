import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_A2Components from '../Components/DetailOrder_A2Components.js'

export default class DetailOrder_A2 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_A2Components></DetailOrder_A2Components>
            </View>
        );
    }
}