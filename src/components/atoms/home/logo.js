import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Mixins } from '_styles';

const Logo = () => {
    return (
        <View style={styles.container}>
            <Image source={require('_assets/images/logo.png')} style={styles.logo} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        height: Mixins.scaleSize(25),
        width: Mixins.scaleSize(156),
        resizeMode: 'cover'
    }
})

export default Logo;