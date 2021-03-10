import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrderComponents from '../Components/DetailOrderComponents.js'

export default class DetailOrder extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrderComponents></DetailOrderComponents>
            </View>
        );
    }
}