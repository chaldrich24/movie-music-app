import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

import RegularText from "../../components/text/RegularText";
import Colors from "../../constants/Colors";
import List from '../../components/List';

const MainProfileTab = (props) => {
    return (
        <View style={styles.main}>
            <ScrollView contentContainerStyle={{ flex: 1, width: '100%', alignItems: 'center' }}>
                <List />
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

export default MainProfileTab;