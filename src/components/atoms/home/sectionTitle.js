import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Typography } from '_styles';

const SectionTitle = props => <Text style={styles.title}>{props.text}</Text>;

const styles = StyleSheet.create({
    title: {
        //fontWeight: 'bold',
        fontSize: Typography.LINE_HEIGHT_24,
        fontFamily: Typography.FONT_FAMILY_BOLD,
    }
});

export default SectionTitle;