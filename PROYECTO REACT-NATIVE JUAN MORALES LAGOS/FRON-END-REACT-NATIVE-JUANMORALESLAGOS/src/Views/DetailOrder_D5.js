import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_D5Components from '../Components/DetailOrder_D5Components.js'

export default class DetailOrder_D5 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_D5Components></DetailOrder_D5Components>
            </View>
        );
    }
}