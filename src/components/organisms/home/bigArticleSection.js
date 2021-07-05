import React from 'react';
import { View } from 'react-native';
import { BigArticleList, SectionTitleContainer } from '_molecules';

const BigArticleSection = props => {
    return (
        <>
            <View>
                <SectionTitleContainer text={"Top"} title={"Więcej wiadomości"}/>
                <BigArticleList data={props.data} />
            </View>
        </>
    );
};

export default BigArticleSection;