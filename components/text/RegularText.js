import React from 'react';
import {Text, StyleSheet} from 'react-native';

const RegularText = (props) => {
    return (
        <Text style={{...props.style, ...styles.text}}>{props.children}</Text>
    )
};

const styles = StyleSheet.create({
    text: {
        fontFamily: 'regular'
    }
});

export default RegularText;