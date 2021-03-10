import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_P8Components from '../Components/DetailOrder_P8Components.js'

export default class DetailOrder_P8 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_P8Components></DetailOrder_P8Components>
            </View>
        );
    }
}