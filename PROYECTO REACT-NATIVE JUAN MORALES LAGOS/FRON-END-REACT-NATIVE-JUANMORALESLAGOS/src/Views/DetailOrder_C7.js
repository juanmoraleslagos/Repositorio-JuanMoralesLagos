import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_C7Components from '../Components/DetailOrder_C7Components.js'

export default class DetailOrder_C7 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_C7Components></DetailOrder_C7Components>
            </View>
        );
    }
}