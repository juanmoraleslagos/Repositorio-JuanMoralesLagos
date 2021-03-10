import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_C8Components from '../Components/DetailOrder_C8Components.js'

export default class DetailOrder_C8 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_C8Components></DetailOrder_C8Components>
            </View>
        );
    }
}