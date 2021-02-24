import React from 'react';
import { FlatList } from 'react-native';
import { BigArticle } from '_atoms';
import { Mixins, Spacing } from '_styles';

const DATA = [
    {
        id: 1,
        image: '_assets/images/test1.jpg',
        title: 'Wiceminister rozwoju: chcemy zmniejszyć mobilność, dyskutujemy o stokach i hotelach. Nie ma szans na odmrażanie',
    },
    {
        id: 2,
        image: '_assets/images/test1.jpg',
        title: 'Second Item',
    },
    {
        id: 3,
        image: '_assets/images/test1.jpg',
        title: 'Third Item',
    },
];

const width = Mixins.WINDOW_WIDTH;
const IMAGE_WIDTH = Mixins.scaleSize(300);
const image_margin = 0;
const nishhar = width - ((IMAGE_WIDTH + image_margin) * 2 + image_margin * 2);
const dataNum = [1, 2, 3];

const BigArticleList = () => {
    return (
        <>
            <FlatList
                style={{ marginRight: -Spacing.SCALE_22}}
                data={DATA}
                key={({id}, index) => index}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={ ({item}) => <BigArticle 
                    image={require('_assets/images/test1.jpg')}
                    title={item.title}
                />}
                snapToAlignment={"start"}
                //snapToOffsets={[...Array(dataNum.length)].map((x, i) => (i * (IMAGE_WIDTH + 2 * image_margin) - (nishhar * 0.5)))}
                snapToInterval={IMAGE_WIDTH - Spacing.SCALE_8}
                decelerationRate={"fast"}
                pagingEnabled
            />
        </>
    );
};

export default BigArticleList;