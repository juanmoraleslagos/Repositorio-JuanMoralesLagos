import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_D3Components from '../Components/DetailOrder_D3Components.js'

export default class DetailOrder_D3 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_D3Components></DetailOrder_D3Components>
            </View>
        );
    }
}