import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_C3Components from '../Components/DetailOrder_C3Components.js'

export default class DetailOrder_C3 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_C3Components></DetailOrder_C3Components>
            </View>
        );
    }
}