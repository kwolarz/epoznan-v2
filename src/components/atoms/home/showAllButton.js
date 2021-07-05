import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View }  from 'react-native';
import { Colors, Mixins, Typography } from '_styles';

const ShowAll = (props) => {
    return (
        <View>
            <TouchableOpacity onPress={() => console.log('pressed')} style={styles.button}>
                {/* <Image source={require('_assets/images/settings.png')} style={styles.icon}/> */}
                <Text style={styles.text}>{props.text}</Text>
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

    text: {
        fontSize: Typography.FONT_SIZE_12,
        fontWeight: 'bold',
    }
})

export default ShowAll;