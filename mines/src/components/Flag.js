import React from 'react'
import { View, StyleSheet } from 'react-native'

export default props => {
    return (
        <View style={styles.container}>
            <View style={[styles.flagpole, props.bigger ? styles.flagpoleBigger : null]} />
            <View style={[styles.flag, props.bigger ? styles.flagBigger : null]} />
            <View style={[styles.base1, props.bigger ? styles.base1Bigger : null]} />
            <View style={[styles.base2, props.bigger ? styles.base2Bigger : null]} />
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
    },
    flagpoleBigger: {
        height: 60,
        width: 6,
        marginLeft: 23,
    },
    flagBigger: {
        height: 16,
        width: 20,
        marginLeft: 3,
    },
    base1Bigger: {
        height: 4,
        width: 20,
        marginTop: 60,
        marginLeft: 16,
    },
    base2Bigger: {
        height: 4,
        width: 30,
        marginLeft: 10,
        marginTop: 62,
    }
})