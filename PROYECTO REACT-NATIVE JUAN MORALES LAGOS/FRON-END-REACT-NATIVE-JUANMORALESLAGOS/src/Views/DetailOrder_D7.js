import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_D7Components from '../Components/DetailOrder_D7Components.js'

export default class DetailOrder_D7 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_D7Components></DetailOrder_D7Components>
            </View>
        );
    }
}