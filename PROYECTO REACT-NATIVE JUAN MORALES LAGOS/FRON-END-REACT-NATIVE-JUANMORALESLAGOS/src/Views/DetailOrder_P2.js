import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_P2Components from '../Components/DetailOrder_P2Components.js'

export default class DetailOrder_P2 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_P2Components></DetailOrder_P2Components>
            </View>
        );
    }
}


