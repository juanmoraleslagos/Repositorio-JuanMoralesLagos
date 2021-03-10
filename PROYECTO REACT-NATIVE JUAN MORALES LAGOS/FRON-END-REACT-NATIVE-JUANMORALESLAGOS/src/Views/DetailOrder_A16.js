import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_A16Components from '../Components/DetailOrder_A16Components.js'

export default class DetailOrder_A16 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_A16Components></DetailOrder_A16Components>
            </View>
        );
    }
}