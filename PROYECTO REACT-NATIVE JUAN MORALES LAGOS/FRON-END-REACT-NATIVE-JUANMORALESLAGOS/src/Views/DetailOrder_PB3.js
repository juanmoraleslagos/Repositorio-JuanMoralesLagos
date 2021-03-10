import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_PB3Components from '../Components/DetailOrder_PB3Components.js'

export default class DetailOrder_PB3 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_PB3Components></DetailOrder_PB3Components>
            </View>
        );
    }
}
