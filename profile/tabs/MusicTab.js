import React from "react";
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import Colors from "../../constants/Colors";
import List from '../../components/List';

const MusicTab = (props) => {
    return (
        <View style={styles.main}>
            <ScrollView contentContainerStyle={{ flex: 1, width: '100%', alignItems: 'center' }}>
                <List title='Top Albums' />
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

export default MusicTab;