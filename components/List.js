import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import RegularText from "./text/RegularText";
import Colors from "../constants/Colors";

const List = props => {
    return (
        <View style={styles.list}>
            <RegularText style={styles.title}>My Ranger Elites</RegularText>
            <View style={styles.listImages}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{
                        uri: 'https://cdn.shopify.com/s/files/1/1057/4964/products/stalker-vintage-movie-poster-original-32x42.jpg?v=1614632596',
                    }} />
                </View>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{
                        uri: 'https://cdn.shopify.com/s/files/1/1057/4964/products/stalker-vintage-movie-poster-original-32x42.jpg?v=1614632596',
                    }} />
                </View>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{
                        uri: 'https://cdn.shopify.com/s/files/1/1057/4964/products/stalker-vintage-movie-poster-original-32x42.jpg?v=1614632596',
                    }} />
                </View>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{
                        uri: 'https://cdn.shopify.com/s/files/1/1057/4964/products/stalker-vintage-movie-poster-original-32x42.jpg?v=1614632596',
                    }} />
                </View>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{
                        uri: 'https://cdn.shopify.com/s/files/1/1057/4964/products/stalker-vintage-movie-poster-original-32x42.jpg?v=1614632596',
                    }} />
                </View>
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    image: {
        height: '100%',
        width: '100%'
    },
    imageContainer: {
        width: 66,
        height: 100,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 2,
        shadowOpacity: .85
    },
    list: {
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 150,
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
        fontSize: 18,
    },
});

export default List;