
import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_P4Components from '../Components/DetailOrder_P4Components.js'

export default class DetailOrder_P4 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_P4Components></DetailOrder_P4Components>
            </View>
        );
    }
}