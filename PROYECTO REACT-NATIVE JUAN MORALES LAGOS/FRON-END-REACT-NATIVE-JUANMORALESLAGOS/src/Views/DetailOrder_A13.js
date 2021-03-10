import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_A13Components from '../Components/DetailOrder_A13Components.js'

export default class DetailOrder_A13 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_A13Components></DetailOrder_A13Components>
            </View>
        );
    }
}