import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_A9Components from '../Components/DetailOrder_A9Components.js'

export default class DetailOrder_A9 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_A9Components></DetailOrder_A9Components>
            </View>
        );
    }
}