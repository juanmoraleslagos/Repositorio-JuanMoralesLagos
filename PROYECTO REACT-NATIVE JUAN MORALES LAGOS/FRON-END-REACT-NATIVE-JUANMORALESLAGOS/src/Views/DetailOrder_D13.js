import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_D13Components from '../Components/DetailOrder_D13Components.js'

export default class DetailOrder_D13 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_D13Components></DetailOrder_D13Components>
            </View>
        );
    }
}