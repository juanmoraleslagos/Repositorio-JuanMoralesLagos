import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_V7Components from '../Components/DetailOrder_V7Components.js'

export default class DetailOrder_V7 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_V7Components></DetailOrder_V7Components>
            </View>
        );
    }
}