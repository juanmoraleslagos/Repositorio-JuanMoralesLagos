import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_P5Components from '../Components/DetailOrder_P5Components.js'

export default class DetailOrder_P5 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_P5Components></DetailOrder_P5Components>
            </View>
        );
    }
}