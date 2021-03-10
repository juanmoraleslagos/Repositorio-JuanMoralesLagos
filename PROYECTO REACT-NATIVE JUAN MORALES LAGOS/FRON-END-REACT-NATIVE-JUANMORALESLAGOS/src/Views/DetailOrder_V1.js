import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_V1Components from '../Components/DetailOrder_V1Components.js'

export default class DetailOrder_V1 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_V1Components></DetailOrder_V1Components>
            </View>
        );
    }
}