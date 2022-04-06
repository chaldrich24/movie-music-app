import React, { useState } from "react";
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

import MovieTab from "../profile/tabs/MovieTab";
import FavoritesTab from "../profile/tabs/FavoritesTab";
import MusicTab from "../profile/tabs/MusicTab";
import RegularText from "../components/text/RegularText";
import BoldText from "../components/text/BoldText";
import Colors from "../constants/Colors";
import data from '../data/mockData';

const ProfileScreen = (props) => {
    const [activeTab, setActiveTab] = useState('MovieTab');
    console.log(data)
    let Content;

    if (activeTab === 'MusicTab') {
        Content = MusicTab;
    } else if (activeTab === 'Favorites') {
        Content = FavoritesTab;
    } else {
        Content = MovieTab;
    }

    const setActiveTabHandler = (tab, event) => {
        setActiveTab(tab);
        event.target.backgroundColor = 'black';
    }

    return (
        <View style={styles.screen}>
            <View style={styles.profileInfoContainer}>
                <View style={styles.profilePicContainer}>
                    <Image
                        style={styles.profilePic}
                        source={{
                            uri: "https://lh3.googleusercontent.com/1YPUuosI4dyMZ2SFI5AUMXI8k_wIWggTn8Nu5o05dJl0waZM0psajYm21v_Xm_-IJTxmzA525b3zSM3ZzoYkNKvVfJu5Pw-1HcwnUQ=w600",
                        }}
                    />
                </View>
                <View style={styles.profileInfo}>
                    <BoldText style={styles.username}>Solid</BoldText>
                    <RegularText style={styles.bio}>
                        "If only I had something that could show who I really am"
                    </RegularText>
                </View>
            </View>
            <View style={styles.profileTabs}>
                <TouchableOpacity style={(activeTab == 'MovieTab') ? { ...styles.active, ...styles.profileTabIcon } : styles.profileTabIcon} onPress={setActiveTabHandler.bind(this, 'MovieTab')}>
                    <View>
                        <MaterialCommunityIcons style={{ textAlign: 'center' }} name="movie-open" size={24} color="black" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={(activeTab == 'MusicTab') ? { ...styles.active, ...styles.profileTabIcon } : styles.profileTabIcon} onPress={setActiveTabHandler.bind(this, 'MusicTab')}>
                    <View >
                        <MaterialCommunityIcons style={{ textAlign: 'center' }} name="music" size={24} color="black" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={(activeTab == 'Favorites') ? { ...styles.active, ...styles.profileTabIcon } : styles.profileTabIcon} onPress={setActiveTabHandler.bind(this, 'Favorites')}>
                    <View>
                        <Entypo style={{ textAlign: 'center' }} name="heart" size={24} color="black" />
                    </View>
                </TouchableOpacity>
            </View>
            <Content data={data} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        width: '100%'
    },
    profilePicContainer: {
        width: 150,
        height: 150,
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 10,
        overflow: "hidden",
    },
    profilePic: {
        width: "100%",
        height: "100%",
    },
    profileInfoContainer: {
        backgroundColor: Colors.secondary,
        flexDirection: "row",
        padding: 20,
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "grey",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 5,
    },
    profileInfo: {
        paddingHorizontal: 15,
        width: "60%",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        height: 150,
    },
    username: {
        fontSize: 25,
    },
    bio: {
        fontSize: 13,
        color: "#EEF4ED",
        textAlign: "center",
    },
    profileTabs: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: Colors.secondary,
       
        marginTop: 1,
        backgroundColor: Colors.primary
    },
    profileTabIcon: {
        flex: 1,
        padding: 10,
        borderRightWidth: .25,
        borderRightColor: 'rgba(166, 166, 166,0.1)',
        borderLeftWidth: .25,
        borderLeftColor: 'lightgrey',
    },
    active: {
        backgroundColor: '#e8e8e8',
    }
});

export default ProfileScreen;
