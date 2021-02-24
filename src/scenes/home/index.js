import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, BigArticleSection } from '_organisms';
import { Colors, Spacing } from '_styles';


const Home = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container} edges={['left', 'top', 'right']}>
            <View style={styles.content}>
                <Header />
                <View style={styles.spacer} />
                <BigArticleSection />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingHorizontal: Spacing.SCALE_22,
        paddingTop: Spacing.SCALE_32,
    },
    spacer: {
        //flex: 1,
        paddingVertical: Spacing.SCALE_18,
    },
});

export default Home;