import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

import Colors from "../../constants/Colors";
import List from '../../components/List';

const MovieTab = (props) => {
    return (
        <View style={styles.main}>
            <ScrollView contentContainerStyle={{ flex: 1, width: '100%', alignItems: 'center' }}>
                <List data={props.data.users[0].movies.top} movies={props.data.movies} title='Top Picks' type='movie' />
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        padding: 5,
        backgroundColor: Colors.secondary
    }
});

export default MovieTab;