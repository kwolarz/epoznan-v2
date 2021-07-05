import React from 'react';
import { FlatList } from 'react-native';
import { BigArticle } from '_atoms';
import { Mixins, Spacing } from '_styles';

const width = Mixins.WINDOW_WIDTH;
const IMAGE_WIDTH = Mixins.scaleSize(300);
const image_margin = 0;
const nishhar = width - ((IMAGE_WIDTH + image_margin) * 2 + image_margin * 2);
const dataNum = [1, 2, 3];

const BigArticleList = props => {
    return (
        <>
            <FlatList
                style={{ marginHorizontal: -Spacing.SCALE_22, paddingLeft: Spacing.SCALE_22}}
                data={props.data}
                keyExtractor={({id}, index) => index.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={ ({item}) => <BigArticle 
                    image={item.imgUrl}
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