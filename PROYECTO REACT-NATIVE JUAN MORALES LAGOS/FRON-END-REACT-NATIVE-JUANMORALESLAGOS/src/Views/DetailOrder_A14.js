import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_A14Components from '../Components/DetailOrder_A14Components.js'

export default class DetailOrder_A14 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_A14Components></DetailOrder_A14Components>
            </View>
        );
    }
}