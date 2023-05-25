import React from 'react'
import { View, StyleSheet } from 'react-native'

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.flagpole} />
            <View style={styles.flag} />
            <View style={styles.base1} />
            <View style={styles.base2} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
    },
    flagpole: {
        position: 'absolute',
        height: 30,
        width: 3,
        backgroundColor: '#222',
        marginLeft: 24,
    },
    flag: {
        position: 'absolute',
        height: 8,
        width: 10,
        backgroundColor: '#F22',
        marginLeft: 14,
    },
    base1: {
        position: 'absolute',
        height: 2,
        width: 10,
        backgroundColor: '#222',
        marginLeft: 20,
        marginTop: 30,
    },
    base2: {
        position: 'absolute',
        height: 2,
        width: 14,
        backgroundColor: '#222',
        marginLeft: 18,
        marginTop: 32,
    }
})