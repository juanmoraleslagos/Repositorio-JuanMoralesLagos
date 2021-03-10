import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_V3Components from '../Components/DetailOrder_V3Components.js'

export default class DetailOrder_V3 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_V3Components></DetailOrder_V3Components>
            </View>
        );
    }
}