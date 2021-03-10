import React from 'react';
import { View } from 'react-native';
import { stylesDetailOrder} from '../Styles/Style.js';

import DetailOrder_RVComponents from '../Components/DetailOrder_RVComponents.js'

export default class DetailOrder_RV extends React.Component {
    render() {
        return (
            <View style={stylesDetailOrder.containerDetailOrder}>
                <DetailOrder_RVComponents></DetailOrder_RVComponents>
            </View>
        );
    }
}