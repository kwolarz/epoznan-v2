import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SectionTitle } from '_atoms';
import { Spacing } from '_styles';

const SectionTitleContainer = props => {
    return (
        <>
            <View style={styles.container}>
                <SectionTitle text={props.text} />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingBottom: Spacing.SCALE_12
    }
})

export default SectionTitleContainer;