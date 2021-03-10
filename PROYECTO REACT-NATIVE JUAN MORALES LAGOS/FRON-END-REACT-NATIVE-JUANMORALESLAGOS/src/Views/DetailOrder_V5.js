import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_V5Components from '../Components/DetailOrder_V5Components.js'

export default class DetailOrder_V5 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_V5Components></DetailOrder_V5Components>
            </View>
        );
    }
}