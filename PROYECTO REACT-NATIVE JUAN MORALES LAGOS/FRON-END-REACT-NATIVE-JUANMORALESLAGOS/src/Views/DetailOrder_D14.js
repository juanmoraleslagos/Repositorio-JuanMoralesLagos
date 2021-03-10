import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_D14Components from '../Components/DetailOrder_D14Components.js'

export default class DetailOrder_D14 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_D14Components></DetailOrder_D14Components>
            </View>
        );
    }
}