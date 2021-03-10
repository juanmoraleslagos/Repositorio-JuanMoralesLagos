import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_P7Components from '../Components/DetailOrder_P7Components.js'

export default class DetailOrder_P7 extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_P7Components></DetailOrder_P7Components>
            </View>
        );
    }
}