import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_V2Components from '../Components/DetailOrder_V2Components.js'

export default class DetailOrder_V2 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_V2Components></DetailOrder_V2Components>
            </View>
        );
    }
}