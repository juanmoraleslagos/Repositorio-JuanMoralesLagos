import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_A17Components from '../Components/DetailOrder_A17Components.js'

export default class DetailOrder_A17 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_A17Components></DetailOrder_A17Components>
            </View>
        );
    }
}