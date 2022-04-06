import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

import RegularText from "./text/RegularText";
import Colors from "../constants/Colors";

const { height, width } = Dimensions.get('window');

const List = props => {

    const userListData = props.data;
    let listContents;
    let imageContainer;

    if (props.type === 'movie') {
        listContents = props.movies;
        imageContainer = styles.movieImageContainer;
    } else {
        listContents = props.music;
        imageContainer = styles.musicImageContainer;
    }

    return (
        <View style={styles.screen}>
            <View style={styles.list}>
                <RegularText style={styles.title}>{props.title}</RegularText>
                <View style={styles.listImages}>
                    {
                        userListData.map(item => {
                            const id = item.id
                            return (
                                <View 
                                key={id}
                                style={imageContainer}>
                                    <Image style={styles.image} source={{
                                        uri: listContents[id - 1].imageUrl,
                                    }} />
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        width: width
    },
    image: {
        height: '100%',
        width: '100%'
    },
    movieImageContainer: {
        width: 66,
        height: 100,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 2,
        shadowOpacity: .85
    },
    musicImageContainer: {
        width: 66,
        height: 66,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 2,
        shadowOpacity: .85
    },
    list: {
        alignItems: 'center',
        justifyContent: 'space-around',
        height: height / 6,
        width: '90%',
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 9,
        padding: 10,
        backgroundColor: 'lightgrey'
    },
    listImages: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        width: '100%',
    },
    title: {
        fontSize: 20,
    },
});

export default List;