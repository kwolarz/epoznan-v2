import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, BigArticleSection, WeatherSection } from '_organisms';
import { Colors, Spacing } from '_styles';
import { Paths, Networking } from '_services';


const Home = ({navigation}) => {
    const URL = Paths.API_URL + Paths.HOME;
    const [data, setData] = useState([]);

    useEffect(() => {
        // data = Networking.getData(URL);
        fetch(URL)
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error))
        .finally(() => console.log(data));
    }, []);

    return (
        <SafeAreaView style={styles.container} edges={['left', 'top', 'right']}>
            <View style={styles.content}>
                <Header />
                <View style={styles.spacer} />
                <BigArticleSection data={data.middlePosts}/>
                <WeatherSection />
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