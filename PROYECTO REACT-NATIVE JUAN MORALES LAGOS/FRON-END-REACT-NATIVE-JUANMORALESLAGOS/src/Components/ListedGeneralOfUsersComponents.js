import React, { Component } from 'react';
import { View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Text, Picker, ToastAndroid } from 'react-native';
import styleListUsers, { styleListedUsers } from '../Styles/Style.js';
import { FlatList } from 'react-native';
import * as NavigationService from '../Controller/NavigationService';
import * as GlobalValues from '../Controller/GlobalValues';
import AsyncStorage from '@react-native-community/async-storage';
import { ListItem, Card, SearchBar } from 'react-native-elements';

export default class ListedGeneralOfUsersComponents extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listUsers: '',
            searchItem: '',
            user_name: '',
            email_user: '',
            userValues: [],
        }
    }

    componentDidMount = async () => {
        user_name = await GlobalValues.obtener('user_name');
        this.setState({ user_name: user_name })
        email_user = await GlobalValues.obtener('email_user');
        this.setState({ email_user: email_user })
        this.getUsers()
        console.log(this.props)
    }

    getUsers = async () => {
        const url = 'http://192.168.0.7:8300/users/index'
        let data =
        {
            method: 'POST',
            headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        }
        fetch(url, data).then((response) => response.json()).then((responseJson) => {
            console.log(responseJson)
            this.setState({ listUsers: responseJson })
            this.setState({ userValues: responseJson })
        }
        )
    }

    render() {
        return (
            <View style={styleListedUsers.container}>
                <Text style={styleListedUsers.TituloListedUser}>listado GENERAL USUARIOS</Text>
                <View style={styleListedUsers.container}>

                    <FlatList
                        data={this.state.listUsers.slice(0, this.state.visible)}
                        renderItem={
                            ({ item }) =>
                                <ListItem
                                    style={{ fontSize: 15, marginBottom: 9 }}
                                    key={item.user_name}
                                    title={item.user_name}
                                    chevron
                                    topDivider={true}
                                    bottomDivider={true}
                                />
                        }
                        keyExtractor={item => String(item.user_name)}
                    />
                </View>
            </View>
        );
    }
}

