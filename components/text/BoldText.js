import React from 'react';
import {Text, StyleSheet} from 'react-native';

const BoldText = (props) => {
    return (
        <Text style={{...props.style, ...styles.text}}>{props.children}</Text>
    )
};

const styles = StyleSheet.create({
    text: {
        fontFamily: 'bold'
    }
});

export default BoldText;