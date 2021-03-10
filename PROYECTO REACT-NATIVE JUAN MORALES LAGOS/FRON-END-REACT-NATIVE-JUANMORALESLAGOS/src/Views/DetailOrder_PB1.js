import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_PB1Components from '../Components/DetailOrder_PB1Components.js'


export default class DetailOrder_PB1 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_PB1Components></DetailOrder_PB1Components>
            </View>
        );
    }
}