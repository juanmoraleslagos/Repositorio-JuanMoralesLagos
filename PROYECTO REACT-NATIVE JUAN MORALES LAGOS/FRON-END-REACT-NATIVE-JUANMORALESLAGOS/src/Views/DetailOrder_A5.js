import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_A5Components from '../Components/DetailOrder_A5Components.js'

export default class DetailOrder_A5 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_A5Components></DetailOrder_A5Components>
            </View>
        );
    }
}