import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from '_organisms';
import { Colors, Spacing } from '_styles';

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        paddingHorizontal: Spacing.SCALE_22,
        backgroundColor: Colors.WHITE,
    },
});

export default Home;