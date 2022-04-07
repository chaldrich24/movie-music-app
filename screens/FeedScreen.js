import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList, Dimensions } from 'react-native';
import axios from 'axios';

import BoldText from '../components/text/BoldText';

const FeedScreen = props => {
    const current = new Date();
    const [movieData, setMovieData] = useState();
    const movieImageStartUrl = 'https://image.tmdb.org/t/p/original'

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = () => {
        const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=3a16dbd686603ddc46bf3c7b14671c2b&language=en-US&page=2';

        axios.get(url)
            .then((res) => {
                console.log(`Pulling data at ${current.getHours()}:${current.getMinutes()}.${current.getSeconds()}`);
                setMovieData(res.data.results);
            })
    }



    const renderItem = ({ item }) => {

        return (
            <View style={styles.listItemContainer}>
                <View style={styles.user}>
                    <Text>Toronto Blue Jay liked</Text>
                </View>
                <View style={styles.postContent}>
                    <View style={styles.image}>
                        <Image style={{ width: '100%', height: '100%' }} source={{ uri: `${movieImageStartUrl}${item.poster_path}`}} />
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
                data={movieData} 
                renderItem={renderItem}
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    user: {
        flexBasis: '5%',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        width: '100%'
    },
    postItemTitle: {
        fontSize: 23,
        paddingTop: 5
    }
});

export default FeedScreen;