import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_D2Components from '../Components/DetailOrder_D2Components.js'

export default class DetailOrder_D2 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_D2Components></DetailOrder_D2Components>
            </View>
        );
    }
}