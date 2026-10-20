/**
 * Template React Native App
 * @author Nacho Muñoz
 * @version 1.1
 * @summary Clase base para iniciar una app en React Native
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class App extends Component {
    render() {
        return (
            <View style={styles.sectionContainer}>
                <Text>Si lees este texto, has cargado correctamente la plantilla</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 52,
        paddingHorizontal: 24,
    },
});

export default App;
