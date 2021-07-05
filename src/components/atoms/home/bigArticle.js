import React from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Typography, Mixins, Spacing } from '_styles';

const BigArticle = props => {
    return (
        <TouchableOpacity style={styles.image}>
            <ImageBackground source={{uri: props.image}} style={styles.image}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{props.title}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // flexDirection: 'row',
        // justifyContent: 'space-around',
        // alignItems: 'center',
        backgroundColor: 'tomato',
    },

    titleContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        padding: Mixins.scaleSize(25),
    },

    title: {
        backgroundColor: 'transparent',
        fontSize: Typography.LINE_HEIGHT_18,
        fontFamily: Typography.FONT_FAMILY_REGULAR,
        //fontWeight: 'bold',
        color: 'white',
        //fontStyle: 'italic',
        // fontFamily: 'normal'
    },

    image: {
        height: Mixins.scaleSize(200),
        width: Mixins.scaleSize(300),
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        borderRadius: 10,
        marginRight: Spacing.SCALE_8
    },
});

export default BigArticle;