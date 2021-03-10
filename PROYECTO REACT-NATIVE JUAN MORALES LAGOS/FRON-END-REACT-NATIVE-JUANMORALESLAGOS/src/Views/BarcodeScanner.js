import * as React from 'react';
import {Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default class BarcodeScanner extends React.Component {
    state = {
        hasCameraPermission: null,
        scanned: false,
    };
    async componentDidMount() {
        this.getPermissionsAsync();
    }
    getPermissionsAsync = async () => {
        const {
            status
        } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermission: status === 'granted'
        });
    };
    render() {
        const {
            hasCameraPermission,
            scanned
        } = this.state;

        if (hasCameraPermission === null) {
            return <Text style={{marginTop:250,fontSize:18,paddingLeft:5}}>SOLICITANDO PERMISO DE CÁMARA</Text>;
        }
        
        if (hasCameraPermission === false) {
            return <Text style={{marginTop:250,fontSize:18,paddingLeft:5}}> SIN ACCESO A LA CÁMARA </Text>;
        }
        return (
            <View
                style={{
                    flex:1,
                    flexDirection: 'column',
                    justifyContent: 'flex-end',                                              
                }} >
                <BarCodeScanner onBarCodeScanned={
                    scanned ? undefined : this.handleBarCodeScanned
                }
                    style={
                        StyleSheet.absoluteFillObject
                    }
                />
                {
                    scanned && (
                        <Button title={'Tap to Scan Again'}
                            onPress={() => this.setState({
                                scanned: false
                            })
                            }
                        />
                    )
                }
            </View>
        );
    }

    handleBarCodeScanned = ({
        type,
        data
    }) => {
        this.setState({
            scanned: true
        });
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };
}
