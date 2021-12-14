/**
 * Template React Native App
 * @author Nacho Muñoz
 * @version 1.0
 * @format
 * @class
 * @summary Clase base para iniciar una app en React Native
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class App extends Component {
    render() {
        return (
            <View>
                <Text>Hola Nacho</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
});

export default App;