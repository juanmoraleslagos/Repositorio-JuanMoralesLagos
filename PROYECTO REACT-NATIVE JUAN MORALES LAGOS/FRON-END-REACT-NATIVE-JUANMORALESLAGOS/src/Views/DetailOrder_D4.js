import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_D4Components from '../Components/DetailOrder_D4Components.js'

export default class DetailOrder_D4 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_D4Components></DetailOrder_D4Components>
            </View>
        );
    }
}