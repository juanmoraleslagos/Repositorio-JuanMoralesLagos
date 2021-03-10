import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_P3Components from '../Components/DetailOrder_P3Components.js'

export default class DetailOrder_P3 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_P3Components></DetailOrder_P3Components>
            </View>
        );
    }
}