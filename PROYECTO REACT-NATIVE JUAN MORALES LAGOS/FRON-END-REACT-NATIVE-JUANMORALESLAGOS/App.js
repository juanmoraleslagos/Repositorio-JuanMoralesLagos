import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './src/Controller/NavigationService';


import Login from './src/Views/Login.js'
import RegistryUser from './src/Views/RegistryUser.js';
import MenuDocuments from './src/Views/MenuDocuments.js';
import RecoveryPassword from './src/Views/RecoveryPassword.js';
import Autorizations from './src/Views/Autorizations.js';
import Vehiculos from './src/Views/Vehiculos.js';
import PowerBank from './src/Views/PowerBank.js';
import Banks from './src/Views/Banks.js';
import Power from './src/Views/Power.js';
import Revocacion from './src/Views/Revocacion.js';
import NotarySelection from './src/Views/NotarySelection.js'
import Statement from './src/Views/Statement.js';
import Contract from './src/Views/Contract.js';
import Labor from './src/Views/Labor.js';
import Foreign from './src/Views/Foreign.js';
import AdministratorsMenu from './src/Views/AdministratorsMenu.js';
import Administrators from './src/Views/Administrators.js';
import DeleteUser from './src/Views/DeleteUser';
import AddNotario from './src/Views/AddNotario.js';
import DeleteNotary from './src/Views/DeleteNotary.js';
import AddNotarias from './src/Views/AddNotarias.js';
import ListedGeneralOfUsers from './src/Views/ListedGeneralOfUsers.js';
import MenuUsers from './src/Views/MenuUsers.js';
import BarcodeScanner from './src/Views/BarcodeScanner.js';

//Exportanto Ordenes Detalles para las Autorizaciones
import DetailOrder from './src/Views/DetailOrder.js';
import DetailOrder_A2 from './src/Views/DetailOrder_A2.js';
import DetailOrder_A3 from './src/Views/DetailOrder_A3.js';
import DetailOrder_A4 from './src/Views/DetailOrder_A4.js';
import DetailOrder_A5 from './src/Views/DetailOrder_A5.js';
import DetailOrder_A6 from './src/Views/DetailOrder_A6.js';
import DetailOrder_A7 from './src/Views/DetailOrder_A7.js';
import DetailOrder_A8 from './src/Views/DetailOrder_A8.js';
import DetailOrder_A9 from './src/Views/DetailOrder_A9.js';
import DetailOrder_A10 from './src/Views/DetailOrder_A10.js';
import DetailOrder_A11 from './src/Views/DetailOrder_A11.js';
import DetailOrder_A12 from './src/Views/DetailOrder_A12.js';
import DetailOrder_A13 from './src/Views/DetailOrder_A13.js';
import DetailOrder_A14 from './src/Views/DetailOrder_A14.js';
import DetailOrder_A15 from './src/Views/DetailOrder_A15.js';
import DetailOrder_A16 from './src/Views/DetailOrder_A16.js';
import DetailOrder_A17 from './src/Views/DetailOrder_A17.js';
import DetailOrder_A18 from './src/Views/DetailOrder_A18.js';

//Exportando Ordenes de Detalles para Tramitar Documentos Vehículos.
import DetailOrder_V1 from './src/Views/DetailOrder_V1.js';
import DetailOrder_V2 from './src/Views/DetailOrder_V2.js';
import DetailOrder_V3 from './src/Views/DetailOrder_V3.js';
import DetailOrder_V4 from './src/Views/DetailOrder_V4.js';
import DetailOrder_V5 from './src/Views/DetailOrder_V5.js';
import DetailOrder_V6 from './src/Views/DetailOrder_V6.js';
import DetailOrder_V7 from './src/Views/DetailOrder_V7.js';

//Exportando Ordenes de Detalle para Tramitar Poderes Bancarios
import DetailOrder_PB1 from './src/Views/DetailOrder_PB1.js';
import DetailOrder_PB2 from './src/Views/DetailOrder_PB2.js';
import DetailOrder_PB3 from './src/Views/DetailOrder_PB3.js';
import DetailOrder_PB4 from './src/Views/DetailOrder_PB4.js';

//Exportando Ordenes de Detalle para Tramitar Poderes
import DetailOrder_P1 from './src/Views/DetailOrder_P1.js';
import DetailOrder_P2 from './src/Views/DetailOrder_P2.js';
import DetailOrder_P3 from './src/Views/DetailOrder_P3.js';
import DetailOrder_P4 from './src/Views/DetailOrder_P4.js';
import DetailOrder_P5 from './src/Views/DetailOrder_P5.js';
import DetailOrder_P6 from './src/Views/DetailOrder_P6.js';
import DetailOrder_P7 from './src/Views/DetailOrder_P7.js';
import DetailOrder_P8 from './src/Views/DetailOrder_P8.js';

//Exportando Ordenes de Detalles para Tramitar Revocación 
import DetailOrder_RV from './src/Views/DetailOrder_RV.js';

//Exportando Ordenes  de Detalle para Tramitar Declaraciones:
import DetailOrder_D1 from './src/Views/DetailOrder_D1.js';
import DetailOrder_D2 from './src/Views/DetailOrder_D2.js';
import DetailOrder_D3 from './src/Views/DetailOrder_D3.js';
import DetailOrder_D4 from './src/Views/DetailOrder_D4.js';
import DetailOrder_D5 from './src/Views/DetailOrder_D5.js';
import DetailOrder_D6 from './src/Views/DetailOrder_D6.js';
import DetailOrder_D7 from './src/Views/DetailOrder_D7.js';
import DetailOrder_D8 from './src/Views/DetailOrder_D8.js';
import DetailOrder_D9 from './src/Views/DetailOrder_D9.js';
import DetailOrder_D10 from './src/Views/DetailOrder_D10.js';
import DetailOrder_D11 from './src/Views/DetailOrder_D11.js';
import DetailOrder_D12 from './src/Views/DetailOrder_D12.js';
import DetailOrder_D13 from './src/Views/DetailOrder_D13.js';
import DetailOrder_D14 from './src/Views/DetailOrder_D14.js';
import DetailOrder_D15 from './src/Views/DetailOrder_D15.js';
import DetailOrder_D16 from './src/Views/DetailOrder_D16.js';

//Exportando Ordenes  de Detalle para Tramitar contratos:
import DetailOrder_C1 from './src/Views/DetailOrder_C1.js';
import DetailOrder_C2 from './src/Views/DetailOrder_C2.js';
import DetailOrder_C3 from './src/Views/DetailOrder_C3.js';
import DetailOrder_C4 from './src/Views/DetailOrder_C4.js';
import DetailOrder_C5 from './src/Views/DetailOrder_C5.js';
import DetailOrder_C6 from './src/Views/DetailOrder_C6.js';
import DetailOrder_C7 from './src/Views/DetailOrder_C7.js';
import DetailOrder_C8 from './src/Views/DetailOrder_C8.js';

//Exportando Ordenes  de Detalle para Tramitar Documentos Laborales:
import DetailOrder_L1 from './src/Views/DetailOrder_L1.js';
import DetailOrder_L2 from './src/Views/DetailOrder_L2.js';
import DetailOrder_L3 from './src/Views/DetailOrder_L3.js';

//Exportando Ordenes  de Detalle para tramites de ciudadanos extranjeros:
import DetailOrder_F1 from './src/Views/DetailOrder_F1.js';
import DetailOrder_F2 from './src/Views/DetailOrder_F2.js';


const Stack = createStackNavigator();
export default function App() {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="RegistryUser" component={RegistryUser} />
                <Stack.Screen name="MenuDocuments" component={MenuDocuments} />
                <Stack.Screen name="RecoveryPassword" component={RecoveryPassword} />
                <Stack.Screen name="Autorizations" component={Autorizations} />
                <Stack.Screen name="Vehiculos" component={Vehiculos} />
                <Stack.Screen name="PowerBank" component={PowerBank} />
                <Stack.Screen name="Banks" component={Banks} />
                <Stack.Screen name="Power" component={Power} />
                <Stack.Screen name="Revocacion" component={Revocacion} />
                <Stack.Screen name="NotarySelection" component={NotarySelection} />
                <Stack.Screen name="Statement" component={Statement} />
                <Stack.Screen name="Contract" component={Contract} />
                <Stack.Screen name="Labor" component={Labor} />
                <Stack.Screen name="Foreign" component={Foreign} />
                <Stack.Screen name="Administrators" component={Administrators} />
                <Stack.Screen name="AdministratorsMenu" component={AdministratorsMenu} />
                <Stack.Screen name="DeleteUser" component={DeleteUser} />
                <Stack.Screen name="AddNotario" component={AddNotario} />
                <Stack.Screen name="AddNotarias" component={AddNotarias} />
                <Stack.Screen name="DeleteNotary" component={DeleteNotary} />
                <Stack.Screen name="ListedGeneralOfUsers" component={ListedGeneralOfUsers} />
                <Stack.Screen name="MenuUsers" component={MenuUsers} />
                <Stack.Screen name="BarcodeScanner" component={BarcodeScanner} />

                <Stack.Screen name="DetailOrder" component={DetailOrder} />
                <Stack.Screen name="DetailOrder_A2" component={DetailOrder_A2} />
                <Stack.Screen name="DetailOrder_A3" component={DetailOrder_A3} />
                <Stack.Screen name="DetailOrder_A4" component={DetailOrder_A4} />
                <Stack.Screen name="DetailOrder_A5" component={DetailOrder_A5} />
                <Stack.Screen name="DetailOrder_A6" component={DetailOrder_A6} />
                <Stack.Screen name="DetailOrder_A7" component={DetailOrder_A7} />
                <Stack.Screen name="DetailOrder_A8" component={DetailOrder_A8} />
                <Stack.Screen name="DetailOrder_A9" component={DetailOrder_A9} />
                <Stack.Screen name="DetailOrder_A10" component={DetailOrder_A10} />
                <Stack.Screen name="DetailOrder_A11" component={DetailOrder_A11} />
                <Stack.Screen name="DetailOrder_A12" component={DetailOrder_A12} />
                <Stack.Screen name="DetailOrder_A13" component={DetailOrder_A13} />
                <Stack.Screen name="DetailOrder_A14" component={DetailOrder_A14} />
                <Stack.Screen name="DetailOrder_A15" component={DetailOrder_A15} />
                <Stack.Screen name="DetailOrder_A16" component={DetailOrder_A16} />
                <Stack.Screen name="DetailOrder_A17" component={DetailOrder_A17} />
                <Stack.Screen name="DetailOrder_A18" component={DetailOrder_A18} />

                <Stack.Screen name="DetailOrder_V1" component={DetailOrder_V1} />
                <Stack.Screen name="DetailOrder_V2" component={DetailOrder_V2} />
                <Stack.Screen name="DetailOrder_V3" component={DetailOrder_V3} />
                <Stack.Screen name="DetailOrder_V4" component={DetailOrder_V4} />
                <Stack.Screen name="DetailOrder_V5" component={DetailOrder_V5} />
                <Stack.Screen name="DetailOrder_V6" component={DetailOrder_V6} />
                <Stack.Screen name="DetailOrder_V7" component={DetailOrder_V7} />

                <Stack.Screen name="DetailOrder_PB1" component={DetailOrder_PB1} />
                <Stack.Screen name="DetailOrder_PB2" component={DetailOrder_PB2} />
                <Stack.Screen name="DetailOrder_PB3" component={DetailOrder_PB3} />
                <Stack.Screen name="DetailOrder_PB4" component={DetailOrder_PB4} />

                <Stack.Screen name="DetailOrder_P1" component={DetailOrder_P1} />
                <Stack.Screen name="DetailOrder_P2" component={DetailOrder_P2} />
                <Stack.Screen name="DetailOrder_P3" component={DetailOrder_P3} />
                <Stack.Screen name="DetailOrder_P4" component={DetailOrder_P4} />
                <Stack.Screen name="DetailOrder_P5" component={DetailOrder_P5} />
                <Stack.Screen name="DetailOrder_P6" component={DetailOrder_P6} />
                <Stack.Screen name="DetailOrder_P7" component={DetailOrder_P7} />
                <Stack.Screen name="DetailOrder_P8" component={DetailOrder_P8} />

                <Stack.Screen name="DetailOrder_RV" component={DetailOrder_RV} />  

                <Stack.Screen name="DetailOrder_D1" component={DetailOrder_D1} />
                <Stack.Screen name="DetailOrder_D2" component={DetailOrder_D2} />
                <Stack.Screen name="DetailOrder_D3" component={DetailOrder_D3} />
                <Stack.Screen name="DetailOrder_D4" component={DetailOrder_D4} />
                <Stack.Screen name="DetailOrder_D5" component={DetailOrder_D5} />
                <Stack.Screen name="DetailOrder_D6" component={DetailOrder_D6} />
                <Stack.Screen name="DetailOrder_D7" component={DetailOrder_D7} />
                <Stack.Screen name="DetailOrder_D8" component={DetailOrder_D8} />
                <Stack.Screen name="DetailOrder_D9" component={DetailOrder_D9} />
                <Stack.Screen name="DetailOrder_D10" component={DetailOrder_D10} />
                <Stack.Screen name="DetailOrder_D11" component={DetailOrder_D11} />
                <Stack.Screen name="DetailOrder_D12" component={DetailOrder_D12} />
                <Stack.Screen name="DetailOrder_D13" component={DetailOrder_D13} />
                <Stack.Screen name="DetailOrder_D14" component={DetailOrder_D14} />
                <Stack.Screen name="DetailOrder_D15" component={DetailOrder_D15} />
                <Stack.Screen name="DetailOrder_D16" component={DetailOrder_D16} />

                <Stack.Screen name="DetailOrder_C1" component={DetailOrder_C1} />
                <Stack.Screen name="DetailOrder_C2" component={DetailOrder_C2} />
                <Stack.Screen name="DetailOrder_C3" component={DetailOrder_C3} />
                <Stack.Screen name="DetailOrder_C4" component={DetailOrder_C4} />
                <Stack.Screen name="DetailOrder_C5" component={DetailOrder_C5} />
                <Stack.Screen name="DetailOrder_C6" component={DetailOrder_C6} />
                <Stack.Screen name="DetailOrder_C7" component={DetailOrder_C7} />
                <Stack.Screen name="DetailOrder_C8" component={DetailOrder_C8} />

                <Stack.Screen name="DetailOrder_L1" component={DetailOrder_L1} />
                <Stack.Screen name="DetailOrder_L2" component={DetailOrder_L2} />
                <Stack.Screen name="DetailOrder_L3" component={DetailOrder_L3} />

                <Stack.Screen name="DetailOrder_F1" component={DetailOrder_F1} />
                <Stack.Screen name="DetailOrder_F2" component={DetailOrder_F2} />
                

                                
            </Stack.Navigator>

        </NavigationContainer>
    );
}