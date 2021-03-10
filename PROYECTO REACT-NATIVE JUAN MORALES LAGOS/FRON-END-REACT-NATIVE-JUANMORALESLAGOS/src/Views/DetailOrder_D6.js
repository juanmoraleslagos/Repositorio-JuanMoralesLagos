import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_D6Components from '../Components/DetailOrder_D6Components.js'

export default class DetailOrder_D6 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_D6Components></DetailOrder_D6Components>
            </View>
        );
    }
}