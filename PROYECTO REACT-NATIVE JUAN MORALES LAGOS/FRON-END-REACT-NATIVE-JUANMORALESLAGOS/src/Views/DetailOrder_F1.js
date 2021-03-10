import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_F1Components from '../Components/DetailOrder_F1Components.js'

export default class DetailOrder_F1 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_F1Components></DetailOrder_F1Components>
            </View>
        );
    }
}