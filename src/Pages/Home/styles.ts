import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
    container: {
    marginTop: getStatusBarHeight(),
    flex: 1,
    backgroundColor: 'white'
    },
    headerArea: {
    marginLeft: 10
    },
    areaText: {
    width: 270
    },

    textMain: {
    fontSize: 40,
    fontWeight: 'bold'
    },
    mainArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -50
    },
    textAreaCenter: {
    
    },
    textAgendar: {
    fontSize: 30,
    fontWeight: 'bold',
    },
    buttonOutArea: {
    marginTop: 20
    },
    buttonInsideArea: {
    backgroundColor: '#8a4932',
    padding: 10,
    borderRadius: 10,
    width: 150,
    alignItems: 'center'
    },

})