import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Logo, Settings } from '_atoms';

const Top = () => {
    return (
        <>
            <View style={styles.container}>
                <Logo />
                <Settings />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})

export default Top;