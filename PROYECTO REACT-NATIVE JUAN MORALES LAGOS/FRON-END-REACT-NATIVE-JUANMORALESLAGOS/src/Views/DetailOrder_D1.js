import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_D1Components from '../Components/DetailOrder_D1Components.js'

export default class DetailOrder_D1 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_D1Components></DetailOrder_D1Components>
            </View>
        );
    }
}