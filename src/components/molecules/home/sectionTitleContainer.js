import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SectionTitle, ShowAll } from '_atoms';
import { Spacing } from '_styles';

const SectionTitleContainer = props => {
    return (
        <>
            <View style={styles.container}>
                <SectionTitle text={props.text} />
                <View style={styles.spacer} />
                <ShowAll text={props.title} />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingBottom: Spacing.SCALE_12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    spacer: {
        flex: 1,
    }
})

export default SectionTitleContainer;