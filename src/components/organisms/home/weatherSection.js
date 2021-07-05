import React from 'react';
import { View } from 'react-native';
import { SectionTitleContainer } from '_molecules';

const WeatherSection = props => {
    return (
        <>
            <View>
                <SectionTitleContainer text={"Dziś w Poznaniu"} title={"Więcej wiadomości"}/>
            </View>
        </>
    );
};

export default WeatherSection;