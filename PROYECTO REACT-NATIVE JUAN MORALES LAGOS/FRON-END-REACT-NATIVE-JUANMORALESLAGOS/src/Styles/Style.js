import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },

    Titulo: {
        fontWeight: "bold",
        fontSize: 35,
        color: '#fb5b5a',
        paddingTop: 40,
        paddingBottom: 20,
    },

    TituloRecovery: {
        fontWeight: "bold",
        fontSize: 28,
        color: '#fb5b5a',
        paddingTop: 80,
        paddingBottom: 30,
    },

    InputUser: {
        width: "80%",
        backgroundColor: '#465881',
        color: "white",
        margin: 15,
        height: 50,
        borderColor: '#f7f1e3',
        fontWeight: 'bold',
        borderRadius: 15,
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
    },

    InputPassword: {
        width: "80%",
        backgroundColor: '#465881',
        color: "white",
        margin: 15,
        height: 50,
        borderColor: '#f7f1e3',
        fontWeight: 'bold',
        borderRadius: 15,
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
    },

    InputPasswordConfirm: {
        width: "80%",
        backgroundColor: '#465881',
        color: "white",
        margin: 15,
        height: 50,
        borderColor: '#f7f1e3',
        fontWeight: 'bold',
        borderRadius: 15,
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
    },

    InputEmail: {
        width: "80%",
        backgroundColor: '#465881',
        color: "white",
        margin: 15,
        height: 50,
        borderColor: '#f7f1e3',
        fontWeight: 'bold',
        borderRadius: 15,
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
    },

    Forgot: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
        paddingTop: 20
    },

    SubmitButton: {
        width: "80%",
        backgroundColor: '#fb5b5a',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'white',
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        marginBottom: 20,
        paddingLeft: 80,
        paddingRight: 80
    },


    SubmitButtonText: {
        color: '#f7f1e3',
        fontWeight: 'bold'
    },

    Signup: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
        paddingTop: 20
    },

    Message: {
        color: "white",
        fontWeight: "bold",
        fontSize: 9,
        paddingTop: 20,
        width: '33.3%',
    },

    AdministratorsButton: {
        width: "80%",
        backgroundColor: '#fb5b5a',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'white',
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        marginBottom: 20,
        paddingLeft: 50,
        paddingRight: 50
    },

    AdministratorsButtonText: {
        color: '#f7f1e3',
        fontWeight: 'bold'
    },
})


export const stylesMenu = StyleSheet.create({

    containerMenu: {
        flex: 1,
        backgroundColor: '#003f5c',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',

    },

    tituloMenu: {
        fontWeight: "bold",
        fontSize: 23,
        color: '#fb5b5a',
        marginTop: 170,
        marginLeft: -70,

    },

    botonTramite: {
        borderRadius: 100,
        backgroundColor: 'white',
        height: 110,
        width: 110,
        justifyContent: 'center',
        marginTop: 20,
        marginLeft: 10,
    },

    nombreTramite: {
        fontSize: 10,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
})

export const stylesBank = StyleSheet.create({

    containerBank: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
    },

    tituloBank: {
        fontWeight: "bold",
        fontSize: 35,
        color: '#fb5b5a',
        paddingBottom: 20,
    },

    buttonBank: {
        width: "80%",
        backgroundColor: '#fb5b5a',
        borderRadius: 15,
        borderColor: 'white',
        borderWidth: 2,
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        marginBottom: 20,
        paddingLeft: 80,
        paddingRight: 80,
    },

    buttonDocument: {
        width: "80%",
        backgroundColor: '#fb5b5a',
        borderRadius: 15,
        borderColor: 'white',
        borderWidth: 2,
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        marginBottom: 20,
        paddingLeft: 70,
        paddingRight: 70,
    },
    selectTextButton: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 13,
    },
})

export const styleRevocacion = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        flexDirection: 'row',
        flexWrap: 'wrap',

    },

    Titulo: {
        fontWeight: "bold",
        fontSize: 35,
        color: '#fb5b5a',
        paddingTop: 10,
        paddingLeft: 10,
    },

    Message: {
        color: "white",
        fontWeight: "bold",
        fontSize: 15,
        paddingTop: 1,
        paddingLeft: 15,
        paddingBottom: 2,
    },

    InputRut: {
        width: "80%",
        backgroundColor: '#465881',
        color: "white",
        marginTop: 2,
        marginLeft: 15,
        height: 25,
        borderColor: '#f7f1e3',
        fontWeight: 'bold',
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 110,
    },

    InputPrimerNombre: {
        width: "80%",
        backgroundColor: '#465881',
        color: "white",
        marginTop: 2,
        marginLeft: 15,
        height: 25,
        borderColor: '#f7f1e3',
        fontWeight: 'bold',
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 33,
    },

    InputSegundoNombre: {
        width: "80%",
        backgroundColor: '#465881',
        color: "white",
        marginTop: 2,
        marginLeft: 15,
        height: 25,
        borderColor: '#f7f1e3',
        fontWeight: 'bold',
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 33,
    },

    InputApellidoPaterno: {
        width: "80%",
        backgroundColor: '#465881',
        color: "white",
        marginTop: 2,
        marginLeft: 15,
        height: 25,
        borderColor: '#f7f1e3',
        fontWeight: 'bold',
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 33,
    },

    InputApellidoMaterno: {
        width: "80%",
        backgroundColor: '#465881',
        color: "white",
        marginTop: 2,
        marginLeft: 15,
        marginBottom: 5,
        height: 25,
        borderColor: '#f7f1e3',
        fontWeight: 'bold',
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 33,
    },

    TextMessage: {
        color: "white",
        fontWeight: "bold",
        fontSize: 15,
        paddingLeft: 15,
    },

    buttonDate: {
        width: "80%",
        backgroundColor: '#fb5b5a',
        height: 25,
        alignItems: "flex-start",
        borderColor: '#f7f1e3',
        borderWidth: 1,
        marginTop: 5,
        marginLeft: 15,
        marginRight: 50,
        marginBottom: 5,
        padding: 0,
    },

    buttonFollowing: {
        width: "80%",
        backgroundColor: '#fb5b5a',
        height: 25,
        alignItems: "flex-start",
        borderColor: '#f7f1e3',
        borderWidth: 1,
        borderRadius: 15,
        marginTop: 5,
        marginLeft: 15,
        marginRight: 50,
        marginBottom: 5,
        padding: 0,
    },

    MessageSecundary: {
        color: "white",
        fontWeight: "bold",
        fontSize: 15,
        marginLeft: 15,
        marginRight: 50,
    },

    MessageThird: {
        color: "white",
        fontWeight: "bold",
        fontSize: 15,
        marginLeft: 15,
        marginRight: 50,
    },

    InputMotivo: {
        width: "80%",
        backgroundColor: '#465881',
        color: "white",
        marginTop: 10,
        marginLeft: 15,
        marginBottom: 10,
        height: 25,
        borderColor: '#f7f1e3',
        fontWeight: 'bold',
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 33,
    },
})

export const styleNotary = StyleSheet.create({
    containerNotary: {
        flex: 1,
        backgroundColor: '#003f5c',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },

    TituloNotario: {
        fontWeight: "bold",
        fontSize: 20,
        color: '#fb5b5a',
        paddingTop: 50,
        paddingBottom: 30,
    },


    RadioForm: {
        width: "80%",
        backgroundColor: "#465881",
        borderWidth: 1,
        borderColor: "#f7f1e3",
        marginBottom: 5,
        paddingTop: 3,
        paddingLeft: 8,
    },

    InputNotario: {
        width: "80%",
        backgroundColor: '#465881',
        color: "white",
        marginBottom: 10,
        height: 25,
        borderColor: '#f7f1e3',
        fontWeight: 'bold',
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 33,
    },

    buttonNotario: {
        width: "80%",
        backgroundColor: '#fb5b5a',
        height: 30,
        borderColor: '#f7f1e3',
        borderWidth: 1,
        marginTop: 30,
        marginBottom: 30,
    },

    TextButtonNotario: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 18,
        paddingHorizontal: 60,
    },
})

export const styleRegistryUsers = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },

    Titulo: {
        fontWeight: "bold",
        fontSize: 35,
        color: '#fb5b5a',
        marginTop: 50,
    },

    InputRegistryUser: {
        width: "80%",
        backgroundColor: '#465881',
        color: "white",
        margin: 15,
        height: 50,
        borderColor: '#f7f1e3',
        fontWeight: 'bold',
        borderRadius: 15,
        borderWidth: 1,
        textAlign: "center",
    },

    SubmitButtonRegistryUser: {
        width: "80%",
        backgroundColor: '#fb5b5a',
        borderRadius: 15,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        marginBottom: 20,
        paddingLeft: 48,
        paddingRight: 48,
    },

    SubmitButtonTextRegistryUser: {
        color: '#f7f1e3',
        fontWeight: 'bold'
    },
})

export const styleAdministrators = StyleSheet.create({

    containerAdministrators: {
        flex: 1,
        backgroundColor: '#003f5c',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },

    TituloAdministrators: {
        fontWeight: "bold",
        fontSize: 20,
        color: '#fb5b5a',
        paddingTop: 100,
        paddingBottom: 20,
    },

    InputAdministrators: {
        width: "80%",
        backgroundColor: '#465881',
        color: "white",
        margin: 15,
        height: 50,
        borderColor: '#f7f1e3',
        fontWeight: 'bold',
        borderRadius: 15,
        borderWidth: 1,
        textAlign: "center",
    },

    buttonAdministrators: {
        width: "80%",
        backgroundColor: '#fb5b5a',
        borderRadius: 15,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        marginBottom: 20,
        paddingLeft: 48,
        paddingRight: 48,
    },

    TextButtonAdministrators: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 15,
    },
})

export const styleAdministratorsMenu = StyleSheet.create({

    containerAdministratorsMenu: {
        flex: 1,
        backgroundColor: '#003f5c',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },

    TituloAdministrators: {
        fontWeight: "bold",
        fontSize: 20,
        color: '#fb5b5a',
        paddingTop: 100,
        paddingBottom: 20,
    },

    buttonAdministratorsMenu: {
        width: "80%",
        backgroundColor: '#fb5b5a',
        height: 25,
        borderColor: '#f7f1e3',
        borderWidth: 1,
        marginBottom: 20,
        padding: 0,
    },

    TextButtonAdministratorsMenu: {
        color: "white",
        fontWeight: "bold",
        fontSize: 15,
        textTransform: 'uppercase',
        paddingLeft: 15,
    },
})

export const styleListedUsers = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
    },

    TituloListedUser: {
        fontWeight: "bold",
        fontSize: 25,
        color: '#fb5b5a',
        paddingLeft: 15,
        paddingTop: 40,
        paddingBottom: 20,
    },

    textListedUser: {
        fontSize: 18,
        color: "white",
        marginBottom: 15,
    },

    InputListenedUsers: {
        width: "80%",
        backgroundColor: '#465881',
        color: "white",
        margin: 15,
        height: 50,
        borderColor: '#f7f1e3',
        fontWeight: 'bold',
        borderRadius: 15,
        borderWidth: 1,
        textAlign: "center",
    },
})

export const styleAddNotaria = StyleSheet.create({
    containerAddNotaria: {
        flex: 1,
        backgroundColor: '#003f5c',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },

    InputAddNotarias: {
        width: "80%",
        backgroundColor: '#465881',
        color: "white",
        marginBottom: 15,
        height: 25,
        borderColor: '#f7f1e3',
        fontWeight: 'bold',
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 33,
    },

    tituloAddNotaria: {
        fontWeight: "bold",
        fontSize: 20,
        color: '#fb5b5a',
        paddingTop: 50,
        paddingBottom: 30,
    },

    buttonAddNotarias: {
        width: "80%",
        backgroundColor: '#fb5b5a',
        height: 30,
        borderColor: '#f7f1e3',
        borderWidth: 1,
        marginTop: 30,
        marginBottom: 30,
    },

    TextButtonAddNotarias: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 18,
        paddingHorizontal: 60,
    },

    buttonGoDocuments: {
        width: "95%",
        backgroundColor: '#fb5b5a',
        height: 35,
        borderColor: '#f7f1e3',
        borderWidth: 1,
        marginTop: 1,
        marginBottom: 30,
    },

    TextGoDocuments: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 15,
        paddingTop: 5,
        paddingHorizontal: 20,
        paddingBottom: 5,
    },
})


export const stylesTramites = StyleSheet.create({

    containerFondo: {
        flex: 1,
        backgroundColor: '#003f5c',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },

    tituloTramites: {
        fontWeight: "bold",
        fontSize: 25,
        color: '#fb5b5a',
        paddingTop: 50,
        paddingBottom: 10,
    },

    buttonTramitesMenu: {
        width: "100%",
        backgroundColor: '#fb5b5a',
        height: 25,
        borderColor: 'white',
        borderWidth: 2,
        marginBottom: 10,
        padding: 0,
    },

    TextButtonTramitesMenu: {
        color: "white",
        fontWeight: "bold",
        fontSize: 13,
        textTransform: 'uppercase',
        textAlign: 'center',
        paddingTop: 3,
    },

    TextButtonContractMenu: {
        color: "white",
        fontWeight: "bold",
        fontSize: 10,
        textTransform: 'uppercase',
        textAlign: 'center',
        paddingTop: 3,
    },
})


//DISEÑO DE SCREENS PARA MODULO MENU USUARIOS

export const stylesMenuUsers = StyleSheet.create({
    containerMenuUsers: {
        flex: 1,
        backgroundColor: '#003f5c',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    tituloMenuUsers: {
        fontWeight: "bold",
        fontSize: 35,
        color: '#fb5b5a',
        marginTop: -120,
    },

    botonSeleccionarDocumentosMenuUsers: {
        borderRadius: 100,
        backgroundColor: '#fb5b5a',
        borderColor: '#f7f1e3',
        justifyContent: 'center',
        height: 150,
        width: 150,
        paddingLeft: 20,
        borderWidth: 2,
        marginTop: 80,
        marginLeft: 10,
    },

    botonScannerQrDocuments: {
        borderRadius: 100,
        backgroundColor: '#fb5b5a',
        borderColor: '#f7f1e3',
        justifyContent: 'center',
        height: 150,
        width: 150,
        paddingLeft: 25,
        borderWidth: 2,
        marginTop: 120,
        marginLeft: 10,
    },

    selectTextMenuUsers: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 15,
    },
})

//DISEÑO PARA DETAIL ORDER.

export const stylesDetailOrder = StyleSheet.create({

    containerDetailOrder: {
        flex: 1,
        backgroundColor: '#003f5c',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },

    tituloDetailOrder: {
        fontWeight: "bold",
        fontSize: 30,
        color: '#fb5b5a',
        marginTop: 150,
        marginLeft: 5,
        
    },

    textDetailOrder: {
        fontSize: 15,
        fontWeight:"bold",
        color: "white",
        marginTop:10,
        marginLeft:60,
        marginRight:50,
    },

    buttonDetailOrder: {
        width: "80%",
        backgroundColor: '#fb5b5a',
        height: 30,
        borderColor: '#f7f1e3',
        borderWidth: 1,
        marginTop: 30,
        marginBottom: 30,
    },

    textButtonDetailOrder: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 18,
        paddingHorizontal: 60,
    },
    
})