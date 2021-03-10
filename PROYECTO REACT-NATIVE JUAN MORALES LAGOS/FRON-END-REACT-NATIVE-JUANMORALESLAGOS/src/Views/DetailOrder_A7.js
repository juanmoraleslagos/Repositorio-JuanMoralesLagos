import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_A7Components from '../Components/DetailOrder_A7Components.js'

export default class DetailOrder_A7 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_A7Components></DetailOrder_A7Components>
            </View>
        );
    }
}