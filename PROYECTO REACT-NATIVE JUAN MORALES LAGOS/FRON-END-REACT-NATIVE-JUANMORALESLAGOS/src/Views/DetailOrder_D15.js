import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_D15Components from '../Components/DetailOrder_D15Components.js'

export default class DetailOrder_D15 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_D15Components></DetailOrder_D15Components>
            </View>
        );
    }
}