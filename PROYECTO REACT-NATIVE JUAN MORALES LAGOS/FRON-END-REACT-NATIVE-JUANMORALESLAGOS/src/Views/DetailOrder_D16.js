import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_D16Components from '../Components/DetailOrder_D16Components.js'

export default class DetailOrder_D16 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_D16Components></DetailOrder_D16Components>
            </View>
        );
    }
}