import React from 'react';
import { TouchableOpacity, Image, StyleSheet, View }  from 'react-native';
import { Colors, Mixins } from '_styles';

const Settings = () => {
    return (
        <View>
            <TouchableOpacity onPress={() => console.log('pressed')} style={styles.button}>
                <Image source={require('_assets/images/settings.png')} style={styles.icon}/>
            </TouchableOpacity>
        </View>

    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: Mixins.scaleSize(5),
        backgroundColor: Colors.GRAY_LIGHT,
        padding: Mixins.scaleSize(7),
    },

    icon: {
        height: Mixins.scaleSize(18),
        width: Mixins.scaleSize(18),
        resizeMode: 'cover',
    }
})

export default Settings;