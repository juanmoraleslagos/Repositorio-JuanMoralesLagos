import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_L3Components from '../Components/DetailOrder_L3Components.js'

export default class DetailOrder_L3 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_L3Components></DetailOrder_L3Components>
            </View>
        );
    }
}