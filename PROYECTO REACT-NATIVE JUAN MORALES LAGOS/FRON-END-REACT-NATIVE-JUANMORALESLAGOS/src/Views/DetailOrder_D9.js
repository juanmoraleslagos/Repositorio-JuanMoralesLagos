import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_D9Components from '../Components/DetailOrder_D9Components.js'

export default class DetailOrder_D9 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_D9Components></DetailOrder_D9Components>
            </View>
        );
    }
}