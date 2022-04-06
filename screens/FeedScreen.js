import React, {useRef, useEffect} from 'react';
import { View, Text, StyleSheet, Image, FlatList, Dimensions } from 'react-native';

import data from '../data/mockData';
import BoldText from '../components/text/BoldText';

const FeedScreen = props => {
    console.log(data.movies);

    const renderItem = ({ item }) => {

        return (
            <View style={styles.listItemContainer}>
                <View style={styles.user}>
                    <Text>Toronto Blue Jay liked</Text>
                </View>
                <View style={styles.postContent}>
                    <View style={styles.image}>
                        <Image style={{ width: '100%', height: '100%' }} source={{ uri: item.imageUrl }} />
                    </View>
                    <BoldText style={styles.postItemTitle}>{item.title}</BoldText>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.screen}>
            <FlatList
                style={{ width: '100%', }}
                contentContainerStyle={{ alignItems: 'center', }}
                data={data.movies} renderItem={renderItem}
                keyExtractor={item => item.id}
                snapToAlignment='center'
                snapToInterval={Dimensions.get('window').height * .82}
                decelerationRate='fast'
            />
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
    },
    listItemContainer: {
        width: 400,
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height * .82,
        padding: 10,
    },
    image: {
        width: '100%',
        height: '90%',
        resizeMode: 'cover',
        borderWidth: 1,
    },
    postContent: {
        width: '100%',
        flexBasis: '95%',
        justifyContent: 'center'
    },
    user: {
        flexBasis: '5%',
        justifyContent: 'flex-end'
    },
    postItemTitle: {
        fontSize: 23,
        paddingTop: 5
    }
});

export default FeedScreen;